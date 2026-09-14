## 7. Tools and Environment Interfaces

### What are tool and environment interfaces
*(not yet drafted)*

### Why agents need these interfaces
*(not yet drafted)*

### When to use which interface
*(not yet drafted)*

### How these interfaces are used
*(not yet drafted)*

### Where tools and environment interfaces are heading
*(not yet drafted)*

- Tool Calling
  - MCP (Anthropic)
    - Servers
    - Clients
      - → harnesses/apps that consume MCP servers; see §1 Harnesses Landscape
    - Transports
      - stdio
      - Streamable HTTP
    - Registries
      - → tool list in Tools and Environment Interfaces Landscape below
- Computer Use
- Browser Automation
  - → tool list in Tools and Environment Interfaces Landscape below
- Shell / Terminal
- Filesystem
- Code Execution
  - → see §12 Sandboxes
- Web Search
- APIs
- Database access
- Email / Messaging
- Events / triggers
- Voice / Multimodal I/O
  - Speech-to-text
  - Text-to-speech
  - Realtime voice agents
  - Vision/multimodal tool use
  - → tool list in Tools and Environment Interfaces Landscape below
- Generative UI
  - Agent-driven, on-the-fly interface generation rather than a fixed UI
  - → tool list in Tools and Environment Interfaces Landscape below

### Tools and Environment Interfaces Landscape → (separate page)

**MCP Registries**
- Commercial / Proprietary
  - [Smithery](https://smithery.ai/)
  - [Glama](https://glama.ai/mcp/servers)
- Open Source / Provider-agnostic
  - [MCP Registry](https://registry.modelcontextprotocol.io/) (Anthropic)

**Browser Automation**
- Commercial / Proprietary
  - [Browserbase](https://www.browserbase.com/)
  - [Browser Use](https://browser-use.com/)
    - Hosted commercial layer under the same brand
- Open Source / Provider-agnostic
  - [Playwright](https://playwright.dev/) (Microsoft)
  - [Browser Use](https://github.com/browser-use/browser-use)
    - Self-hostable core; commercial layer under the same brand

**Voice / Multimodal Tools**
- Commercial / Proprietary
  - [OpenAI Realtime API](https://developers.openai.com/api/docs/guides/realtime)
  - [ElevenLabs](https://elevenlabs.io/)
  - [Wispr Flow](https://wisprflow.ai/)
- Open Source / Provider-agnostic
  - [Voxtype](https://voxtype.io/) (peteonrails)
    - A Whisper-based local tool: Whisper is one of its transcription engines
    - Naming collision: unrelated same-named projects exist for Windows (zkwi, Doubao ASR-based, not Whisper) and macOS (separate PyPI package); this entry is the tool at voxtype.io

**Generative UI Tools** (newer, less-settled space as a category, though attributions below are confirmed)
- Commercial / Proprietary
  - [C1](https://www.thesys.dev/openui-cloud) (Thesys)
  - [Vercel v0](https://v0.app/)
- Open Source / Provider-agnostic
  - [assistant-ui](https://www.assistant-ui.com/) (Simon Farshid)

## Changelog

**2026-09-14**
- Linked every Landscape entry to its official page, `[Name](url) (Creator)`, for the site's catalog port (#70). A dual-listed product links its hosted service from Commercial and its repository from Open Source. No entries moved
- Bucketed MCP Registries per the owner's decision on #67 (D5), entry by entry: the MCP Registry is an open-source project (Open Source / Provider-agnostic); Smithery and Glama are hosted services (Commercial / Proprietary)
- Flattened the "Whisper-based local tools" group into its one entry, Voxtype, with the group's description as a sub-bullet, so the list names products rather than a group
- Found while linking, left for the owner (#70): C1 is now OpenUI Cloud ("Formerly C1 API" on thesys.dev); the MCP Registry is "an official MCP project maintained by the registry working group", built by PulseMCP, Block, GitHub and Anthropic, and MCP itself now sits in the Agentic AI Foundation at the Linux Foundation, so "(Anthropic)" is imprecise. Entries unchanged pending those calls
- Checked while linking: voxtype.io now describes Voxtype as for "Linux and macOS", so the naming-collision note no longer calls it "the Linux tool"; the OpenAI Realtime API is GA, with a beta-to-GA migration guide

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
