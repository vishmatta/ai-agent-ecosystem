import { Graph as UpstreamGraph } from "@quartz-community/graph/components"

/**
 * Graph view scoped to the site's hierarchy.
 *
 * Stock Quartz builds its graph purely from links written in page bodies and
 * shows a one-hop neighbourhood around the current page. On this site that
 * produces almost nothing: the hierarchy (home → stage → section → concept /
 * Landscape) lives in the folder structure, not in body links, and the
 * concept list and Landscape cards are rendered by components the graph never
 * sees. A one-hop walk also goes both directions, so widening it pulls in the
 * parent and every sibling rather than what's beneath the page.
 *
 * This keeps everything about the stock graph — rendering, physics, styling,
 * the expand-to-global view — and replaces only how nodes are chosen:
 *
 *   - Every page gets an edge to its nearest existing ancestor page, so the
 *     folder hierarchy is drawn as a tree.
 *   - A page's graph shows the page, every page beneath it, and the tags on
 *     any of those. The home page is the root, so it shows the whole site.
 *   - The expanded global graph (depth < 0) always shows the whole site.
 *
 * Tag pages themselves (tags/*) are not treated as hierarchy; tags appear as
 * their own nodes, attached to the pages that carry them.
 *
 * Runs in the browser: its source is injected into the upstream script, where
 * `current`, `data`, `edges` and `depth` are that script's own variables.
 *
 * Slugs arrive in more than one shape. The data keys are Quartz "simple"
 * slugs — the home page is "/", a folder index is "build/" — while the current
 * page is derived from the URL, so the Build stage arrives as "build". Every
 * comparison therefore goes through pathOf(), which reduces all of them to one
 * canonical form: "" for the root, "build" for the stage, "build/x" below it.
 */
function selectNodes(current, data, edges, depth) {
  const pathOf = (slug) => {
    const p = String(slug)
      .replace(/(^|\/)index$/, "")
      .replace(/^\/+|\/+$/g, "")
    return p
  }
  const isTag = (slug) => {
    const p = pathOf(slug)
    return p === "tags" || p.startsWith("tags/")
  }

  const pages = [...data.keys()].filter((slug) => !isTag(slug))

  // Canonical path -> the data key that represents it. A section can be a
  // folder index ("build/agent-behavior/") or a same-named page sitting over a
  // folder of children ("build/agent-behavior" over its concept pages); both
  // resolve to the same path, so either one parents what's beneath it.
  const byPath = new Map()
  for (const slug of pages) if (!byPath.has(pathOf(slug))) byPath.set(pathOf(slug), slug)

  // Nearest existing ancestor page.
  const parentOf = (slug) => {
    const segs = pathOf(slug).split("/")
    if (segs.length === 1 && segs[0] === "") return null // the root itself
    segs.pop()
    while (segs.length > 0) {
      const found = byPath.get(segs.join("/"))
      if (found !== undefined) return found
      segs.pop()
    }
    return byPath.get("") ?? null
  }

  const known = new Set(edges.map((e) => `${e.source}|${e.target}`))
  for (const slug of pages) {
    const parent = parentOf(slug)
    if (parent === null || parent === slug) continue
    if (known.has(`${parent}|${slug}`) || known.has(`${slug}|${parent}`)) continue
    edges.push({ source: parent, target: slug })
  }

  const root = pathOf(current)
  const everything = depth < 0 || root === ""
  const inScope = (slug) => {
    const p = pathOf(slug)
    return everything || p === root || p.startsWith(`${root}/`)
  }

  const selected = new Set(pages.filter(inScope))
  for (const { source, target } of edges) {
    if (selected.has(source) && isTag(target)) selected.add(target)
  }
  return selected
}

// The upstream script's node-selection block, verbatim. It is replaced whole.
const SELECTION_START = "var ru=new Set;if(Vu>=0)"
const SELECTION_END = "for(var k=0;k<hu.length;k++)ru.add(hu[k])}"
const PATCH_MARKER = "/*agent-ecosystem-graph*/"

const Graph = (opts) => {
  const component = UpstreamGraph(opts)
  const script = component.afterDOMLoaded
  if (script.includes(PATCH_MARKER)) return component

  const a = script.indexOf(SELECTION_START)
  const b = a === -1 ? -1 : script.indexOf(SELECTION_END, a)
  if (a === -1 || b === -1) {
    // Fail the build loudly rather than silently shipping the stock graph.
    throw new Error(
      "[agent-ecosystem-graph] Could not find the node-selection block in " +
        "@quartz-community/graph's script — the upstream package has changed. " +
        "Re-derive SELECTION_START/SELECTION_END from its dist before upgrading.",
    )
  }

  // `d` is the upstream script's graph container. Recording what was selected
  // on it makes the graph inspectable — the canvas itself can't be queried.
  component.afterDOMLoaded =
    script.slice(0, a) +
    `${PATCH_MARKER}var ru=(${selectNodes.toString()})(m,eu,tu,Vu);` +
    `d.dataset.graphNodes=Array.from(ru).join(",");` +
    script.slice(b + SELECTION_END.length)
  return component
}

export { Graph, selectNodes }
