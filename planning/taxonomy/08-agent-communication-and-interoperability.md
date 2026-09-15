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
    - AP2 extends it for agent payments (Agentic Payments below)
  - [Agent Client Protocol (ACP)](https://agentclientprotocol.com/) (Zed)
    - Lets external agents run as first-class citizens inside a host editor
    - Example integrations: Codex, Claude Agent, OpenCode
    - Created by Zed, which is also a notable host editor implementation — see §1 Harnesses Landscape
    - Not the same protocol as IBM's ACP — see Legacy below
- Legacy / Decommissioned
  - [Agent Communication Protocol (ACP)](https://github.com/i-am-bee/acp) (IBM)
    - Merged into A2A under the Linux Foundation, [announced August 25, 2025](https://github.com/orgs/i-am-bee/discussions/5); no longer exists as a standalone protocol, and its repository is archived
    - Not to be confused with Zed's Agent Client Protocol above, which shares the acronym but is unrelated and still active

**Agentic Payments** (protocols and services for agents that pay, or check out, on a person's or a business's behalf)
- Commercial / Proprietary
  - [Amazon Bedrock AgentCore payments](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments.html)
    - A managed service for agents' microtransaction payments to paid APIs, MCP servers and content, over the x402 protocol and MPP, with guardrails on agent spending
    - Named in lowercase ("AgentCore payments") throughout AWS's own documentation, unlike AgentCore's other services
- Open Source / Provider-agnostic
  - [x402](https://x402.org/) (Coinbase)
    - An open standard for payments over HTTP, built on the 402 Payment Required status code (Apache 2.0)
    - Contributed by Coinbase to the x402 Foundation at the Linux Foundation, which [launched July 14, 2026](https://x402.org/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications/)
  - [Machine Payments Protocol (MPP)](https://mpp.dev/) (Tempo and Stripe)
    - An open protocol for machine-to-machine payments over HTTP 402, co-authored by Tempo and Stripe
    - Its core specification is on the IETF standards track, and it works with any payment rail: stablecoins, cards and more
  - [Agent Payments Protocol (AP2)](https://ap2-protocol.org/) (Google)
    - An open protocol for secure agent payments, available as an extension to A2A (Protocols above) (Apache 2.0)
    - Donated by Google to the FIDO Alliance, [announced April 28, 2026](https://blog.google/products-and-platforms/platforms/google-pay/agent-payments-protocol-fido-alliance/)
  - [Agentic Commerce Protocol (ACP)](https://www.agenticcommerce.dev/) (OpenAI and Stripe)
    - An open standard for checkout between buyers, their AI agents and businesses, with the business as merchant of record; maintained by OpenAI and Stripe, in beta (Apache 2.0)
    - Not the same protocol as Zed's Agent Client Protocol or IBM's Agent Communication Protocol (Protocols above)
  - [Universal Commerce Protocol (UCP)](https://ucp.dev/) (Google and Shopify)
    - An open standard for commerce between platforms such as AI agents, businesses and payment providers, from discovery to checkout (Apache 2.0)
    - Run by a Governing Council whose permanent members are Google and Shopify; Stripe joined April 28, 2026. Technical councils cover shopping, food, lodging and payments
    - Supports AP2 as an extension (above)

## Changelog

**2026-09-15**
- Added the Universal Commerce Protocol, per the owner's decision on #100 (#106), reversing its omission below. Attributed to Google and Shopify, the permanent members of its Governing Council per ucp.dev's announcements page; repository active, Apache 2.0
- Added an Agentic Payments category, per the owner's decision on #100 (V5, the alternative to holding it): Amazon Bedrock AgentCore payments; x402 (Coinbase); Machine Payments Protocol (Tempo and Stripe); Agent Payments Protocol (Google); Agentic Commerce Protocol (OpenAI and Stripe). This settles the payments part of the open-items hold. Each was checked at its site and repository (licenses, maintainers, archived flags). Two governance changes found and recorded as sub-bullets: x402 now sits with the Linux Foundation's x402 Foundation, and Google donated AP2 to the FIDO Alliance. Left out: the Universal Commerce Protocol, a checkout protocol from a multi-company council, with no single creator of record to attribute
- The site's Landscape page for Protocols is now `protocols.md`, since §8 has two categories

**2026-09-14**
- Linked every Landscape entry to its official page, `[Name](url) (Creator)`, for the site's catalog port (#71). The IBM entry links its archived repository, per the Legacy rule
- Bucketed the Protocols list per the owner's decision on #67 (D5): both live protocols under Open Source / Provider-agnostic, as open specifications implemented by several vendors; IBM's ACP stays in Legacy / Decommissioned, now a sub-list rather than a separate block
- Named both ACP entries by their full names, "Agent Client Protocol (ACP)" and "Agent Communication Protocol (ACP)", so the two can be told apart; moved the IBM entry's inline notes into sub-bullets (Formatting rules: no inline notes); added A2A's Linux Foundation status from its README
- Dropped "effective Sept 1, 2025" from the IBM entry: the announcement (August 25, 2025) and the LF AI & Data post (August 29, 2025) give no effective date, and no primary source was found for one
- Applied the owner's decision on #71: the Agent Client Protocol's creator is now "(Zed)", per Zed's own ACP page ("Created by Zed, grown by a community of editors and agents")
- Found while linking, left for the owner (#71): Zed's own page says the Agent Client Protocol was "Created by Zed, grown by a community of editors and agents", not by Cognition. The "(Cognition)" attribution is unchanged pending that call

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
