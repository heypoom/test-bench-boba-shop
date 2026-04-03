import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { basicAuth } from "hono/basic-auth";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { HTTPException } from "hono/http-exception";

import { franchisesRouter } from "./routes/franchises.js";
import { ordersRouter } from "./routes/orders.js";
import { menuRouter } from "./routes/menu.js";
import { customersRouter } from "./routes/customers.js";
import { kpiRouter } from "./routes/kpi.js";

// ── Credentials (hard-coded for demo) ──────────────────────────
const CREDENTIALS = {
  username: "admin",
  password: "koiboba2026",
} as const;

const PORT = 3001;

// ── App ────────────────────────────────────────────────────────
const app = new Hono();

// Global middleware
app.use("*", logger());
app.use("*", prettyJSON());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173"],
    credentials: true,
  }),
);

// Public routes
app.get("/", (c) => c.json({ name: "KOI Boba API", version: "1.0.0" }));
app.get("/health", (c) =>
  c.json({ status: "ok", timestamp: new Date().toISOString() }),
);

// Protected API — all /api/* routes require basic auth
app.use("/api/*", basicAuth(CREDENTIALS));

// API routes
app.route("/api/franchises", franchisesRouter);
app.route("/api/orders", ordersRouter);
app.route("/api/menu", menuRouter);
app.route("/api/customers", customersRouter);
app.route("/api/kpi", kpiRouter);

// Verify auth endpoint
app.get("/api/me", (c) => {
  return c.json({
    authenticated: true,
    user: CREDENTIALS.username,
    role: "owner",
  });
});

// 404 catch-all
app.notFound((c) => c.json({ error: "Not found" }, 404));

// Error handler — pass HTTPExceptions (like 401 from basicAuth) through unchanged
app.onError((err, c) => {
  if (err instanceof HTTPException) return err.getResponse();
  console.error(`[error] ${err.message}`);
  return c.json({ error: "Internal server error" }, 500);
});

// ── Start ──────────────────────────────────────────────────────
serve({ fetch: app.fetch, port: PORT }, (info) => {
  console.log("");
  console.log("  KOI Boba API");
  console.log(`  ➜  http://localhost:${info.port}`);
  console.log("");
  console.log("  Credentials");
  console.log(`  username : ${CREDENTIALS.username}`);
  console.log(`  password : ${CREDENTIALS.password}`);
  console.log("");
  console.log("  Endpoints  (all require Basic Auth)");
  console.log("  GET /api/franchises");
  console.log("  GET /api/orders");
  console.log("  GET /api/menu");
  console.log("  GET /api/customers");
  console.log("  GET /api/kpi");
  console.log("  GET /api/me");
  console.log("");
});
