import { h } from "preact"
import { resolveRelative } from "@quartz-community/utils"

/**
 * GovernanceIndex: the Control hub's "at a glance" index (site plan §5).
 *
 * Lists every Landscape page (`type: landscape`) whose frontmatter `tags`
 * include Security, Governance or Eval, grouped by the stage its folder sits
 * under. Nothing is hand-kept: tag a page and it appears. Each item links to
 * the page's one canonical URL and copies none of its entries.
 *
 * It renders only on the Control hub (`control/index`). A stage with no tagged
 * page gets no heading and no placeholder (the silent-omission rule), and with
 * no tagged page at all the component renders nothing.
 *
 * Links go through resolveRelative, because the site is served from a subpath.
 * A misspelled tag drops its page from the index with no error here, so
 * `.github/scripts/check-content.mjs` checks every tag against
 * planning/taxonomy/tags.md.
 */
const HUB = "control/index"
const TAGS = ["Security", "Governance", "Eval"]
const STAGES = [
  { slug: "build", label: "Build" },
  { slug: "connect", label: "Connect" },
  { slug: "run", label: "Run" },
  { slug: "control", label: "Control" },
]

// Quartz lowercases frontmatter tags when it reads them, so compare lowercase.
const tagsOf = (f) => (f.frontmatter?.tags ?? []).map((t) => String(t).toLowerCase())

const GovernanceIndex = () => {
  const Component = ({ fileData, allFiles }) => {
    const slug = fileData?.slug ?? ""
    if (slug !== HUB) return null

    const governed = (allFiles ?? [])
      .filter((f) => f.frontmatter?.type === "landscape" && f.slug)
      .map((f) => ({
        slug: f.slug,
        title: f.frontmatter?.title ?? f.slug,
        stage: f.slug.split("/")[0],
        tags: TAGS.filter((t) => tagsOf(f).includes(t.toLowerCase())),
      }))
      .filter((p) => p.tags.length > 0)
      .sort((a, b) => a.slug.localeCompare(b.slug))

    const groups = STAGES.map((stage) => ({
      ...stage,
      pages: governed.filter((p) => p.stage === stage.slug),
    })).filter((g) => g.pages.length > 0)
    if (groups.length === 0) return null

    return h("div", { class: "gov-index" }, [
      h("div", { class: "gov-eyebrow" }, "at a glance · governance Landscapes by stage"),
      ...groups.map((g) =>
        h("section", { class: "gov-stage" }, [
          h("h3", { class: "gov-stage-name" }, g.label),
          h(
            "div",
            { class: "gov-list" },
            g.pages.map((p) =>
              h("a", { class: "gov-row", href: resolveRelative(slug, p.slug) }, [
                h("span", { class: "gov-title" }, [p.title, h("span", { class: "arrow" }, "→")]),
                h("span", { class: "gov-tags" }, p.tags.join(" · ")),
              ]),
            ),
          ),
        ]),
      ),
    ])
  }

  Component.css = `
.gov-index { margin-top: 2.5rem; }

.gov-eyebrow {
  font-family: var(--ae-mono);
  font-size: 0.72rem;
  color: var(--ae-ink-faint);
  margin-bottom: 0.4rem;
}

.gov-stage { margin-top: 1.5rem; }
.gov-stage-name {
  font-family: var(--ae-mono);
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ae-ink-soft);
  margin: 0 0 0.4rem;
}

.gov-list { border-top: 1px solid var(--ae-rule); }

.gov-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--ae-rule);
}
.gov-row:hover .gov-title,
.gov-row:hover .gov-title .arrow { color: var(--ae-accent); }

.gov-title {
  font-family: var(--ae-display);
  font-weight: 500;
  font-size: 1.05rem;
  color: var(--ae-ink);
}
.gov-title .arrow {
  font-family: var(--ae-mono);
  color: var(--ae-ink-faint);
  font-size: 0.85rem;
  margin-left: 0.5rem;
}

.gov-tags {
  font-family: var(--ae-mono);
  font-size: 0.72rem;
  color: var(--ae-ink-faint);
  white-space: nowrap;
}
`
  return Component
}

export { GovernanceIndex }
