import { h } from "preact"

/**
 * StageNav — the site's top-level navigation (site plan §4).
 *
 * Build → Connect → Run render as a pipeline with arrows between them, because
 * they genuinely are sequential stages. Control is deliberately set apart —
 * offset, dashed border, outside the arrow chain — because it is cross-cutting
 * rather than a fourth stage. That distinction is the single most important
 * IA decision on the site, so the navigation has to carry it visually.
 *
 * The active stage comes from the page's own slug, so nothing needs declaring
 * in frontmatter.
 */
const STAGES = [
  { slug: "build", label: "Build" },
  { slug: "connect", label: "Connect" },
  { slug: "run", label: "Run" },
]
const CONTROL = { slug: "control", label: "Control" }

const StageNav = () => {
  const Component = ({ fileData }) => {
    const slug = fileData?.slug ?? ""
    const current = slug.split("/")[0]

    const stageEl = ({ slug: s, label }, extraClass = "") => {
      const isActive = current === s
      const cls = ["stage", extraClass, isActive ? "active" : ""].filter(Boolean).join(" ")
      return h(
        "a",
        { class: cls, href: `/${s}/`, "aria-current": isActive ? "page" : undefined },
        label,
      )
    }

    const children = []
    STAGES.forEach((stage, i) => {
      children.push(stageEl(stage))
      if (i < STAGES.length - 1) children.push(h("span", { class: "arrow" }, "→"))
    })
    children.push(stageEl(CONTROL, "control"))

    return h("nav", { class: "pipeline", "aria-label": "Taxonomy stage" }, children)
  }

  Component.css = `
.pipeline {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0 0 1.75rem;
  font-family: var(--ae-mono);
  font-size: 0.78rem;
}

.pipeline .stage {
  padding: 0.28rem 0.65rem;
  border-radius: 3px;
  color: var(--ae-ink-faint);
  border: 1px solid transparent;
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.pipeline .stage:hover { color: var(--ae-accent); border-color: var(--ae-rule-strong); }

.pipeline .stage.active {
  background: var(--ae-accent-soft);
  color: var(--ae-accent);
  border-color: var(--ae-accent);
  font-weight: 500;
}

/* Control sits outside the pipeline on purpose — it is cross-cutting, not a
   fourth stage. The offset and dashed border are what say so. */
.pipeline .stage.control {
  margin-left: 0.5rem;
  border: 1px dashed var(--ae-rule-strong);
}
.pipeline .stage.control.active {
  border-style: dashed;
  border-color: var(--ae-accent);
}

.pipeline .arrow { color: var(--ae-ink-faint); }
`
  return Component
}

export { StageNav }
