## 13. Agent Operations and Deployment

### What is agent operations and deployment
*(not yet drafted)*

### Why dedicated operations tooling matters
*(not yet drafted)*

### When operations concerns come into play
*(not yet drafted)*

### How agents are operated and deployed
*(not yet drafted)*

### Where agent operations and deployment is heading
*(not yet drafted)*

- Background agents
- Scheduled agents
- Event-driven agents
  - Queues
  - Webhooks
  - Cron
- Persistent workers
- Durable execution
- Remote execution
- Agent hosting
- Checkpointing
- Retry/recovery
- Long-running tasks
- Deployment
- Autoscaling
- Versioning
- Budget / token limits
  - → runtime enforcement lives in §14; this is planning-level allocation
- Agent lifecycle management

### Operations and Deployment Landscape → (separate page)

- Commercial / Proprietary
  - [Warp Factories](https://www.warp.dev/factories)
    - Agent-native fleet orchestration across the SDLC — event-driven (issue, Slack, or schedule triggers), evals/benchmarking and self-improvement loops built in
    - → also see §1 Harnesses Landscape — same company as Warp Terminal and Warp Agent CLI, but a separate product from either
  - [Temporal](https://temporal.io/cloud)
    - Hosted commercial layer via Temporal Cloud
  - [Inngest](https://www.inngest.com/)
    - Hosted commercial layer under the same brand
  - [Trigger.dev](https://trigger.dev/)
    - Hosted commercial layer under the same brand
  - [Amazon Bedrock AgentCore](https://aws.amazon.com/bedrock/agentcore/)
    - Managed runtime for deploying and operating agents on AWS, built with any framework
  - [Agent Engine](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/runtime) (Google)
    - Managed agent runtime within Gemini Enterprise Agent Platform (formerly Vertex AI Agent Engine) — see §6 Cloud AI Platforms
  - [Cloudflare Agents](https://agents.cloudflare.com/)
    - Stateful agents hosted on Cloudflare's global network. The SDK is open source (MIT) but runs only on Cloudflare, so it isn't listed under Open Source. The same company's edge inference, Workers AI, is listed in §6
  - [LangSmith Deployment](https://www.langchain.com/langsmith/deployment) (LangChain)
    - Hosting for long-running, stateful agents; formerly LangGraph Platform, renamed October 2025. The separately branded commercial deployment layer for LangGraph (§2); LangSmith's observability product is listed in §15
- Open Source / Provider-agnostic
  - [Temporal](https://github.com/temporalio/temporal)
    - Self-hostable core; commercial layer via Temporal Cloud
  - [Inngest](https://github.com/inngest/inngest)
    - Self-hostable core; commercial layer under the same brand
  - [Trigger.dev](https://github.com/triggerdotdev/trigger.dev)
    - Self-hostable core; commercial layer under the same brand
  - [BullMQ](https://bullmq.io/) (Taskforce.sh)

## Changelog

**2026-09-14**
- Linked every Landscape entry to its official page, `[Name](url) (Creator)`, for the site's catalog port (#74). A dual-listed product links its hosted service from Commercial and its repository from Open Source. No entries moved
- Found while linking, left for the owner (#74): Google's docs now call Agent Engine "Agent Runtime" (the API resource keeps the name `ReasoningEngine` for backwards compatibility). The entry keeps its name pending that call; its link goes to the Agent Runtime page
- Checked while linking: Inngest's server is licensed under the SSPL with a delayed Apache 2.0 conversion, not an OSI open-source license, though it is self-hostable. Its Open Source placement is unchanged; noted on #74 for the owner

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
