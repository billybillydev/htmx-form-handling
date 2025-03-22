import { Page } from "$ui/components/page.component";
import { Header } from "$views/header.view";

/**
 * @param {import("$ui/components/page.component").PageProps<{}>} props
 */
export function LayoutView({ seo, children }) {
    return (
        <Page seo={seo}>
            <Header />
            <main>{children}</main>
        </Page>
    )
}