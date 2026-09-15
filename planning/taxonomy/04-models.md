## 4. Models

### What counts as a model provider here
*(not yet drafted)*

### Why the company-to-model mapping
*(not yet drafted)*

### When model choice matters
*(not yet drafted)*

### How models are accessed
*(not yet drafted)*

### Where the model landscape is heading
*(not yet drafted)*

### Models Landscape → (separate page)

- Commercial / Proprietary
  - [Anthropic](https://www.anthropic.com/) → [Claude](https://claude.com/product/overview)
  - [OpenAI](https://openai.com/) → [GPT](https://developers.openai.com/api/docs/models)
    - Also publishes open-weight gpt-oss models (see Open Source)
  - [Google](https://ai.google/) → [Gemini](https://deepmind.google/models/gemini/)
  - [xAI](https://x.ai/) → [Grok](https://x.ai/grok)
    - Current Grok models are API-only; earlier Grok 1 and Grok 2 weights are published (see Open Source)
  - [Meta](https://ai.meta.com/) → [Muse](https://ai.meta.com/blog/introducing-muse-spark-msl/)
    - Meta's newest flagship, Muse Spark, announced April 2026; available through Meta AI and a private API preview. Llama is Meta's open-weight line (see Open Source)
  - [Amazon](https://aws.amazon.com/ai/) → [Nova](https://aws.amazon.com/nova/)
  - [Microsoft](https://www.microsoft.com/en-us/ai) → [MAI](https://microsoft.ai/models/)
    - Microsoft AI's own model family, launched at Build 2026, with MAI-Thinking-1 as its flagship reasoning model; served through Foundry and third-party providers. Phi is Microsoft's open-weight line (see Open Source)
  - [Alibaba](https://www.alibabacloud.com/) → [Qwen](https://www.alibabacloud.com/help/en/model-studio/models)
    - Its largest models, such as Qwen-Max, are API-only (see Open Source)
  - [Mistral](https://mistral.ai/) → [Mistral](https://mistral.ai/models/)
    - Premier models, such as Mistral Medium, are API-only (see Open Source)
- Open Source / Provider-agnostic
  - [OpenAI](https://openai.com/) → [GPT](https://huggingface.co/openai)
    - gpt-oss open-weight models, Apache 2.0 (see Commercial)
  - [xAI](https://x.ai/) → [Grok](https://huggingface.co/xai-org)
    - Grok 1 and Grok 2 weights, published March 2024 and August 2025; current Grok models are API-only (see Commercial)
  - [Meta](https://ai.meta.com/) → [Llama](https://developer.meta.com/ai/models/llama-4/)
    - Meta's open-weight line; its newest flagship, Muse, is API-only (see Commercial)
  - [Microsoft](https://www.microsoft.com/en-us/ai) → [Phi](https://azure.microsoft.com/en-us/products/phi)
    - Microsoft's open-weight small-model line; its MAI models are API-only (see Commercial)
  - [Alibaba](https://www.alibabacloud.com/) → [Qwen](https://huggingface.co/Qwen)
    - Most Qwen models are open-weight, under Apache 2.0 (see Commercial)
  - [DeepSeek](https://www.deepseek.com/) → [DeepSeek](https://huggingface.co/deepseek-ai)
  - [Mistral](https://mistral.ai/) → [Mistral](https://huggingface.co/mistralai)
    - Open-weight models, such as Mistral Large and Mistral Small (see Commercial)
  - [MiniMax](https://www.minimax.io/) → [MiniMax](https://huggingface.co/MiniMaxAI)
  - [Z.AI](https://z.ai/) → [GLM](https://huggingface.co/zai-org)
  - [Moonshot AI](https://www.moonshot.ai/) → [Kimi](https://huggingface.co/moonshotai)
  - [AI21 Labs](https://www.ai21.com/) → [Jamba](https://huggingface.co/ai21labs)
  - [Cohere](https://cohere.com/) → [Command](https://cohere.com/command)
  - [NVIDIA](https://www.nvidia.com/en-us/ai/) → [Nemotron](https://www.nvidia.com/en-us/ai-data-science/foundation-models/nemotron/)
  - [Nous Research](https://nousresearch.com/) → [Hermes](https://huggingface.co/NousResearch)

## Changelog

**2026-09-15**
- Added Meta → Muse and Microsoft → MAI under Commercial / Proprietary, per the owner's decision on #94: both are newer closed flagship lines, found while porting this catalog (#68). Meta → Llama and Microsoft → Phi stay under Open Source, with notes pointing between each pair

**2026-09-14**
- Renamed the notation from `Company → Model line` to `Model provider → Model line`, matching this section's own What heading; linked each provider to its official site and each model line to its model family's page, for the site's catalog port (#68). `CONTRIBUTING.md` records both
- Bucketed the Landscape per the owner's decision on #67 (D5): a line with published weights is Open Source / Provider-agnostic, an API-only line is Commercial / Proprietary, and a line with both kinds is listed in both with a note: GPT (gpt-oss), Grok (Grok 1 and 2), Qwen (Qwen-Max is API-only), and Mistral (Mistral Medium is API-only). Weights were checked on each provider's own Hugging Face organization; Amazon (Nova) and Google (Gemini) publish none. No entries added or removed
- Found while linking, left for the owner (#68): Meta's newest model is Muse Spark (announced April 8, 2026), available only through Meta AI and a private API preview, so Llama is no longer Meta's flagship; Microsoft AI launched its own MAI model family at Build 2026, with MAI-Thinking-1 as its "flagship reasoning model", served through Foundry and third-party providers. Both are new closed lines alongside an open one (Llama, Phi); adding them would be new entries

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
