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
- MCP Registry (Anthropic)
- Smithery
- Glama

**Browser Automation**
- Commercial / Proprietary
  - Browserbase
  - Browser Use
    - Hosted commercial layer under the same brand
- Open Source / Provider-agnostic
  - Playwright (Microsoft)
  - Browser Use
    - Self-hostable core; commercial layer under the same brand

**Voice / Multimodal Tools**
- Commercial / Proprietary
  - OpenAI Realtime API
  - ElevenLabs
  - Wispr Flow
- Open Source / Provider-agnostic
  - Whisper-based local tools
    - Voxtype (peteonrails)
      - Naming collision: unrelated same-named projects exist for Windows (zkwi, Doubao ASR-based, not Whisper) and macOS (separate PyPI package) — this entry is the Linux tool at voxtype.io, which explicitly offers Whisper as one of its transcription engines

**Generative UI Tools** (newer, less-settled space as a category, though attributions below are confirmed)
- Commercial / Proprietary
  - C1 (Thesys)
  - Vercel v0
- Open Source / Provider-agnostic
  - assistant-ui (Simon Farshid)

## Changelog

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
