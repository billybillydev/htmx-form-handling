import { AppConfig } from "$config";
import { NewsletterPage } from "$pages/newsletter.page";
import { Hono } from "hono";

export const newsletterController = new Hono<AppConfig>().get((c) => {
    const title = "Newsletter";
    const description = "On this page, we will subscribe to a newsletter by submitting a simple form requiring only an email. After that, we will swap the form with a success message.";

    return c.html(
        <NewsletterPage seo={{ title, description }} description={description} />
    )
})