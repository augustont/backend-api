import { Request, Response } from "express";
import { Op, fn, col } from "sequelize";
import models from "../models";
// ⬇️ Ajuste aqui: import de default export do cache util
import cache from "../utils/cache";

export async function getProdutividadeDashboard(req: Request, res: Response) {
  // Garante string e default
  const periodo = String(req.query.periodo ?? "diaria");

  const cacheKey = `produtividade:${periodo}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return res.json(cached);
  }

  const agora = new Date();
  let dataInicial: Date;
  let groupFormat: string;

  switch (periodo) {
    case "mensal":
      // últimos 6 meses
      dataInicial = new Date(agora.getFullYear(), agora.getMonth() - 5, 1);
      groupFormat = "%Y-%m"; // Agrupa por mês
      break;
    case "trimestral":
      // últimos 12 meses
      dataInicial = new Date(agora.getFullYear() - 1, agora.getMonth(), 1);
      groupFormat = "%Y-%m"; // Também agrupa por mês
      break;
    default:
      // últimos 7 dias
      dataInicial = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() - 6);
      groupFormat = "%Y-%m-%d"; // Agrupa por dia
  }

  try {
    const grafico = await models.willy_requests.findAll({
      attributes: [
        [fn("DATE_FORMAT", col("end_inspection_date"), groupFormat), "periodo"],
        [fn("COUNT", col("id")), "total"]
      ],
      where: {
        status: "concluída",
        end_inspection_date: { [Op.gte]: dataInicial }
      },
      // Observação: algumas versões do Sequelize aceitam string em group/order.
      // Se preferir, pode trocar por Sequelize.literal, mas mantive como estava.
      group: [fn(`DATE_FORMAT(end_inspection_date, '${groupFormat}')`)],
      order: [fn(`periodo ASC`)]
    });

    const ranking = await models.willy_requests.findAll({
      attributes: [
        [col("user.name"), "nome"],
        [fn("COUNT", col("willy_requests.id")), "total"]
      ],
      include: [
        {
          model: models.users,
          as: "user",
          attributes: []
        }
      ],
      where: {
        status: "concluída",
        end_inspection_date: { [Op.gte]: dataInicial }
      },
      group: ["user.id"],
      order: [[fn("COUNT", col("willy_requests.id")), "DESC"]],
      limit: 5
    });

    const total = grafico.reduce((acc: number, item: any) => acc + parseInt(item.getDataValue("total")), 0);

    const resposta = {
      grafico: grafico.map((r: any) => ({ name: r.get("periodo"), total: r.get("total") })),
      total,
      meta: 1000,
      metaPorItem: periodo === "diaria" ? 200 : periodo === "mensal" ? 2000 : 6000,
      ranking: ranking.map((r: any) => ({ nome: r.get("nome"), total: r.get("total") }))
    };

    // TTL de 180s
    cache.set(cacheKey, resposta, 180);

    return res.json(resposta);
  } catch (error) {
    console.error("Erro ao obter produtividade:", error);
    return res.status(500).json({ erro: "Erro ao obter produtividade" });
  }
}