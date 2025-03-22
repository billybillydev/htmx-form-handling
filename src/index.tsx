import { AppConfig } from "$config";
import { homeController } from "$controllers/home.controller";
import { newsletterController } from "$controllers/newsletter.controller";
import { htmxMiddleware } from "$middlewares/htmx.middleware";
import { Page } from "$ui/components/page.component";
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
  .route("/", homeController)
  .route("/newsletter", newsletterController)
  .notFound((c) => {
    return c.html(
      <Page seo={{ title: "404" }}>
        <main class="container flex flex-col gap-y-8 items-center justify-center mx-auto border h-full">
          <h1>404 Not Found</h1>
          <p>Sorry, we didn't find the page you were looking for !</p>
        </main>
      </Page>
    );
  });

export default app;
