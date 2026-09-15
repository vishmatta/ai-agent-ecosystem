## 5. Agent Behavior and Configuration

### What is agent behavior and configuration
*(not yet drafted)*

### Why configure agent behavior explicitly
*(not yet drafted)*

### When to apply which configuration lever
*(not yet drafted)*

### How agent behavior is configured
*(not yet drafted)*

### Where agent behavior and configuration is heading
*(not yet drafted)*

- Instructions
  - Prompts
  - Skills
- Tool definitions
  - Tool selection
- Model selection
  - Model routing
    - → see §6 Model Routers, Gateways and Proxies for the infrastructure layer that implements this
- Policies
  - → see §14 Policies for what policies are, why they exist, and how they're authored, approved, and enforced
  - Behavioral
    - Design-time rules governing agent conduct (what an agent is instructed to do/not do)
  - Model / tool scope
    - Design-time rules governing agent capability (which models/tools an agent is permitted to reach), distinct from conduct
- Guardrails
  - → enforced at runtime; see §14 Policy enforcement
  - → tool list in Behavior and Configuration Landscape below
- Structured outputs
- Reasoning strategies
  - Chain-of-Thought (CoT)
  - ReAct
  - Tree-of-Thought
  - Self-consistency
- Planning strategies
- Agent personas
- Temperature / sampling
- Reasoning effort level
  - Sibling control to Temperature / sampling above — e.g. Claude's thinking budget, GPT-5's reasoning effort setting
- Behavioral constraints
- Termination / stopping conditions
- Standing context files
  - Named, cross-harness conventions for persistent agent-facing context
  - AGENTS.md
  - CLAUDE.md
  - .cursorrules
- Hooks / lifecycle triggers
  - Harness-level triggers on agent lifecycle events (e.g. auto-running a code review after a file edit)
  - → distinct from "Events / triggers" in §7 (external system triggers) and "Event-driven agents" in §13 (deployment-level triggers)

### Behavior and Configuration Landscape → (separate page)

**Guardrails Tools**
- Open Source / Provider-agnostic
  - [Guardrails AI](https://guardrailsai.com/)
    - Acquired by Harvey, announced September 9, 2026; founders and team joined Harvey's product/engineering org. The Hub installer and hosted validator inference were sunset August 25, 2026, with validators moving to standard PyPI packages; the core framework repo remains active and unarchived
  - [NeMo Guardrails](https://developer.nvidia.com/nemo-guardrails) (NVIDIA)
  - [LlamaGuard](https://developer.meta.com/ai/docs/model-cards-and-prompt-formats/llama-guard-4/) (Meta)

## Changelog

**2026-09-15**
- Noted Guardrails AI's acquisition by Harvey and the Hub sunset as a sub-bullet; kept it under Open Source since the framework repo is still active and hasn't had an announced end-of-life (see issue #98) — revisit for a Legacy move if that changes

**2026-09-13**
- Linked the three Guardrails Tools entries to their official pages; each URL was loaded and its title checked against the product
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
