import express from "express";
import rateLimit from "express-rate-limit";
import cors from "cors";
import dotenv from "dotenv";
import dashboardRoutes from "./routes/dashboard.routes";
import rankingRoutes from "./routes/ranking.routes";
import produtividadeRoutes from "./routes/produtividade.routes";



dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Rate limiter defensivo por IP: 30 requisições por minuto
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 30, // Limite de 30 requisições por IP
});
app.use(limiter);

app.use("/dashboard", dashboardRoutes);
app.use("/operadores", rankingRoutes);
app.use("/dashboard", produtividadeRoutes);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});