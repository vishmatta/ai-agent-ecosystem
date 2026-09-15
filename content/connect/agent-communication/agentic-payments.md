---
title: Agentic Payments
type: landscape
---

## Commercial / Proprietary

- [Amazon Bedrock AgentCore payments](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments.html)
  - A managed service for agents' microtransaction payments to paid APIs, MCP servers, and content, over the x402 protocol and MPP, with guardrails on agent spending
  - Named in lowercase ("AgentCore payments") throughout AWS's own documentation, unlike AgentCore's other services

## Open Source / Provider-agnostic

- [x402](https://x402.org/) (Coinbase)
  - An open standard for payments over HTTP, built on the 402 Payment Required status code (Apache 2.0)
  - Contributed by Coinbase to the x402 Foundation at the Linux Foundation, which [launched July 14, 2026](https://x402.org/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications/)
- [Machine Payments Protocol (MPP)](https://mpp.dev/) (Tempo and Stripe)
  - An open protocol for machine-to-machine payments over HTTP 402, co-authored by Tempo and Stripe
  - Its core specification is on the IETF standards track, and it works with any payment rail: stablecoins, cards, and more
- [Agent Payments Protocol (AP2)](https://ap2-protocol.org/) (Google)
  - An open protocol for secure agent payments, available as an extension to A2A (see [[connect/agent-communication/protocols|Protocols]]) (Apache 2.0)
  - Donated by Google to the FIDO Alliance, [announced April 28, 2026](https://blog.google/products-and-platforms/platforms/google-pay/agent-payments-protocol-fido-alliance/)
- [Agentic Commerce Protocol (ACP)](https://www.agenticcommerce.dev/) (OpenAI and Stripe)
  - An open standard for checkout between buyers, their AI agents, and businesses, with the business as merchant of record. Maintained by OpenAI and Stripe, in beta (Apache 2.0)
  - Not the same protocol as Zed's Agent Client Protocol or IBM's Agent Communication Protocol (see [[connect/agent-communication/protocols|Protocols]])
- [Universal Commerce Protocol (UCP)](https://ucp.dev/) (Google and Shopify)
  - An open standard for commerce between platforms such as AI agents, businesses, and payment providers, from discovery to checkout (Apache 2.0)
  - Run by a Governing Council whose permanent members are Google and Shopify. Stripe joined April 28, 2026. Technical councils cover shopping, food, lodging, and payments
  - Supports AP2 as an extension (above)

## Legacy / Decommissioned

No legacy or decommissioned payment protocols or services are catalogued in this category.
