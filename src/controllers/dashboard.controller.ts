import { Request, Response } from "express";
import { Op, fn, col } from "sequelize";
import models from "../models";

export async function getResumoDashboard(req: Request, res: Response) {
  const { periodo = "diario" } = req.query;

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
      dateFormat = "%Y-T%q"; // Usaremos uma abordagem alternativa no frontend
      break;
    default:
      dataInicial = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
      dateFormat = "%d/%m";
  }

  try {
    const graficoRaw = await models.willy_requests.findAll({
      attributes: [
        [fn("DATE_FORMAT", col("end_inspection_date"), dateFormat), "name"],
        [fn("COUNT", col("willy_requests.id")), "total"]
      ],
      include: [
        {
          model: models.orders_of_service,
          as: "order_of_service",
          attributes: [],
          where: { os_status: "solucionada" },
          required: true
        }
      ],
      where: {
        status: "concluída",
        end_inspection_date: { [Op.gte]: dataInicial }
      },
      group: [fn("DATE_FORMAT", col("end_inspection_date"), dateFormat)],
      order: [[fn("DATE_FORMAT", col("end_inspection_date"), dateFormat), "ASC"]]
    });

    const totalPorUnidade = await models.willy_requests.findAll({
      attributes: [
        [col("order_of_service.execution_unit.name"), "unidade"],
        [fn("COUNT", col("willy_requests.id")), "total"]
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
              attributes: []
            }
          ]
        }
      ],
      where: {
        status: "concluída",
        end_inspection_date: { [Op.gte]: dataInicial }
      },
      group: ["order_of_service.execution_unit.id"]
    });

    const totalPorCliente = await models.willy_requests.findAll({
      attributes: [
        [col("order_of_service.execution_unit.customer.name"), "cliente"],
        [fn("COUNT", col("willy_requests.id")), "total"]
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
                  attributes: []
                }
              ]
            }
          ]
        }
      ],
      where: {
        status: "concluída",
        end_inspection_date: { [Op.gte]: dataInicial }
      },
      group: ["order_of_service.execution_unit.customer.id"]
    });

    const totalGeral = totalPorCliente.reduce(
      (acc: number, row: any) => acc + parseInt(row.getDataValue("total")),
      0
    );

    return res.json({
      resumo: {
        total_geral: totalGeral,
        grafico: graficoRaw.map((r: any) => r.dataValues),
        por_unidade: totalPorUnidade.map((r: any) => r.dataValues),
        por_cliente: totalPorCliente.map((r: any) => r.dataValues)
      }
    });
  } catch (error) {
    console.error("Erro ao gerar resumo:", error);
    return res.status(500).json({ erro: "Erro ao gerar resumo" });
  }
}
