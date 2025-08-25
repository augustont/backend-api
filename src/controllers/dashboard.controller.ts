import { Request, Response } from "express";
import { Op, fn, col } from "sequelize";
import models from "../models";

// ------------------------
// Query helpers
// ------------------------
type Periodo = "diario" | "mensal" | "trimestral";
function normalizePeriodo(input: unknown): Periodo {
  const raw = Array.isArray(input) ? input[0] : input;
  const val = typeof raw === "string" ? raw.toLowerCase() : undefined;
  if (val === "mensal" || val === "trimestral" || val === "diario") return val;
  return "diario";
}

// ------------------------
// In-memory cache (per-process)
// ------------------------
interface CacheEntry<T = any> {
  data?: T;
  expiresAt: number;
  inFlight?: Promise<T> | null; // anti-stampede: dedupe concurrent calls
}

const DASHBOARD_CACHE = new Map<string, CacheEntry>();
const TTL_MS = 3 * 60 * 1000; // 3 minutes

function cacheKeyResumo(periodo: unknown) {
  return `resumo:${normalizePeriodo(periodo)}`;
}

export async function getResumoDashboard(req: Request, res: Response) {
  const periodo = normalizePeriodo((req.query as any).periodo);
  const key = cacheKeyResumo(periodo);
  const now = Date.now();

  // Serve from cache if fresh
  const cached = DASHBOARD_CACHE.get(key);
  if (cached && cached.data && cached.expiresAt > now) {
    return res.json(cached.data);
  }

  // If there is an ongoing computation, wait for it and serve the result
  if (cached && cached.inFlight) {
    try {
      const data = await cached.inFlight;
      return res.json(data);
    } catch (e) {
      // fall through to recompute
    }
  }

  // Compute date window & format based on período
  const agora = new Date();
  let dataInicial: Date;
  let dateFormat: string;

  switch (periodo) {
    case "mensal":
      dataInicial = new Date(agora.getFullYear(), agora.getMonth(), 1);
      dateFormat = "%d/%m";
      break;
    case "trimestral":
      dataInicial = new Date(agora.getFullYear(), 0, 1);
      // Para trimestral manteremos o agrupamento por dia (DD/MM) para não
      // reintroduzir problemas de tipos; o front consolida se necessário.
      dateFormat = "%d/%m";
      break;
    default:
      dataInicial = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
      dateFormat = "%d/%m";
  }

  // Start in-flight promise so concurrent requests piggyback
  const buildPromise = (async () => {
    // --- BEGIN original DB work ---
    const graficoRaw = await models.willy_requests.findAll({
      attributes: [
        [fn("DATE_FORMAT", col("end_inspection_date"), dateFormat), "name"],
        [fn("COUNT", col("willy_requests.id")), "total"],
      ],
      include: [
        {
          model: models.orders_of_service,
          as: "order_of_service",
          attributes: [],
          where: { os_status: "solucionada" },
          required: true,
        },
      ],
      where: {
        status: "concluída",
        end_inspection_date: { [Op.gte]: dataInicial },
      },
      group: [fn("DATE_FORMAT", col("end_inspection_date"), dateFormat)],
      order: [[fn("DATE_FORMAT", col("end_inspection_date"), dateFormat), "ASC"]],
    });

    const totalPorUnidade = await models.willy_requests.findAll({
      attributes: [
        [col("order_of_service.execution_unit.name"), "unidade"],
        [fn("COUNT", col("willy_requests.id")), "total"],
      ],
      include: [
        {
          model: models.orders_of_service,
          as: "order_of_service",
          attributes: [],
          where: { os_status: "solucionada" },
          required: true,
          include: [
            {
              model: models.execution_units,
              as: "execution_unit",
              attributes: [],
            },
          ],
        },
      ],
      where: {
        status: "concluída",
        end_inspection_date: { [Op.gte]: dataInicial },
      },
      group: ["order_of_service.execution_unit.id"],
    });

    const totalPorCliente = await models.willy_requests.findAll({
      attributes: [
        [col("order_of_service.execution_unit.customer.name"), "cliente"],
        [fn("COUNT", col("willy_requests.id")), "total"],
      ],
      include: [
        {
          model: models.orders_of_service,
          as: "order_of_service",
          attributes: [],
          where: { os_status: "solucionada" },
          required: true,
          include: [
            {
              model: models.execution_units,
              as: "execution_unit",
              attributes: [],
              required: true,
              include: [
                {
                  model: models.customers,
                  as: "customer",
                  attributes: [],
                },
              ],
            },
          ],
        },
      ],
      where: {
        status: "concluída",
        end_inspection_date: { [Op.gte]: dataInicial },
      },
      group: ["order_of_service.execution_unit.customer.id"],
    });

    const totalGeral = totalPorCliente.reduce(
      (acc: number, row: any) => acc + parseInt(row.getDataValue("total")),
      0
    );

    const payload = {
      resumo: {
        total_geral: totalGeral,
        grafico: graficoRaw.map((r: any) => r.dataValues),
        por_unidade: totalPorUnidade.map((r: any) => r.dataValues),
        por_cliente: totalPorCliente.map((r: any) => r.dataValues),
      },
    };

    return payload;
    // --- END original DB work ---
  })();

  // Save placeholder with inFlight, so concurrent calls await
  DASHBOARD_CACHE.set(key, { data: undefined, expiresAt: 0, inFlight: buildPromise });

  try {
    const data = await buildPromise;
    // Store resolved data with TTL
    DASHBOARD_CACHE.set(key, { data, expiresAt: Date.now() + TTL_MS, inFlight: null });
    return res.json(data);
  } catch (error) {
    // On error, clear inFlight so next request can retry
    DASHBOARD_CACHE.delete(key);
    console.error("Erro ao gerar resumo:", error);
    return res.status(500).json({ erro: "Erro ao gerar resumo" });
  }
}
