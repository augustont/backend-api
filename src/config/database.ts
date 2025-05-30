// 4. Arquivo: src/config/database.ts
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Conexão com o banco de dados MySQL
export const sequelize = new Sequelize(
  process.env.DB_NAME || '',
  process.env.DB_USER || '',
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false
  }
);