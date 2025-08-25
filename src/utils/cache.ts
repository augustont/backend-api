import type { Request, Response, NextFunction } from "express";

type KeyBuilder = (req: Request) => string;

interface CacheEntry<T = any> {
  value: T;
  // time when value is considered fresh
  freshUntil: number;
  // time until which we can serve stale (SWR)
  staleUntil: number;
}

/**
 * Single in-memory store used by both the middleware and the imperative cache API.
 * Keeping a single store ensures controllers using the default export (get/set)
 * and routes using the middleware see the same cached data.
 */
const store = new Map<string, CacheEntry>();
const inFlight = new Map<string, Promise<any>>();

/* =================================================================================
 * 1) IMPERATIVE CACHE API (default export)
 * ---------------------------------------------------------------------------------
 * Allows controllers to do:
 *   import cache from "../utils/cache";
 *   const v = cache.get(key);
 *   cache.set(key, data, 180);  // ttl seconds
 *   cache.del(key); cache.clear();
 * ================================================================================= */

const defaultSWRFactor = 1; // stale window defaults to ttl * factor if not given

const defaultCache = {
  get<T = any>(key: string): T | null {
    const hit = store.get(key);
    if (!hit) return null;
    const now = Date.now();
    if (now <= hit.freshUntil) return hit.value as T;

    // if stale but still within stale window, return stale (SWR semantics)
    if (now <= hit.staleUntil) return hit.value as T;

    // too stale
    store.delete(key);
    return null;
  },

  set<T = any>(key: string, value: T, ttlSeconds: number, swrSeconds?: number): void {
    const now = Date.now();
    const ttlMs = Math.max(0, ttlSeconds) * 1000;
    const swrMs =
      (swrSeconds != null ? Math.max(0, swrSeconds) : Math.max(0, ttlSeconds) * defaultSWRFactor) * 1000;

    store.set(key, {
      value,
      freshUntil: now + ttlMs,
      staleUntil: now + ttlMs + swrMs,
    });
  },

  del(key: string): void {
    store.delete(key);
  },

  clear(): void {
    store.clear();
  },
};

export default defaultCache;

/* =================================================================================
 * 2) MIDDLEWARE CACHE WITH ANTI-STAMPEDE & SWR
 * ---------------------------------------------------------------------------------
 * Useful when you want to cache entire responses per route with automatic keys.
 * Example:
 *   router.get("/resumo", cacheMiddleware(60, { swrSeconds: 120 }), handler)
 * ================================================================================= */

/**
 * In-memory cache middleware with anti-stampede and stale-while-revalidate support.
 *
 * - fresh TTL: while fresh, serve cached instantly
 * - SWR (stale-while-revalidate): after fresh TTL but before stale window expires,
 *   serve stale immediately and trigger a single background recomputation
 * - anti-stampede: concurrent requests for the same key share a single recomputation
 *
 * @param ttlSeconds  how long the response is fresh
 * @param options.swrSeconds how long we keep serving stale while revalidating (default: ttlSeconds)
 * @param options.key function to build a cache key (default: method:url?query)
 */
export function cacheMiddleware(
  ttlSeconds: number,
  options?: { swrSeconds?: number; key?: KeyBuilder }
) {
  const swrSeconds = options?.swrSeconds ?? ttlSeconds;
  const buildKey: KeyBuilder =
    options?.key ??
    ((req) => {
      // Stable key including method, baseUrl+path and sorted query params
      const url = req.baseUrl + req.path;
      const qp = new URLSearchParams();
      Object.entries(req.query)
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([k, v]) => {
          if (Array.isArray(v)) {
            v.forEach((vv) => qp.append(k, String(vv)));
          } else if (v != null) {
            qp.set(k, String(v));
          }
        });
      return `${req.method}:${url}?${qp.toString()}`;
    });

  return async function (req: Request, res: Response, next: NextFunction) {
    const key = buildKey(req);
    const now = Date.now();
    const hit = store.get(key);

    // If fresh, serve immediately
    if (hit && now < hit.freshUntil) {
      return res.json(hit.value);
    }

    // If a recomputation is already in-flight, await it (hard miss)
    if (!hit || now >= hit.staleUntil) {
      // no cache or too stale: block and recompute
      try {
        const data = await recomputeOnce(key, () =>
          runAndCaptureJson(req, res, next, ttlSeconds, swrSeconds)
        );
        return res.json(data);
      } catch (err) {
        return next(err as any);
      }
    }

    // We are in SWR window: serve stale and trigger background refresh once
    res.json(hit.value);
    // Fire-and-forget revalidation if not already running
    void recomputeOnce(key, () =>
      runAndCaptureJson(req, res, next, ttlSeconds, swrSeconds)
    ).catch(() => {});
  };
}

/**
 * Ensure only one recomputation happens per key at a time.
 */
async function recomputeOnce(key: string, fn: () => Promise<any>) {
  if (inFlight.has(key)) {
    return inFlight.get(key)!;
  }
  const p = fn()
    .catch((e) => {
      // bubble up but ensure we clear the inFlight state
      throw e;
    })
    .finally(() => {
      inFlight.delete(key);
    });

  inFlight.set(key, p);
  return p;
}

/**
 * Executes the downstream handler and captures res.json payload to store in cache.
 * We call the next handler, hijack res.json to intercept the payload, and once it
 * is written, we write into cache and resolve.
 */
function runAndCaptureJson(
  req: Request,
  res: Response,
  next: NextFunction,
  ttlSeconds: number,
  swrSeconds: number
): Promise<any> {
  return new Promise((resolve, reject) => {
    const originalJson = res.json.bind(res);

    // Patch res.json to intercept payload
    (res as any).json = (body: any) => {
      try {
        const keyParts = [req.method, req.baseUrl + req.path];
        const qp = new URLSearchParams();
        Object.entries(req.query)
          .sort(([a], [b]) => a.localeCompare(b))
          .forEach(([k, v]) => {
            if (Array.isArray(v)) v.forEach((vv) => qp.append(k, String(vv)));
            else if (v != null) qp.set(k, String(v));
          });
        const key = `${keyParts[0]}:${keyParts[1]}?${qp.toString()}`;

        const now = Date.now();
        const entry: CacheEntry = {
          value: body,
          freshUntil: now + ttlSeconds * 1000,
          staleUntil: now + (ttlSeconds + swrSeconds) * 1000,
        };
        store.set(key, entry);
      } catch {
        // ignore cache set errors
      }
      resolve(body);
      return originalJson(body);
    };

    // Call downstream handler
    try {
      next();
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Helpers for manual cache control if needed from controllers
 */
export function cacheClearByPrefix(prefix: string) {
  for (const k of Array.from(store.keys())) {
    if (k.startsWith(prefix)) store.delete(k);
  }
}

export function cacheStats() {
  const now = Date.now();
  let fresh = 0, stale = 0;
  for (const [, v] of store) {
    if (now < v.freshUntil) fresh++;
    else if (now < v.staleUntil) stale++;
  }
  return { size: store.size, fresh, stale };
}