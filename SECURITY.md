# Security policy

This repository builds a static documentation site, published to GitHub Pages
at <https://vishmatta.github.io/ai-agent-ecosystem/>. It has no server, no
database, no accounts, and collects nothing from visitors. That limits what a
vulnerability here can be, but not to nothing: the build runs code, the
deploy holds a token, and the published pages link out to hundreds of places.

## Reporting

Report privately through GitHub's
[private vulnerability reporting](https://github.com/vishmatta/ai-agent-ecosystem/security/advisories/new)
on this repository. Please don't open a public issue for a security problem
first.

`CONTRIBUTING.md` says this repository isn't accepting outside contributions
in this version. A security report is not a contribution: reports are welcome
from anyone, even though pull requests aren't being reviewed. You don't need
a fix to report, and a report costs you nothing if it turns out to be
nothing.

Useful in a report: what you found, the file or URL it affects, and the steps
that show it. A proof of concept helps and isn't required.

## What to expect

One person maintains this repository, as a side project. Expect an
acknowledgement within a week. There is no bounty, no severity SLA, and no
formal disclosure timeline. Credit in the fix's commit or release note is
yours if you want it.

## In scope

- This site's own code: `plugins/`, `quartz.config.yaml`,
  `quartz/styles/custom.scss`.
- Build and deploy automation: `.github/workflows/`, `.github/scripts/`.
  Anything that could let a pull request run code with the deploy token's
  permissions, or publish to the live site, matters most here.
- Published pages under `content/`: an external link that has been
  hijacked, parked, or now serves malware, and anything on a page that
  could run in a visitor's browser.
- Dependencies, where the path from the advisory to this site or its build
  is real. A transitive advisory that nothing here can reach is an ordinary
  issue, not a security report.

## Out of scope

- **Vendored upstream Quartz** — everything under `quartz/` except
  `styles/custom.scss`, plus `quartz.config.default.yaml` and `Dockerfile`.
  This is a checkout of [Quartz](https://github.com/jackyzha0/quartz);
  report a flaw in it to that project, which can fix it for every Quartz
  site rather than only this one.
- **Third-party products named in the taxonomy.** Pages here catalogue
  hundreds of vendors' tools. A vulnerability in one of those products goes
  to its vendor. If a product's security status is a fact the catalogue
  states wrongly, that's a content bug, so open an ordinary issue.
- **Findings that need repository settings changed**, such as branch
  protection or the Pages source. Those belong to the owner; report them the
  same way and they'll be actioned rather than patched.
- Missing security headers on GitHub Pages, which this project doesn't
  control, and reports produced by a scanner with no demonstrated path to
  impact.

## Content, not code

A factual error, a dead link, or a product listed under the wrong status is
not a security issue. Those are ordinary issues, and welcome as such.
