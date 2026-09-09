import { h } from "preact"

const isNonEmptyArray = (v) => Array.isArray(v) && v.length > 0

/**
 * LandscapeCard — the reference-catalog tier.
 *
 * The most visually weighted element on the page. One card per Landscape page
 * for the section, so a section whose Landscape splits by product category
 * renders one card per category.
 *
 * frontmatter:
 *   landscapes:
 *     - title: Harnesses Landscape
 *       href: /build/agent-harnesses/landscape
 *       stats:
 *         - { value: 22, label: harnesses catalogued }
 *         - { value: 9, label: commercial }
 */
const LandscapeCard = () => {
  const Component = ({ fileData }) => {
    const landscapes = fileData?.frontmatter?.landscapes
    if (!isNonEmptyArray(landscapes)) return null

    return h(
      "div",
      { class: "landscape-group" },
      landscapes.map((l) =>
        h("a", { class: "landscape", href: l.href ?? "#" }, [
          h("div", { class: "landscape-eyebrow" }, "reference catalog"),
          h("div", { class: "landscape-title-row" }, [
            h("span", { class: "landscape-title" }, l.title),
            h("span", { class: "landscape-arrow" }, "→"),
          ]),
          isNonEmptyArray(l.stats)
            ? h(
                "div",
                { class: "landscape-stats" },
                l.stats.map((s) =>
                  h("span", null, [h("strong", null, String(s.value)), ` ${s.label}`]),
                ),
              )
            : null,
        ]),
      ),
    )
  }

  Component.css = `
.landscape-group { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }

.landscape {
  border: 1px solid var(--ae-rule-strong);
  border-radius: 4px;
  padding: 1.6rem 1.75rem;
  background: var(--ae-surface);
  display: block;
  text-decoration: none;
  color: inherit;
}
.landscape:hover { border-color: var(--ae-accent); }

.landscape-eyebrow {
  font-family: var(--ae-mono);
  font-size: 0.72rem;
  color: var(--ae-ink-faint);
  margin-bottom: 0.5rem;
}

.landscape-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.landscape-title { font-family: var(--ae-display); font-weight: 500; font-size: 1.35rem; }
.landscape-arrow { font-family: var(--ae-mono); color: var(--ae-accent); font-size: 1.2rem; }

.landscape-stats {
  margin-top: 0.9rem;
  display: flex;
  gap: 1.4rem;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: var(--ae-ink-soft);
}
.landscape-stats strong {
  font-family: var(--ae-mono);
  color: var(--ae-ink);
  font-weight: 500;
}
`
  return Component
}

export { LandscapeCard }
