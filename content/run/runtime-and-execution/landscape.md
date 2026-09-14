---
title: Runtime and Execution Infrastructure Landscape
type: landscape
---

## Commercial / Proprietary

- [Modal](https://modal.com/products/sandboxes)
  - The same product is also an inference provider, listed in [[connect/model-infrastructure/inference-providers|Inference Providers]]
- [E2B](https://e2b.dev/)
  - Hosted commercial layer under the same brand as the open-source core (see Open Source)
- [Daytona](https://www.daytona.io/)
  - Hosted commercial service. Its former open-source core is listed under Legacy

## Open Source / Provider-agnostic

- [E2B](https://github.com/e2b-dev/runtime)
  - Self-hostable core, with a commercial layer under the same brand (see Commercial)
- [Firecracker](https://firecracker-microvm.github.io/) (AWS)
- [gVisor](https://gvisor.dev/) (Google)

## Legacy / Decommissioned

- [Daytona](https://github.com/daytonaio/daytona)
  - Open-source repository no longer maintained: in June 2026, core development moved to a private codebase. The code remains available under its last license, as is. The hosted service is active (see Commercial)
