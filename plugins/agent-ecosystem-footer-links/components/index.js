import { h } from "preact"
import { resolveRelative } from "@quartz-community/utils"

/**
 * FooterLinks — low-emphasis internal links in the footer.
 *
 * The vendor `@quartz-community/footer` plugin renders its `links` option
 * verbatim as `<a href>`, with no path resolution, so it only works for
 * external URLs (see its own GitHub entry). An internal page needs
 * `resolveRelative`, the same helper the stage nav and breadcrumbs use,
 * because the site is served from a subpath and the footer renders at a
 * different depth on every page. This is a second, sibling footer
 * component for exactly that case.
 *
 * One entry today (the public classification page, #18). This is also
 * where the how-to-use-this-site page (#9) is meant to land once it exists.
 */
const LINKS = [{ label: "How this is classified", target: "how-we-classify" }]

const FooterLinks = () => {
  const Component = ({ fileData, displayClass }) => {
    const slug = fileData?.slug ?? ""
    return h(
      "ul",
      { class: `footer-links ${displayClass ?? ""}` },
      LINKS.map(({ label, target }) =>
        h("li", {}, h("a", { href: resolveRelative(slug, target) }, label)),
      ),
    )
  }

  Component.css = `
.footer-links {
  list-style: none;
  margin: -0.5rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 0.85rem;
  opacity: 0.7;
}
`
  return Component
}

export { FooterLinks }
