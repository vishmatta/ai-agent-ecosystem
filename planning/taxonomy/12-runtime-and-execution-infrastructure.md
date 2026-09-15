## 12. Runtime and Execution Infrastructure

### What is runtime and execution infrastructure
*(not yet drafted)*

### Why agents need dedicated runtime infrastructure
*(not yet drafted)*

### When to choose among runtime options
*(not yet drafted)*

### How agents are run and executed
*(not yet drafted)*

### Where runtime and execution infrastructure is heading
*(not yet drafted)*

**General Concepts**
- Containers
- VMs
- Processes
- State
- Sessions
- Execution
- Resource management
- Network access
  - → see Network restrictions below — this is the runtime capability; Network restrictions is the security-policy counterpart constraining it. Related, not identical: kept separate rather than merged
- GPU access
- Isolation
- Network restrictions
  - → see Network access above

### Runtime and Execution Infrastructure Landscape → (separate page)

**Sandboxes**
- Commercial / Proprietary
  - [Modal](https://modal.com/products/sandboxes)
    - → also see §6 Inference Providers (same product, dual capability)
  - [E2B](https://e2b.dev/)
    - Hosted commercial layer under the same brand
  - [Daytona](https://www.daytona.io/)
    - Hosted commercial service; its former open-source core is listed under Legacy
  - [Amazon Bedrock AgentCore Code Interpreter](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/code-interpreter-tool.html)
  - [Azure Container Apps dynamic sessions](https://learn.microsoft.com/en-us/azure/container-apps/sessions) (Microsoft)
- Open Source / Provider-agnostic
  - [E2B](https://github.com/e2b-dev/runtime)
    - Self-hostable core; commercial layer under the same brand
  - [Firecracker](https://firecracker-microvm.github.io/) (AWS)
  - [gVisor](https://gvisor.dev/) (Google)
- Legacy / Decommissioned
  - [Daytona](https://github.com/daytonaio/daytona)
    - Open-source repository no longer maintained: in June 2026 core development moved to a private codebase. The code remains available under its last license, as is

## Changelog

**2026-09-15**
- Added the cloud vendors' agent services that fit this section's existing categories, per the owner's direction after the Cloud AI Platforms hub (#96): Amazon Bedrock AgentCore Code Interpreter; Azure Container Apps dynamic sessions (Microsoft). Each name is the vendor's current one, checked at its product or documentation page, and each links there. New categories these vendors would need (tool gateways, managed retrieval, agent memory, policy planes, payments, document parsing) are a separate decision

**2026-09-14**
- Linked every Landscape entry to its official page, `[Name](url) (Creator)`, for the site's catalog port (#73). A dual-listed product links its hosted service from Commercial and its repository from Open Source, as §1 does for Zed. No entries moved
- Found while linking, left for the owner (#73): Daytona's open-source repository says it is no longer maintained. As of June 2026 core development moved to a private codebase, and the repository stays public under its last license, as is. Its Open Source entry and "self-hostable core" note are unchanged pending that call
- Applied the owner's decision on #73: Daytona's open-source listing moved to Legacy / Decommissioned, linking its unmaintained repository; its hosted service stays under Commercial
- Checked while linking: E2B's self-hostable code now lives in `e2b-dev/runtime` (formerly `e2b-dev/infra`); its README describes the single-machine package as for evaluation, with production self-hosting as a dedicated deployment in the customer's cloud

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
