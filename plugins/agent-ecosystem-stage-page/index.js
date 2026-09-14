import fs from "node:fs"
import path from "node:path"
import { parse } from "yaml"
import { FolderContent } from "@quartz-community/folder-page"

/**
 * Stage pages (`build/`, `connect/`, `run/`, `control/`) as folder pages whose
 * section list follows the registry's Nav order (docs/content.md), the same
 * order as the Explorer.
 *
 * Quartz's folder page sorts its list newest-edited first, and its `sort`
 * option takes a function, which quartz.config.yaml can't hold. So this
 * claims the four stage pages instead (priority 15: above the folder page's
 * 10, below the taxonomy page type's 20) and renders the folder page's own
 * body with a sort.
 *
 * The order isn't copied here. The sort is the Explorer's `sortFn` source
 * string, read from quartz.config.yaml and compiled the way the Explorer
 * compiles it in the browser, then given each listed page in the shape of an
 * Explorer node. Change the order there, and both follow. If the Explorer's
 * `sortFn` is missing, this throws, and the stage pages fall back to the
 * folder page's date order.
 */
const STAGES = ["build", "connect", "run", "control"]

function explorerSortFn() {
  const config = parse(fs.readFileSync(path.join(process.cwd(), "quartz.config.yaml"), "utf8"))
  const explorer = config.plugins?.find((p) => p.source === "@quartz-community/explorer")
  const source = explorer?.options?.sortFn
  if (!source) throw new Error("agent-ecosystem-stage-page: no Explorer sortFn in quartz.config.yaml")
  return new Function("a", "b", `return (${source})(a, b)`)
}

// The fields of an Explorer node that its sortFn reads. A listed section is
// its folder's index page, e.g. `build/models/index`.
function asExplorerNode(page) {
  const slug = page.slug ?? ""
  const isFolder = slug.endsWith("/index")
  const slugSegments = (isFolder ? slug.slice(0, -"/index".length) : slug).split("/")
  return {
    slugSegments,
    slugSegment: slugSegments[slugSegments.length - 1],
    isFolder,
    displayName: page.frontmatter?.title ?? "",
  }
}

export default () => {
  const compare = explorerSortFn()
  const sort = (a, b) => compare(asExplorerNode(a), asExplorerNode(b))
  return {
    name: "AgentEcosystemStagePage",
    priority: 15,
    match: ({ slug }) => STAGES.some((stage) => slug === `${stage}/index`),
    layout: "folder",
    body: () => FolderContent({ showFolderCount: true, showSubfolders: true, sort }),
  }
}
