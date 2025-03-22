import { AppConfig } from "$config";
import { homeController } from "$controllers/home.controller";
import { htmxMiddleware } from "$middlewares/htmx.middleware";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono<AppConfig>();

const staticFileMiddleware = serveStatic({ root: "./" });

app
  .use("/public/*", staticFileMiddleware)
  .use(htmxMiddleware)
  .use("*", async ({ set, req }, next) => {
    set("currentPath", req.path);
    set("url", new URL(req.url));
    await next();
  })
  .route("/", homeController);

export default app;
