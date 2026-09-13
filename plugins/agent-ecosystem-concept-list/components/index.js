import { h } from "preact"
import { resolveRelative } from "@quartz-community/utils"

const isNonEmptyArray = (v) => Array.isArray(v) && v.length > 0

/**
 * ConceptList — the ordered concept-grouping tier.
 *
 * Deliberately quieter than the Landscape card: a plain list, no border, no
 * box. Order is the author's (it mirrors the taxonomy doc's own bullet
 * sequence); position conveys relative order among the items shown, never
 * absolute rank, since the list is normally incomplete.
 *
 * frontmatter hrefs are authored as site-root paths for readability, but
 * rendered relative to the current page — same reasoning as StageNav:
 * absolute paths break under GitHub Pages' subpath.
 *
 * frontmatter:
 *   concepts:
 *     - title: Model selection
 *       note: Model routing — implemented in Connect
 *       href: /build/agent-behavior/model-selection
 *   conceptsTotal: 15   # optional; adds "N of M written so far"
 */
const ConceptList = () => {
  const Component = ({ fileData }) => {
    const concepts = fileData?.frontmatter?.concepts
    if (!isNonEmptyArray(concepts)) return null

    const slug = fileData?.slug ?? ""
    const hrefFor = (href) => (href ? resolveRelative(slug, href) : "#")

    const total = fileData.frontmatter.conceptsTotal
    const eyebrow =
      typeof total === "number"
        ? [
            "concept pages · ",
            h("strong", null, String(concepts.length)),
            ` of ${total} written so far, in reading order`,
          ]
        : ["concept pages · in reading order"]

    return h("div", { class: "concept-section" }, [
      h("div", { class: "concept-eyebrow" }, eyebrow),
      h(
        "div",
        { class: "concept-list" },
        concepts.map((c) =>
          h("a", { class: "concept-row", href: hrefFor(c.href) }, [
            h("span", { class: "concept-title" }, [
              c.title,
              h("span", { class: "arrow" }, "→"),
            ]),
            c.note ? h("span", { class: "concept-meta" }, c.note) : null,
          ]),
        ),
      ),
    ])
  }

  Component.css = `
.concept-section { margin-top: 2.5rem; }

.concept-eyebrow {
  font-family: var(--ae-mono);
  font-size: 0.72rem;
  color: var(--ae-ink-faint);
  margin-bottom: 0.4rem;
}
.concept-eyebrow strong { color: var(--ae-ink-soft); font-weight: 500; }

.concept-list { border-top: 1px solid var(--ae-rule); }

.concept-row {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--ae-rule);
}
.concept-row:hover .concept-title,
.concept-row:hover .concept-title .arrow { color: var(--ae-accent); }

.concept-title {
  font-family: var(--ae-display);
  font-weight: 500;
  font-size: 1.05rem;
  color: var(--ae-ink);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
}
.concept-title .arrow {
  font-family: var(--ae-mono);
  color: var(--ae-ink-faint);
  font-size: 0.85rem;
}

.concept-meta {
  display: block;
  margin-top: 0.3rem;
  font-size: 0.82rem;
  color: var(--ae-ink-faint);
  line-height: 1.45;
}
`
  return Component
}

export { ConceptList }
