import express from "express";
import { Request, Response } from "express";
import { getProdutividadeDashboard } from "../controllers/produtividade.controller";

const router = express.Router();

router.get("/produtividade", async (req: Request, res: Response) => {
  await getProdutividadeDashboard(req, res);
});


export default router;