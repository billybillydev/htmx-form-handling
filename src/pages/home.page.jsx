import { Page } from "$ui/components/page.component";
import { Header } from "$views/header.view";

/**
 * @param {import("$ui/components/page.component").PageProps<{ description: string }>} props
 */
export function HomePage({ seo, description }) {
    return (
        <Page seo={seo} class={"h-screen"}>
            <main class="container flex flex-col gap-y-8 items-center justify-center mx-auto border h-full">
                <h1>{seo.title}</h1>
                <p>{description}</p>
                <div class={"flex flex-col gap-y-4"}>
                    <p>We will navigate between these pages below:</p>
                    <ul>
                        <li><a class={"link link-primary"} href="/newsletter">Newsletter</a></li>
                        <li><a class={"link link-primary"} href="/login">Login</a></li>
                    </ul>
                </div>
            </main>
        </Page>
    )
}