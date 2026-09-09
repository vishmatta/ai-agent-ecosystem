import { h } from "preact"

/**
 * Deck — the line under the page title.
 *
 * Two mutually exclusive frontmatter fields, deliberately rendered as
 * different elements rather than one styled two ways:
 *
 *   deck:        an authored pull-quote for a drafted section
 *   deckPending: a status note for a section whose narrative isn't written
 *
 * Keeping them visually distinct is the point — a placeholder must never read
 * as authored copy. `deck` wins if both are somehow present.
 *
 * Note: the site plan (§10) lists this line as an unspecified template detail,
 * so the frontmatter-field approach here is a proposal, not a settled rule.
 */
const Deck = () => {
  const Component = ({ fileData }) => {
    const fm = fileData?.frontmatter
    const deck = fm?.deck
    const pending = fm?.deckPending

    if (typeof deck === "string" && deck.trim()) {
      return h("p", { class: "deck" }, deck)
    }
    if (typeof pending === "string" && pending.trim()) {
      return h("p", { class: "deck-pending" }, pending)
    }
    return null
  }

  // Styling lives in quartz/styles/custom.scss alongside the other shared
  // page-shell rules, since the deck is part of the title block rather than a
  // self-contained widget.
  return Component
}

export { Deck }
