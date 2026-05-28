# BountyPilot

BountyPilot is an AI opportunity agent for builders who want to monetize their skills without wasting days on stale task boards, expired hackathons, or unsafe account flows.

It scans Web3 and AI opportunity sources, ranks them by deadline, upside, execution fit, proof quality, and risk, then generates a submission pack: project angle, README outline, demo script, and a Mantle-ready on-chain proof plan.

## Why This Exists

This project came from a real constraint: earn the first 100 RMB legally without posting on private social channels, selling existing assets, or fabricating identity/experience.

The first attempts hit common blockers:

- microtask platforms had empty task pools or personal-data gates;
- writing marketplaces had demand but required account and payment setup;
- Web3 hackathons had larger upside but needed fast filtering and careful submission packaging;
- third-party hackathon lists can be stale, so official deadline checks matter.

BountyPilot turns that messy exploration into a repeatable agent workflow.

## Current Target

Primary target: The Turing Test Hackathon 2026 on DoraHacks.

- Official page: https://dorahacks.io/hackathon/mantleturingtesthackathon2026/detail
- Deadline: 2026-06-15 23:59
- Prize pool shown on DoraHacks: $100,000 for the current phase
- Focus: Mantle Network, AI agents, on-chain data, trading, RWA, Byreal/RealClaw
- Requirements: open-source repo, runnable demo, project pitch, and a Mantle or Byreal-aligned deployment path

Former target now rejected:

- The Bags Hackathon looked attractive through a third-party listing, but the official DoraHacks page shows its submission period ended on 2026-05-12. It remains only as a reference for future fee-share ideas.

Backup targets:

- UiPath Global AgentHack 2026: https://uipath-agenthack.devpost.com/
- NandaHack Agentic AI Hackathon: https://nandahack.media.mit.edu/
- web3.career opportunity pool: https://web3.career/crypto-jobs

## Demo

```bash
npm run score
npm run demo
npm run mantle:plan
```

There is also a browser demo for recording:

```bash
open demo/index.html
```

No wallet, private key, KYC, contract deployment, token launch, or transaction submission is performed by the default demo.

## Mantle Proof Plan

BountyPilot includes a minimal Solidity contract:

- `contracts/BountyPilotScoreRegistry.sol`

The contract can record:

- selected opportunity ID;
- BountyPilot score;
- evidence URI;
- evidence hash;
- submitter address and timestamp.

This gives the project a practical on-chain proof surface for the Turing Test Hackathon while keeping real deployment behind explicit wallet approval.

## Safety Boundary

BountyPilot is intentionally conservative:

- no fake identity;
- no automatic KYC;
- no automatic wallet signatures;
- no contract deployment without explicit human approval;
- no token launch without explicit human approval;
- no guarantee of prize, job, or investment return;
- no bypassing captchas or platform restrictions.

## Project Files

- `src/opportunities.mjs` - current opportunity dataset
- `src/scoring.mjs` - ranking logic
- `src/demo.mjs` - full submission-pack generator
- `src/mantle-plan.mjs` - dry-run Mantle proof/deployment plan
- `contracts/BountyPilotScoreRegistry.sol` - minimal on-chain score registry
- `src/bags-plan.mjs` - legacy dry-run Bags fee-share plan
- `docs/RESEARCH.md` - source-backed opportunity notes
- `docs/SUBMISSION.md` - DoraHacks/GitHub submission draft
- `docs/DEMO_VIDEO_SCRIPT.md` - 2-minute demo video script
- `docs/MANTLE_PROOF.md` - Mantle proof/deployment boundary
- `docs/BAGS_INTEGRATION.md` - legacy wallet/API safety notes
- `demo/index.html` - local browser demo for the pitch video

## Submission Summary

BountyPilot helps an AI agent decide where it can legally and realistically earn money, then turns that decision into an execution-ready Web3 submission package with an optional Mantle proof layer.
