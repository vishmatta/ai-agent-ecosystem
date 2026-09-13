---
title: Harnesses Landscape
type: landscape
---

## Commercial / Proprietary

- Claude Code (Anthropic)
- Codex (OpenAI)
- Cursor (Anysphere)
  - Since Cursor 3 (April 2026), an agent-fleet workspace rather than an IDE with AI. Has an ADE mode — see How on [[build/agent-harnesses/index|Agent Harnesses]]
- Antigravity (Google)
  - Antigravity CLI is the terminal counterpart, sharing the desktop app's agent harness. It succeeded Gemini CLI for individual users (see Legacy)
- GitHub Copilot
- Devin / Devin Desktop (Cognition)
  - Formerly Windsurf (see Legacy)
  - Agent Command Center is its fleet-management mode — an ADE mode
- Amazon Q Developer
  - IDE plugins and paid subscriptions reach end of support April 30, 2027, and new signups have been blocked since May 15, 2026. Kiro is the named successor
  - Listed here rather than in Legacy until the sunset completes; existing users are still supported
- Kiro (Amazon)
  - Named successor to Amazon Q Developer's IDE plugins
- Warp
  - Coined "Agentic Development Environment" (ADE) with Warp 2.0, June 2025
  - Now three products: Warp Terminal (the original harness), Warp Agent CLI (a standalone coding agent for any terminal), and Warp Factories (fleet orchestration across the SDLC — a separate product, listed under §13 Agent Operations and Deployment)
- Zencoder
  - Zenflow is its multi-agent orchestration mode: Plan → Implement → Test → Review workflows, with one model checking another's work — an ADE mode
- Zed
  - Rust-native, GPU-rendered code editor. The Zed AI service and collaboration backend are proprietary; the editor core is open source (see Open Source)
- Perplexity Computer
  - General-purpose agent worker rather than a coding tool: splits a goal into subtasks run by sub-agents on models from several providers
  - Also sold as Personal Computer, which runs on a dedicated local Mac or Windows machine, and Portable Computer, a fully local edition built with NVIDIA

## Open Source / Provider-agnostic

- OpenCode (Anomaly)
- OpenWorker (Andrew Ng)
- Crush (Charm)
- Pi (Mario Zechner)
- Hermes Agent (Nous Research)
  - Distinct from the Hermes model line (§4 Models)
- Aider (Paul Gauthier)
- Cline (Saoud Rizwan)
- Oh My Pi (can1357)
  - Rust-powered, tool-dense fork of Pi
- OpenHands (All Hands AI)
- Goose (Block)
- Zed
  - GPL-3.0 editor core, with local models via Ollama. Commercial layer under the same brand (see Commercial)
  - A host editor for the Agent Client Protocol (§8): external agents such as Claude Agent, Codex, and OpenCode dock into it

## Legacy / Decommissioned

- Windsurf (Cognition)
  - Rebranded Devin Desktop, June 2, 2026
- Cascade (Cognition)
  - Windsurf's original agent, replaced by Devin Local in the same rebrand
- Continue
  - Acqui-hired by Cursor (Anysphere), announced mid-June 2026. The final release (v2.0.0) shipped June 19, 2026, with no product releases since. Code remains Apache 2.0 and forkable
- Gemini CLI (Google)
  - Stopped serving free, Pro, and Ultra individual accounts June 18, 2026; enterprise Gemini Code Assist licenses are unaffected. Succeeded by Antigravity CLI. Code remains Apache 2.0
- Mods (Charm)
  - CLI for piping command output through an LLM, with MCP tool-calling. Sunset March 9, 2026, in favor of Crush's non-interactive mode (`crush run`). Code remains MIT and forkable
