import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dashboardRoutes from "./routes/dashboard.routes";
import rankingRoutes from "./routes/ranking.routes";
import produtividadeRoutes from "./routes/produtividade.routes";



dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/dashboard", dashboardRoutes);
app.use("/operadores", rankingRoutes);
app.use("/dashboard", produtividadeRoutes);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});