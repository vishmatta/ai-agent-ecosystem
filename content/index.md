---
type: home
title: AI Agent Ecosystem
---

I started this as a way to keep my own head straight. The AI agent tooling space moves fast enough, and has enough overlapping pieces (harnesses, frameworks, orchestration patterns, a dozen flavors of memory and retrieval) that I couldn't hold the whole shape of it in my head just by reading about it as it came up. So I built a taxonomy to force some structure onto it, and this site is that taxonomy's next stage: a living reference I actually use, not a one-time writeup I published and walked away from.

This is a personal reference guide, first.

## How this is organized

Everything here sits under four buckets: [[build/index|Build]], [[connect/index|Connect]], [[run/index|Run]], and [[control/index|Control]]. Build, Connect, and Run are roughly sequential: how you construct an agent, how you wire it up to the outside world, and how you actually operate it once it's live. Control isn't a fourth step. Security, governance, observability, and evaluation don't happen at one point in the pipeline. A security policy gets defined at build time, enforced at connect time, and audited at runtime, so instead of forcing those concerns into wherever they'd awkwardly fit, they get their own cross-cutting hub that links out to everywhere they actually touch.

Within each section, I've tried to separate two kinds of question: what is this and why does it exist, versus which named tools and products are in this space right now. The first gets a five-part explanation (What, Why, When, How, Where), plus its own page for any concept big enough to need one. The second gets a separate catalog, the Landscape page, so a fast-moving product list never breaks the conceptual writing next to it.

## A caveat on the structure itself

I organized this the way it made sense to me, not because it's the only correct way to carve up the space. You might draw the lines differently: group things I've separated, separate things I've grouped, or just disagree with where something landed. That's fine. This reflects one working mental model, mine, not a claim that it's the definitive one.

## This is not finished, and isn't trying to be

Most of this isn't written yet. Plenty of sections don't have a page, some that do are still waiting on their explanation, and every catalog is only as current as my last pass through it. That's the normal state of this site, not a temporary gap before some future "done" version. The field changes, and so does my own understanding of it, so this is built to keep growing rather than to be completed once and left alone.

## Why this is public

Mostly because building it convinced me that doing it out loud, in public, was worth it, not because I set out to create a resource for other people. If it saves you some of the digging I've already done, because you're building agents or learning the space the same way I am, great. That's a bonus, not the point.
