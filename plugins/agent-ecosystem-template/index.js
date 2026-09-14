/**
 * Agent Ecosystem Template — the transformer.
 *
 * The three rendered tiers (deck, concept list, Landscape cards) are separate
 * component plugins in this same directory; Quartz resolves one component per
 * plugin entry, so each needs its own package.
 *
 * Three jobs, all driven entirely by frontmatter + body markdown so that
 * authoring a new page never requires touching styles or markup:
 *
 *   1. Wraps the five narrative beats (What / Why / When / How / Where) in
 *      <details> accordions, matching the page mockups. Beats are detected by
 *      the leading word of an <h3>, so a section's "### <Name> Landscape"
 *      heading is left alone.
 *   2. On a `type: landscape` page, collapses the "Legacy / Decommissioned"
 *      `##` bucket into a closed, visually secondary <details>. The other
 *      buckets (Commercial / Proprietary, Open Source / Provider-agnostic)
 *      are left as plain headings.
 *   3. Tags the page with `ae-page--<type>` from the `type:` frontmatter field,
 *      giving every page type a CSS hook without per-page restyling.
 *
 * Pages with no `type:` are passed through untouched.
 */

const BEATS = ["what", "why", "when", "how", "where"]
const TAXONOMY_TYPES = ["narrative", "concept", "landscape", "home", "how-to"]

/** Plain-text content of a HAST node, for beat detection. */
function textOf(node) {
  if (!node) return ""
  if (node.type === "text") return node.value ?? ""
  if (!Array.isArray(node.children)) return ""
  return node.children.map(textOf).join("")
}

/** Returns "what" | "why" | ... if this h3 opens a narrative beat, else null. */
function beatKicker(node) {
  if (node?.type !== "element" || node.tagName !== "h3") return null
  const first = textOf(node).trim().toLowerCase().split(/[\s:]+/)[0]
  return BEATS.includes(first) ? first : null
}

function el(tagName, properties, children = []) {
  return { type: "element", tagName, properties, children }
}

/** The +/× chevron from the mockups. */
function chevron() {
  return el(
    "svg",
    { className: ["chev"], viewBox: "0 0 18 18", fill: "none", ariaHidden: "true" },
    [
      el("path", {
        d: "M9 2v14M2 9h14",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
      }),
    ],
  )
}

function buildBeat(heading, body, kicker, isFirst) {
  const summary = el("summary", {}, [
    el("span", { className: ["beat-label"] }, [
      el("span", { className: ["beat-kicker"] }, [{ type: "text", value: kicker }]),
      el("span", { className: ["beat-title"] }, heading.children ?? []),
    ]),
    chevron(),
  ])

  // Preserve the heading's id so in-page anchors and the table of contents
  // still resolve to the beat once it has been wrapped.
  const properties = { className: ["beat"] }
  if (isFirst) properties.open = true
  if (heading.properties?.id) properties.id = heading.properties.id

  return el("details", properties, [summary, el("div", { className: ["beat-body"] }, body)])
}

/**
 * Rewrites a run of `<h3>What…</h3> …content… <h3>Why…</h3> …` into a single
 * `<div class="beats">` of `<details>` elements. Non-beat siblings are left
 * exactly where they were.
 */
function collapseBeats(tree) {
  const out = []
  let beats = null
  let i = 0

  const flush = () => {
    if (beats?.length) out.push(el("div", { className: ["beats"] }, beats))
    beats = null
  }

  while (i < tree.children.length) {
    const node = tree.children[i]
    const kicker = beatKicker(node)

    if (!kicker) {
      // A heading at or above h3 ends the run; plain content between beats does not.
      if (node.type === "element" && /^h[123]$/.test(node.tagName)) flush()
      if (beats) {
        // Content after the last beat heading but before the next one is body copy.
        const lastBeat = beats[beats.length - 1]
        lastBeat.children[1].children.push(node)
      } else {
        out.push(node)
      }
      i++
      continue
    }

    if (!beats) beats = []
    beats.push(buildBeat(node, [], kicker, beats.length === 0))
    i++
  }

  flush()
  tree.children = out
}

/** True for the Landscape page's "## Legacy / Decommissioned" bucket heading. */
function isLegacyHeading(node) {
  if (node?.type !== "element" || node.tagName !== "h2") return false
  return textOf(node).trim().toLowerCase().startsWith("legacy")
}

function buildLegacyBucket(heading, body) {
  const properties = { className: ["legacy-bucket"] }
  if (heading.properties?.id) properties.id = heading.properties.id

  const summary = el("summary", {}, [
    el("span", { className: ["legacy-bucket-title"] }, heading.children ?? []),
    chevron(),
  ])

  return el("details", properties, [summary, el("div", { className: ["legacy-bucket-body"] }, body)])
}

/**
 * Rewrites a Landscape page's "## Legacy / Decommissioned" heading and the
 * content that follows it (up to the next h1/h2) into a closed <details>.
 * The other `##` buckets on the page are left exactly where they were.
 */
function collapseLegacyBucket(tree) {
  const out = []
  let i = 0

  while (i < tree.children.length) {
    const node = tree.children[i]

    if (!isLegacyHeading(node)) {
      out.push(node)
      i++
      continue
    }

    const body = []
    i++
    while (i < tree.children.length && !/^h[12]$/.test(tree.children[i].tagName ?? "")) {
      body.push(tree.children[i])
      i++
    }
    out.push(buildLegacyBucket(node, body))
  }

  tree.children = out
}

export default () => ({
  name: "AgentEcosystemTemplate",
  htmlPlugins() {
    return [
      () => (tree, file) => {
        const type = file?.data?.frontmatter?.type
        if (!type || !TAXONOMY_TYPES.includes(type)) return

        if (type === "narrative") collapseBeats(tree)
        if (type === "landscape") collapseLegacyBucket(tree)

        tree.children = [
          el("div", { className: ["ae-page", `ae-page--${type}`] }, tree.children),
        ]
      },
    ]
  },
})
