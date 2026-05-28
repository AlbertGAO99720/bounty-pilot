# Submission Draft

## Project Name

BountyPilot

## One-Line Description

An AI DevTools agent that turns noisy bounty boards into executable Web3 submission packs with a Mantle-ready proof layer.

## Target Track

Primary: The Turing Test Hackathon 2026 on DoraHacks.

Best-fit track: AI DevTools.

Why: BountyPilot audits whether an AI/Web3 project is worth submitting before a builder spends time, wallet approvals, or gas. It verifies deadlines, scores fit and risk, produces a submission pack, and prepares a Mantle evidence hash plus AI audit readiness score that can be recorded on-chain after wallet approval.

Backup fit: Alpha & Data, if the next build expands the current read-only Mantle data adapter into richer on-chain analytics.

## Problem

Builders and AI agents waste time on stale jobs, expired hackathons, low-value microtasks, and opportunities blocked by login, KYC, wallet, or unclear submission rules. The result is not just lost time; it is bad opportunity selection.

The same problem is worse in Web3 because deadline data, bounty requirements, wallet gates, and deployment constraints are scattered across multiple pages.

## Solution

BountyPilot ranks monetizable opportunities by deadline, prize, AI/Web3 fit, effort, proof quality, and risk. It then generates the practical artifacts needed to move:

- target rationale;
- README and pitch outline;
- demo flow;
- risk flags;
- safety gates;
- Mantle AI DevTools readiness audit;
- Mantle proof/deployment plan.

For the Turing Test Hackathon, the repo includes a minimal `BountyPilotScoreRegistry` contract. Its generic `recordScore` path can record the selected opportunity score, while `recordAgentAudit` can record the `80 / 100` AI audit readiness score, evidence URI, and evidence hash on Mantle after wallet approval.

## What It Does Now

- Scores active Web3/AI opportunities.
- Correctly rejects expired hackathons, including the Bags listing whose official DoraHacks deadline already passed.
- Selects The Turing Test Hackathon 2026 as the best active Web3 target.
- Generates a complete project submission pack.
- Runs a Mantle `AI DevTools` readiness audit with explicit blockers.
- Reads Mantle Mainnet and Mantle Sepolia public chain state without wallet access.
- Generates a public evidence JSON and SHA-256 hash for later on-chain recording.
- Generates a dry-run Mantle proof record.
- Provides a local browser dashboard for demo recording.
- Documents safety boundaries around wallets, KYC, deployment, and irreversible submissions.

## On-Chain Component

Contract:

```text
contracts/BountyPilotScoreRegistry.sol
```

The contract records:

- opportunity ID;
- score;
- evidence URI;
- evidence hash;
- submitter;
- timestamp.

For the deployment award path, the key callable function is `recordAgentAudit`, because it writes the AI audit result and evidence hash on-chain.

Current status: contract code and dry-run transaction payload are ready. Real deployment is intentionally gated behind explicit wallet approval.

## Commands

```bash
npm run score
npm run demo
npm run mantle:audit
npm run mantle:data
npm run mantle:evidence
npm run mantle:plan
```

## Evidence Pack

Latest public evidence URI:

```text
https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/docs/evidence/latest.json
```

Latest evidence hash:

```text
0x2ae1b9e3ba104263de612d9c104f9afd2acaf9de7ebc42027b7ac7333ce1f338
```

The evidence pack includes the selected opportunity, score breakdown, AI DevTools readiness audit, read-only Mantle Mainnet/Sepolia chain-state checks, public artifact URLs, safety gates, and the dry-run Mantle proof record. Its `mantleProofPlan.agentAuditRecord` field includes `recordAgentAudit`, readiness score `80`, and the current evidence hash.

## What Is Next

- Deploy `BountyPilotScoreRegistry` to Mantle Sepolia after wallet approval.
- Verify the contract on Mantle Explorer.
- Call `recordAgentAudit` with readiness score `80` and the current evidence hash.
- Add deployed address, transaction link, and explorer link to README and DoraHacks.

## Repository

Public GitHub repository URL: https://github.com/AlbertGAO99720/bounty-pilot

## Public Demo

Dashboard URL: https://albertgao99720.github.io/bounty-pilot/demo/

## Demo Video

Demo video URL: https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/bounty-pilot-demo.mp4

## Short DoraHacks Copy

```text
BountyPilot is an AI DevTools agent that ranks Web3 and AI opportunities, generates a submission pack, and prepares a Mantle-ready `recordAgentAudit` proof for writing the AI audit result and evidence hash on-chain after wallet approval.
```

## Long DoraHacks Copy

```text
BountyPilot helps builders and AI agents avoid wasting time on stale task boards, expired hackathons, vague bounties, and unsafe account flows. It scans monetizable opportunities, ranks them using an explicit scoring model, and generates the practical artifacts needed to execute: target rationale, README outline, demo script, risk flags, safety gates, and a Mantle proof/deployment plan.

For The Turing Test Hackathon 2026, BountyPilot demonstrates an AI DevTools workflow: verify the official deadline, reject stale listings, score project-track fit, read public Mantle chain state, generate a submission pack, and prepare a verifiable evidence hash. The repo includes a runnable dashboard, scoring CLI, mantle:audit readiness command, mantle:data read-only RPC adapter, mantle:evidence JSON/hash generator, demo video, and a minimal Solidity contract. The contract exposes `recordAgentAudit`, a callable on-chain path for writing the `80 / 100` AI audit readiness score plus the evidence URI/hash to Mantle after human wallet approval.
```
