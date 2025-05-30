// src/controllers/ranking.controller.ts
import { Request, Response } from "express";
import { Op, fn, col, literal } from "sequelize";
import models from "../models";

export async function getRankingOperadores(req: Request, res: Response) {
  const { periodo = "diario" } = req.query;

  const agora = new Date();
  let dataInicial: Date;

  switch (periodo) {
    case "mensal":
      dataInicial = new Date(agora.getFullYear(), agora.getMonth(), 1);
      break;
    case "trimestral":
      const mes = agora.getMonth();
      const inicioTrimestre = Math.floor(mes / 3) * 3;
      dataInicial = new Date(agora.getFullYear(), inicioTrimestre, 1);
      break;
    default:
      dataInicial = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
  }

  try {
    const ranking = await models.willy_requests.findAll({
      attributes: [
        [col("operator.name"), "operador"],
        [fn("COUNT", col("willy_requests.id")), "vistorias"]
      ],
      include: [
        {
          model: models.users,
          as: "operator",
          attributes: ["id", "name"]
        }
      ],
      where: {
        status: "concluída",
        end_inspection_date: {
          [Op.gte]: dataInicial
        }
      },
      group: ["operator.id"],
      order: [[literal("vistorias"), "DESC"]],
      limit: 10
    });

    return res.json({ ranking: ranking.map((r: any) => r.dataValues) });
  } catch (error) {
    console.error("Erro ao gerar ranking:", error);
    return res.status(500).json({ erro: "Erro ao gerar ranking" });
  }
}
