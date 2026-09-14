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
  - Modal
    - → also see §6 Inference Providers (same product, dual capability)
  - E2B
    - Hosted commercial layer under the same brand
  - Daytona
    - Hosted commercial layer under the same brand
- Open Source / Provider-agnostic
  - E2B
    - Self-hostable core; commercial layer under the same brand
  - Daytona
    - Self-hostable core; commercial layer under the same brand
  - Firecracker (AWS)
  - gVisor (Google)

## Changelog

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
