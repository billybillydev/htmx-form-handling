import { PrimaryButton } from "$ui/components/button.component";
import { EmailField } from "$ui/components/field.component";
import { LayoutView } from "$views/layouts.view";

/**
 * @param {import("$ui/components/page.component").PageProps<{ description: string}>} props
 */
export function NewsletterPage({ description, seo, ...restProps }) {
  return (
    <LayoutView seo={seo} {...restProps} class={"flex flex-col gap-y-8"}>
      <h1>{seo.title}</h1>
      <p>{description}</p>
      <div class={"flex items-center justify-center"}>
        <NewsletterForm />
      </div>
    </LayoutView>
  );
}

function NewsletterForm() {
  return (
    <form
      hx-post="/newsletter/submission"
      hx-swap="outerHTML"
      class={"flex items-end justify-center gap-x-2"}
    >
      <EmailField label="Email" name="email" required />
      <PrimaryButton type="submit">Subscribe</PrimaryButton>
    </form>
  );
}
