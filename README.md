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
- Selected track: AI DevTools
- Focus: Mantle Network, AI agents, on-chain data, scoring transparency, proof records
- Requirements: open-source repo, runnable demo, project pitch, and a Mantle-aligned deployment path

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
npm run mantle:audit
npm run mantle:data
npm run mantle:evidence
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

## Mantle AI DevTools Audit

BountyPilot now includes a pre-submit audit command for the Turing Test Hackathon:

```bash
npm run mantle:audit
```

The audit checks whether the project has the artifacts an AI DevTools submission needs:

- official deadline verification;
- public repo, demo, and demo video;
- inspectable scoring logic;
- read-only Mantle Mainnet and Mantle Sepolia chain-state checks;
- Mantle evidence-hash proof surface;
- explicit wallet and KYC safety gates;
- remaining blockers before a stronger Mantle testnet submission.

Current verdict: submission-ready as a dry-run AI DevTools prototype with read-only Mantle data, with the strongest next upgrade being an approved Mantle Sepolia deployment.

## Read-Only Mantle Data Adapter

BountyPilot can read public Mantle chain state without a wallet:

```bash
npm run mantle:data
```

The command checks:

- Mantle Mainnet chain ID `5000`;
- Mantle Sepolia chain ID `5003`;
- latest block number, block hash, and timestamp;
- explorer URLs for evidence review.

It does not sign messages, send transactions, deploy contracts, or require private keys.

## Evidence Pack

BountyPilot can generate a public evidence JSON that combines the selected opportunity, ranking, Mantle audit, read-only Mantle chain data, public artifacts, safety gates, and dry-run proof record:

```bash
npm run mantle:evidence
```

Latest evidence artifact:

- `docs/evidence/latest.json`
- Evidence URI: https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/docs/evidence/latest.json
- Evidence hash: `0x998cfaba1815a15a1b35e66fb8b7c1d54e2c43f55faa08edb9e1ac6741b9baa7`

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
- `src/mantle-audit.mjs` - AI DevTools readiness audit for Mantle submissions
- `src/mantle-data.mjs` - read-only Mantle RPC data adapter
- `src/mantle-evidence.mjs` - public evidence pack and hash generator
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
