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
  - Warp Factories
    - Agent-native fleet orchestration across the SDLC — event-driven (issue, Slack, or schedule triggers), evals/benchmarking and self-improvement loops built in
    - → also see §1 Harnesses Landscape — same company as Warp Terminal and Warp Agent CLI, but a separate product from either
  - Temporal
    - Hosted commercial layer via Temporal Cloud
  - Inngest
    - Hosted commercial layer under the same brand
  - Trigger.dev
    - Hosted commercial layer under the same brand
  - Amazon Bedrock AgentCore
    - Managed runtime for deploying and operating agents on AWS, built with any framework
  - Agent Engine (Google)
    - Managed agent runtime within Gemini Enterprise Agent Platform (formerly Vertex AI Agent Engine) — see §6 Cloud AI Platforms
  - Cloudflare Agents
    - Stateful agents hosted on Cloudflare's global network. The SDK is open source (MIT) but runs only on Cloudflare, so it isn't listed under Open Source. The same company's edge inference, Workers AI, is listed in §6
  - LangSmith Deployment (LangChain)
    - Hosting for long-running, stateful agents; formerly LangGraph Platform, renamed October 2025. The separately branded commercial deployment layer for LangGraph (§2); LangSmith's observability product is listed in §15
- Open Source / Provider-agnostic
  - Temporal
    - Self-hostable core; commercial layer via Temporal Cloud
  - Inngest
    - Self-hostable core; commercial layer under the same brand
  - Trigger.dev
    - Self-hostable core; commercial layer under the same brand
  - BullMQ (Taskforce.sh)

## Changelog

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
