## 1. Agent Harnesses

### What is an agent harness
- The wrapper around a model — the tool-calling loop, context and session management, safety rails, and the interface a person actually touches
- → distinct from an agent framework (§2): a framework is a library/toolkit for building your own harness, not a finished product itself

### Why use an agent harness
- Building your own agent loop from a raw model API means re-solving problems most teams don't need to re-solve: tool-calling, context and session management, safety rails
- A harness gives you that plumbing for free, so effort goes into the task rather than the infrastructure around it

### When to leverage an existing harness vs. building your own
- The real tradeoff: polish and support (commercial) vs. model flexibility and inspectability (open source) — see the Landscape below
- Vendor lock-in and continuity risk are part of that calculus too — even established, widely-adopted harnesses can be discontinued or substantially changed with little notice (Windsurf's forced rebrand into Devin Desktop, Gemini CLI's individual-tier shutdown in favor of Antigravity CLI — see Legacy below for both)

### How to use an agent harness
- CLI, IDE-embedded, or cloud-hosted
- Increasingly also single-agent chat vs. fleet management:
  - A traditional harness runs one agent loop you converse with
  - An Agentic Development Environment (ADE) is a control plane for supervising multiple agents in parallel across a workflow
  - Most ADEs are a mode within a product that also functions as a traditional harness, not a separate product — Cursor and Devin Desktop serve both roles depending on mode
  - Warp is a notable exception to that pattern: its ADE capability has since spun out into Warp Factories, a genuinely separate, standalone product from Warp Terminal — by Warp's own account, "nobody at your company has to use warp terminal" to use it — see Harnesses Landscape below and §13 Agent Operations and Deployment, which Factories now resembles more closely than a terminal-embedded mode
  - → related to §3 Multi-agent orchestration and Supervisor/worker patterns; an ADE is the product-level, user-facing manifestation of those orchestration patterns
  - Tagged `ADE` — see Tags for cross-cutting filtering across sections

### Where agent harnesses are heading
- 2026 has seen a shift toward multi-agent fleet interfaces reshape what "harness" means, without necessarily changing the underlying company or product line
- ADE itself was coined by Warp with Warp 2.0, June 2025, defined as a control plane for orchestrating multiple coding agents in parallel across the full SDLC
- Cursor's Agents Window (Cursor 3, April 2026) and Devin Desktop's Agent Command Center are the same category
- Warp's own ADE capability has since gone further, spinning out into Warp Factories — a standalone fleet-orchestration product, distinct from Warp Terminal, with its own evals/benchmarking and self-improvement loops built in. Worth watching as a possible leading indicator: ADE-as-a-mode may be starting to split into ADE-as-a-dedicated-product-category, at least for one vendor

### Harnesses Landscape → (separate page)

**Commercial / Proprietary**
- Claude Code (Anthropic)
- Codex (OpenAI)
- Cursor (Anysphere)
  - As of Cursor 3 (April 2026), shifted from an IDE-with-AI to an agent-fleet workspace — has an ADE mode, see How to use an agent harness above
- Antigravity (Google)
  - Antigravity CLI is the terminal counterpart, sharing the same backend agent harness as the desktop app; succeeded Gemini CLI for individual users — see Legacy below
- GitHub Copilot
- Devin / Devin Desktop (Cognition)
  - Formerly Windsurf — see Legacy below
  - Agent Command Center is Devin Desktop's fleet-management mode — has an ADE mode, see How to use an agent harness above
- Amazon Q Developer
  - IDE plugins and paid subscriptions reach full end-of-support April 30, 2027; new signups already blocked since May 15, 2026 — Kiro is AWS's named successor for IDE-based agentic coding (below). Stays here rather than Legacy below, since existing users retain active support through the transition window — not yet a completed sunset the way Windsurf and Gemini CLI's were when added there
- Kiro (Amazon)
  - Named successor to Amazon Q Developer's IDE plugins (above), which are being wound down through April 2027
- Warp
  - Coined the term "Agentic Development Environment" (ADE) with Warp 2.0, June 2025
  - Now three distinct products under one company: Warp Terminal (the original harness), Warp Agent CLI (a standalone coding agent for any terminal), and Warp Factories (fleet orchestration across the SDLC — a separate product, not an ADE mode of the terminal)
  - → Warp Factories also listed in §13 Agent Operations and Deployment Landscape, since it now fits that category more precisely than a harness ADE-mode
- Zencoder
  - Zenflow is Zencoder's multi-agent orchestration mode — coordinates multiple models through structured Plan → Implement → Test → Review workflows, including cross-model verification (e.g. one model writes, a different model reviews) — has an ADE mode, see How to use an agent harness above
- Zed
  - Rust-native, GPU-rendered code editor — the Zed AI service and collaboration backend are proprietary; the editor core is open source under the same brand (below)
- Perplexity Computer
  - General-purpose agent worker rather than a coding tool: breaks a goal into subtasks and runs them through sub-agents on models from several providers, choosing a model per subtask. Launched February 25, 2026
  - Also sold as Personal Computer, which runs on a dedicated local Mac or Windows machine, and Portable Computer, a fully local edition built with NVIDIA

**Open Source / Provider-agnostic**
- OpenCode (Anomaly)
- OpenWorker (Andrew Ng)
- Crush (Charm)
- Pi (Mario Zechner)
- Hermes Agent (Nous Research)
  - Distinct from the Hermes model line — see §4 Models
- Aider (Paul Gauthier)
- Cline (Saoud Rizwan)
- Oh My Pi (can1357)
  - Rust-powered, tool-dense fork of Pi
- OpenHands (All Hands AI)
- Goose (Block)
- Zed
  - GPL-3.0 editor core; self-hostable local models via Ollama from the UI. Commercial layer (Zed AI service, collaboration backend) under the same brand, above
  - Supports the Agent Client Protocol (ACP, §8) as a host editor — external agents like Claude Agent, Codex, and OpenCode dock directly in, alongside its own native agent features

**Legacy / Decommissioned**
- Windsurf (Cognition) — rebranded Devin Desktop, June 2, 2026
- Cascade (Cognition) — Windsurf's original agent; replaced by Devin Local in the same rebrand
- Continue — acqui-hired by Cursor (Anysphere), announced mid-June 2026; final release (v2.0.0 — VS Code extension, CLI, JetBrains plugin) shipped June 19, 2026, with no product releases since. The GitHub repo isn't archived, but the only later commits are docs housekeeping (e.g. retiring the sign-in flow, July 2026). Code remains Apache 2.0 and technically forkable, but this is a completed shutdown, not an ongoing product — more definitive than Windsurf's rebrand or Gemini CLI's tier-specific sunset, since there's no successor product carrying its name forward
- Gemini CLI (Google) — code remains Apache 2.0 licensed, but the service stopped serving free, Pro, and Ultra individual accounts June 18, 2026; enterprise Gemini Code Assist licenses are unaffected. Succeeded by Antigravity CLI above. Was never actually provider-agnostic (built specifically for Gemini models) — miscategorized under Open Source / Provider-agnostic when added; that column requires genuine multi-provider support, not just an open license
- Mods (Charm) — CLI utility for piping command output through an LLM (stdin → prompt → response), with MCP tool-calling since v1.8.0. Sunset March 9, 2026, and its GitHub repo archived so Charm could focus on Crush; much of its functionality lives on in Crush's non-interactive mode (`crush run`), above. Code remains MIT licensed and forkable. Briefly listed under Open Source / Provider-agnostic (v2.15) before the sunset was caught

## Changelog

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
