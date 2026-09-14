---
type: home
title: AI Agent Ecosystem
---

# AI Agent Ecosystem

I started this as a way to keep my own head straight. The AI agent tooling space moves fast enough, and has enough overlapping pieces (harnesses, frameworks, orchestration patterns, a dozen flavors of memory and retrieval) that I couldn't hold the whole shape of it in my head just by reading about it as it came up. So I built a taxonomy to force some structure onto it, and this site is that taxonomy's next stage: a living reference I actually use, not a one-time writeup I published and walked away from.

This is a personal reference guide, first. If it's useful to you too, because you're building agents, or trying to learn the space the same way I am, that's a genuinely nice outcome, but it's not why any of this is organized the way it is.

## How this is organized

Everything here sits under four buckets: **Build**, **Connect**, **Run**, and **Control**. Build, Connect, and Run are roughly sequential: how you construct an agent, how you wire it up to the outside world, and how you actually operate it once it's live. Control isn't a fourth step. Security, governance, and evaluation don't happen at one point in the pipeline. A security policy gets defined at build time, enforced at connect time, and audited at runtime, so instead of forcing those concerns into wherever they'd awkwardly fit, they get their own cross-cutting hub that links out to everywhere they actually touch.

Within each section, I've tried to separate two different kinds of question: what is this, conceptually, and why does it exist, versus what are the actual named tools and products in this space right now. The first kind lives in a five-part explanation (What, Why, When, How, Where) for the section as a whole. The second kind lives in its own linked catalog page, so a fast-moving product landscape never risks breaking the conceptual writing sitting next to it, and so a specific concept can get its own page without dragging along an entire section's worth of unrelated tool names.

## A caveat on the structure itself

I organized this the way it made sense to me, not because it's the only correct way to carve up the space. You might draw the lines differently: group things I've separated, separate things I've grouped, or just disagree with where something landed. That's fine. This reflects one working mental model, mine, not a claim that it's the definitive one.

## This is not finished, and isn't trying to be

Large parts of this are still placeholders. Some sections have real explanatory writing; most still just have the scaffolding and a bullet list waiting to be turned into prose. Some catalog pages are populated; others are stubs. That's the normal state of this site, not a temporary gap before some future "done" version. The field changes, and so does my own understanding of it, so this is built to keep growing rather than to be completed once and left alone.

## Why this is public

Mostly because building it made me think building it out loud, in public, was worth doing, not because I set out to create a resource for other people. If it happens to save you some of the same digging I've already done, great. That's a bonus, not the point.
