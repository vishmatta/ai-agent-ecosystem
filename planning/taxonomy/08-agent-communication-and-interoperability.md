## 8. Agent Communication and Interoperability

### What is agent communication and interoperability
*(not yet drafted)*

### Why standardized agent communication matters
*(not yet drafted)*

### When interoperability protocols come into play
*(not yet drafted)*

### How agents communicate across systems
*(not yet drafted)*

### Where agent communication and interoperability is heading
*(not yet drafted)*

- Agent messaging
- Agent discovery
- Agent delegation
- Remote agent execution
- Human-agent communication
  - Distinct from Human-in-the-loop approval gates; see §14

### Communication and Interoperability Landscape → (separate page)

**Protocols**
- Open Source / Provider-agnostic
  - [A2A](https://a2a-protocol.org/) (Google)
    - An open source project under the Linux Foundation, contributed by Google (Apache 2.0)
  - [Agent Client Protocol (ACP)](https://agentclientprotocol.com/) (Cognition)
    - Lets external agents run as first-class citizens inside a host editor
    - Example integrations: Codex, Claude Agent, OpenCode
    - Zed is a notable host editor implementation — see §1 Harnesses Landscape
    - Not the same protocol as IBM's ACP — see Legacy below
- Legacy / Decommissioned
  - [Agent Communication Protocol (ACP)](https://github.com/i-am-bee/acp) (IBM)
    - Merged into A2A under the Linux Foundation, [announced August 25, 2025](https://github.com/orgs/i-am-bee/discussions/5); no longer exists as a standalone protocol, and its repository is archived
    - Not to be confused with the Agent Client Protocol above, which shares the acronym but is unrelated and still active

## Changelog

**2026-09-14**
- Linked every Landscape entry to its official page, `[Name](url) (Creator)`, for the site's catalog port (#71). The IBM entry links its archived repository, per the Legacy rule
- Bucketed the Protocols list per the owner's decision on #67 (D5): both live protocols under Open Source / Provider-agnostic, as open specifications implemented by several vendors; IBM's ACP stays in Legacy / Decommissioned, now a sub-list rather than a separate block
- Named both ACP entries by their full names, "Agent Client Protocol (ACP)" and "Agent Communication Protocol (ACP)", so the two can be told apart; moved the IBM entry's inline notes into sub-bullets (Formatting rules: no inline notes); added A2A's Linux Foundation status from its README
- Dropped "effective Sept 1, 2025" from the IBM entry: the announcement (August 25, 2025) and the LF AI & Data post (August 29, 2025) give no effective date, and no primary source was found for one
- Found while linking, left for the owner (#71): Zed's own page says the Agent Client Protocol was "Created by Zed, grown by a community of editors and agents", not by Cognition. The "(Cognition)" attribution is unchanged pending that call

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
