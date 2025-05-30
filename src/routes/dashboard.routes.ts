import express from "express";
import { Request, Response } from "express";
import { getResumoDashboard } from "../controllers/dashboard.controller";

const router = express.Router();

router.get("/resumo", async (req: Request, res: Response) => {
  await getResumoDashboard(req, res);
});


export default router;