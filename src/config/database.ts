// src/config/database.ts
import { Sequelize, Options } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

/**
 * Sequelize singleton with a conservative connection pool.
 * - Reuses connections (no new connection per request)
 * - Keeps pool small to respect DB limits
 * - Adds retry & keep-alive to make the app resilient
 *
 * You can tune these via environment variables:
 *   DB_POOL_MAX (default 3)
 *   DB_POOL_MIN (default 0)
 *   DB_POOL_IDLE_MS (default 30000)
 *   DB_POOL_ACQUIRE_MS (default 20000)
 *   DB_POOL_EVICT_MS (default 30000)
 *   DB_CONNECT_TIMEOUT_MS (default 10000)
 *   DB_RETRY_MAX (default 2)
 */

const poolMax = Number(process.env.DB_POOL_MAX ?? 3);
const poolMin = Number(process.env.DB_POOL_MIN ?? 0);
const poolIdle = Number(process.env.DB_POOL_IDLE_MS ?? 30_000);
const poolAcquire = Number(process.env.DB_POOL_ACQUIRE_MS ?? 20_000);
const poolEvict = Number(process.env.DB_POOL_EVICT_MS ?? 30_000);
const connectTimeout = Number(process.env.DB_CONNECT_TIMEOUT_MS ?? 10_000);
const retryMax = Number(process.env.DB_RETRY_MAX ?? 2);

export const sequelize: Sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.DB_USER || "",
  process.env.DB_PASS || "",
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,

    // IMPORTANT: pooled connections to avoid overloading the DB
    pool: {
      max: poolMax,     // Max concurrent connections
      min: poolMin,     // Keep idle pool small
      idle: poolIdle,   // Release a conn if idle for this long
      acquire: poolAcquire, // Time to wait for a free conn before throwing
      evict: poolEvict, // How often idle conns are evicted
    },

    // mysql2-specific options
    dialectOptions: {
      connectTimeout,
      supportBigNumbers: true,
      decimalNumbers: true,

      // Keep TCP connection alive to reduce reconnect churn
      // (supported by mysql2 via node's net socket)
      enableKeepAlive: true,
      keepAliveInitialDelay: 10_000,
    },

    // Modest retry to handle transient errors (network, brief overload)
    retry: {
      max: retryMax,
    },
  } as Options
);