import { Page } from "$ui/components/page.component";
import { Header } from "$views/header.view";
import clsx from "clsx";

/**
 * @param {import("$ui/components/page.component").PageProps<{}>} props
 */
export function LayoutView({ seo, children, class: className }) {
    return (
        <Page seo={seo} class={"flex flex-col h-screen"}>
            <Header />
            <main class={clsx("container mx-auto border grow p-4", className)}>{children}</main>
        </Page>
    )
}