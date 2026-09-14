---
title: Harnesses Landscape
type: landscape
---

## Commercial / Proprietary

- [Claude Code](https://claude.com/product/claude-code) (Anthropic)
- [Codex](https://openai.com/codex/) (OpenAI)
- [Cursor](https://cursor.com/) (Anysphere)
  - Since Cursor 3 (April 2026), an agent-fleet workspace rather than an IDE with AI. Has an ADE mode (see How on [[build/agent-harnesses/index|Agent Harnesses]])
- [Antigravity](https://antigravity.google/) (Google)
  - Antigravity CLI is the terminal counterpart, sharing the desktop app's agent harness. It succeeded Gemini CLI for individual users (see Legacy)
- [GitHub Copilot](https://github.com/features/copilot)
- [Devin](https://devin.ai/) / [Devin Desktop](https://devin.ai/desktop) (Cognition)
  - Formerly Windsurf (see Legacy)
  - Agent Command Center is its fleet-management mode, an ADE mode
- [Amazon Q Developer](https://aws.amazon.com/q/developer/)
  - IDE plugins and paid subscriptions [reach end of support April 30, 2027](https://aws.amazon.com/blogs/devops/amazon-q-developer-end-of-support-announcement/), and new signups have been blocked since May 15, 2026. Kiro is the named successor
  - Listed here rather than in Legacy until the sunset completes; existing users are still supported
- [Kiro](https://kiro.dev/) (Amazon)
  - Named successor to Amazon Q Developer's IDE plugins
- [Warp](https://www.warp.dev/)
  - Its client is [open source](https://github.com/warpdotdev/warp) (AGPL v3), but the built-in agent harness runs server-side and stays proprietary, so Warp isn't listed under Open Source
  - Coined "Agentic Development Environment" (ADE) with Warp 2.0, June 2025
  - Now three products: Warp Terminal (the original harness), Warp Agent CLI (a standalone coding agent for any terminal), and Warp Factories (fleet orchestration across the SDLC; a separate product, listed under §13 Agent Operations and Deployment)
- [Zencoder](https://zencoder.ai/)
  - Zenflow is its multi-agent orchestration mode: Plan → Implement → Test → Review workflows, with one model checking another's work. An ADE mode
- [Zed](https://zed.dev/ai)
  - Rust-native, GPU-rendered code editor. The Zed AI service and collaboration backend are proprietary; the editor core is open source (see Open Source)
- [Perplexity Computer](https://www.perplexity.ai/computer)
  - General-purpose agent worker rather than a coding tool: splits a goal into subtasks run by sub-agents on models from several providers
  - Also sold as Personal Computer, which runs on a dedicated local Mac or Windows machine, and Portable Computer, a fully local edition built with NVIDIA

## Open Source / Provider-agnostic

- [OpenCode](https://opencode.ai/) (Anomaly)
- [OpenWorker](https://openworker.com/) (Andrew Ng)
- [Crush](https://charm.land/crush/) (Charm)
- [Pi](https://github.com/earendil-works/pi) (Mario Zechner)
  - The repository and npm packages now live under the Earendil Works organization on GitHub
- [Hermes Agent](https://hermes-agent.nousresearch.com/) (Nous Research)
  - Distinct from the Hermes model line (§4 Models)
- [Aider](https://aider.chat/) (Paul Gauthier)
- [Cline](https://cline.bot/) (Saoud Rizwan)
- [Oh My Pi](https://omp.sh/) (can1357)
  - Rust-powered, tool-dense fork of Pi
- [OpenHands](https://openhands.dev/) (All Hands AI)
- [Goose](https://goose-docs.ai/) (Block)
  - Now part of the [Agentic AI Foundation (AAIF)](https://aaif.io/) at the Linux Foundation
- [Zed](https://github.com/zed-industries/zed)
  - GPL-3.0 editor core, with local models via Ollama. Commercial layer under the same brand (see Commercial)
  - A host editor for the Agent Client Protocol (§8): external agents such as Claude Agent, Codex, and OpenCode dock into it

## Legacy / Decommissioned

- [Windsurf](https://devin.ai/blog/windsurf-is-now-devin-desktop) (Cognition)
  - Rebranded Devin Desktop, June 2, 2026
- [Cascade](https://devin.ai/blog/windsurf-is-now-devin-desktop) (Cognition)
  - Windsurf's original agent, replaced by Devin Local in the same rebrand
- [Continue](https://continue.dev/)
  - Acqui-hired by Cursor (Anysphere), announced mid-June 2026. The final release (v2.0.0) shipped June 19, 2026, with no product releases since. Code remains Apache 2.0 and forkable
- [Gemini CLI](https://github.com/google-gemini/gemini-cli/discussions/28017) (Google)
  - Stopped serving free, Pro, and Ultra individual accounts June 18, 2026; enterprise Gemini Code Assist licenses are unaffected. Succeeded by Antigravity CLI. Code remains Apache 2.0
- [Mods](https://github.com/charmbracelet/mods) (Charm)
  - CLI for piping command output through an LLM, with MCP tool-calling. Sunset March 9, 2026, in favor of Crush's non-interactive mode (`crush run`). Code remains MIT and forkable
