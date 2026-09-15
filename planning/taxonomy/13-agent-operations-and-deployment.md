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
    - Hosted service; the server is also self-hostable under the Server Side Public License, which converts to Apache 2.0 over time: source-available, not open source
  - [Trigger.dev](https://trigger.dev/)
    - Hosted commercial layer under the same brand
  - [Amazon Bedrock AgentCore](https://aws.amazon.com/bedrock/agentcore/)
    - Managed runtime for deploying and operating agents on AWS, built with any framework
  - [Agent Runtime](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/runtime) (Google)
    - Managed agent runtime within Gemini Enterprise Agent Platform — see §6 Cloud AI Platforms
    - Formerly Vertex AI Agent Engine, then Agent Engine; the API resource keeps the name `ReasoningEngine`
  - [Cloudflare Agents](https://agents.cloudflare.com/)
    - Stateful agents hosted on Cloudflare's global network. The SDK is open source (MIT) but runs only on Cloudflare, so it isn't listed under Open Source. The same company's edge inference, Workers AI, is listed in §6
  - [LangSmith Deployment](https://www.langchain.com/langsmith/deployment) (LangChain)
    - Hosting for long-running, stateful agents; formerly LangGraph Platform, renamed October 2025. The separately branded commercial deployment layer for LangGraph (§2); LangSmith's observability product is listed in §15
  - [Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
    - Hosts declarative prompt agents, and runs your own agent code as hosted agents
  - [Managed Agents API](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents) (Google)
    - Part of Gemini Enterprise Agent Platform: builds autonomous agents inside a managed sandbox
  - [Cortex Agents](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents) (Snowflake)
    - Orchestrates retrieval across structured and unstructured data
- Open Source / Provider-agnostic
  - [Temporal](https://github.com/temporalio/temporal)
    - Self-hostable core; commercial layer via Temporal Cloud
  - [Trigger.dev](https://github.com/triggerdotdev/trigger.dev)
    - Self-hostable core; commercial layer under the same brand
  - [BullMQ](https://bullmq.io/) (Taskforce.sh)

## Changelog

**2026-09-15**
- Added the cloud vendors' agent services that fit this section's existing categories, per the owner's direction after the Cloud AI Platforms hub (#96): Microsoft Foundry Agent Service; Managed Agents API (Google); Cortex Agents (Snowflake). Each name is the vendor's current one, checked at its product or documentation page, and each links there. New categories these vendors would need (tool gateways, managed retrieval, agent memory, policy planes, payments, document parsing) are a separate decision

**2026-09-14**
- Linked every Landscape entry to its official page, `[Name](url) (Creator)`, for the site's catalog port (#74). A dual-listed product links its hosted service from Commercial and its repository from Open Source. No entries moved
- Found while linking, left for the owner (#74): Google's docs now call Agent Engine "Agent Runtime" (the API resource keeps the name `ReasoningEngine` for backwards compatibility). The entry keeps its name pending that call; its link goes to the Agent Runtime page
- Applied the owner's decisions: renamed Agent Engine to Agent Runtime, with a note on its former names (#74); moved Inngest to Commercial only, with a note on its source-available license, per the rule on #88
- Checked while linking: Inngest's server is licensed under the SSPL with a delayed Apache 2.0 conversion, not an OSI open-source license, though it is self-hostable. Its Open Source placement is unchanged; noted on #74 for the owner

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
