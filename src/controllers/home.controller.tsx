import { AppConfig } from "$config";
import { HomePage } from "$pages/home.page";
import { Hono } from "hono";

export const homeController = new Hono<AppConfig>().get((c) => {
    const title = "Handling form submissions with HTMX";
    const description = "A simple example of handling form submissions with HTMX";

    return c.html(
        <HomePage seo={{ title, description }} description={description} />
    )
})