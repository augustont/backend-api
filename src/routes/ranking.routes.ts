import express from "express";
import { Request, Response } from "express";
import { getRankingOperadores } from "../controllers/ranking.controller";

const router = express.Router();

router.get("/ranking", async (req: Request, res: Response) => {
    await getRankingOperadores(req, res);
  });

export default router;
