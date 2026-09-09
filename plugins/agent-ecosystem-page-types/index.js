import { ContentBody } from "@quartz-community/content-page"

/**
 * Frontmatter-driven page-type router.
 *
 * Quartz's built-in `content` page type matches everything at priority 0, so
 * this sits above it and claims any page carrying a taxonomy `type:`. The
 * payoff is the `taxonomy` layout key, which `layout.byPageType` in
 * quartz.config.yaml can then configure independently of ordinary pages —
 * without any page needing hand-applied styling.
 *
 * The body renderer is Quartz's own ContentBody: these pages differ in
 * chrome and in which components render, not in how their markdown is
 * rendered, so there is nothing to reimplement.
 *
 * `home` is deliberately excluded — it keeps the default `content` layout
 * until the home page itself is written (site plan §9).
 */
const TAXONOMY_TYPES = ["narrative", "concept", "landscape", "how-to"]

export default () => ({
  name: "AgentEcosystemTaxonomyPage",
  priority: 10,
  match: ({ fileData }) => TAXONOMY_TYPES.includes(fileData?.frontmatter?.type),
  layout: "taxonomy",
  body: ContentBody,
})
