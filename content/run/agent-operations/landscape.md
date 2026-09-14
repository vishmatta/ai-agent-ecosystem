---
title: Operations and Deployment Landscape
type: landscape
---

## Commercial / Proprietary

- [Warp Factories](https://www.warp.dev/factories)
  - Agent-native fleet orchestration across the SDLC: event-driven (issue, Slack, or schedule triggers), with evals, benchmarking, and self-improvement loops built in
  - Same company as Warp Terminal and Warp Agent CLI (see [[build/agent-harnesses/landscape|Harnesses Landscape]]), but a separate product from either
- [Temporal](https://temporal.io/cloud)
  - Hosted commercial layer, Temporal Cloud, under the same brand as the open-source core (see Open Source)
- [Inngest](https://www.inngest.com/)
  - Hosted service. The server is also self-hostable under the Server Side Public License, which converts to Apache 2.0 over time: source-available, not open source
- [Trigger.dev](https://trigger.dev/)
  - Hosted commercial layer under the same brand as the open-source core (see Open Source)
- [Amazon Bedrock AgentCore](https://aws.amazon.com/bedrock/agentcore/)
  - Managed runtime for deploying and operating agents on AWS, built with any framework
- [Agent Runtime](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/runtime) (Google)
  - Managed agent runtime within Gemini Enterprise Agent Platform. See Cloud AI Platforms in §6 Model Infrastructure
  - Formerly Vertex AI Agent Engine, then Agent Engine. The API resource keeps the name `ReasoningEngine`
- [Cloudflare Agents](https://agents.cloudflare.com/)
  - Stateful agents hosted on Cloudflare's global network. The SDK is open source (MIT) but runs only on Cloudflare, so it isn't listed under Open Source
  - The same company's edge inference, Workers AI, is listed in §6 Model Infrastructure
- [LangSmith Deployment](https://www.langchain.com/langsmith/deployment) (LangChain)
  - Hosting for long-running, stateful agents. Formerly LangGraph Platform, renamed October 2025
  - The separately branded commercial deployment layer for [[build/agent-frameworks/code-frameworks|LangGraph]]. LangSmith's observability product is listed in §15 Observability and Evaluation

## Open Source / Provider-agnostic

- [Temporal](https://github.com/temporalio/temporal)
  - Self-hostable core, with a commercial layer, Temporal Cloud (see Commercial)
- [Trigger.dev](https://github.com/triggerdotdev/trigger.dev)
  - Self-hostable core, with a commercial layer under the same brand (see Commercial)
- [BullMQ](https://bullmq.io/) (Taskforce.sh)

## Legacy / Decommissioned

No legacy or decommissioned operations tools are catalogued in this category.
