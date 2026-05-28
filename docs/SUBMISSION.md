# Submission Draft

## Project Name

BountyPilot

## One-Line Description

An AI opportunity agent that turns noisy bounty boards into executable Web3 submission packs with a Mantle-ready proof layer.

## Target Track

Primary: The Turing Test Hackathon 2026 on DoraHacks.

Best-fit tracks:

- Agentic Economy, if the next build step uses Byreal Agent Skills, Byreal Perps CLI, or RealClaw.
- Alpha & Data, if the next build step adds Mantle on-chain data ingestion and evidence-backed opportunity scoring.
- Best UI/UX Award, because the current local dashboard is already runnable and demo-friendly.

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
- Mantle proof/deployment plan.

For the Turing Test Hackathon, the repo includes a minimal `BountyPilotScoreRegistry` contract that can record the selected opportunity score, evidence URI, and evidence hash on Mantle after wallet approval.

## What It Does Now

- Scores active Web3/AI opportunities.
- Correctly rejects expired hackathons, including the Bags listing whose official DoraHacks deadline already passed.
- Selects The Turing Test Hackathon 2026 as the best active Web3 target.
- Generates a complete project submission pack.
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

Current status: contract code and dry-run transaction payload are ready. Real deployment is intentionally gated behind explicit wallet approval.

## What Is Next

- Publish the repo to GitHub.
- Deploy the demo to a public URL.
- Add a Mantle on-chain data adapter or a Byreal/RealClaw integration, depending on the final selected track.
- Deploy `BountyPilotScoreRegistry` to Mantle Sepolia after wallet approval.
- Record a 2-minute demo video showing scoring, safety gates, dashboard, and the dry-run on-chain proof.

## Repository

Public GitHub repository URL: https://github.com/MichaelBIN720/bounty-pilot

## Public Demo

Dashboard URL: https://michaelbin720.github.io/bounty-pilot/demo/

## Demo Video

Demo video URL: https://raw.githubusercontent.com/MichaelBIN720/bounty-pilot/main/bounty-pilot-demo.mp4

## Short DoraHacks Copy

```text
BountyPilot is an AI opportunity agent that ranks Web3/AI bounties by deadline, upside, fit, effort, proof quality, and safety risk, then generates a submission pack and Mantle-ready proof plan for agent-assisted execution.
```

## Long DoraHacks Copy

```text
BountyPilot helps builders and AI agents avoid wasting time on stale task boards, expired hackathons, vague bounties, and unsafe account flows. It scans a set of monetizable opportunities, ranks them using an explicit scoring model, and generates the practical artifacts needed to execute: project angle, README outline, demo script, risk flags, safety gates, and a Mantle proof/deployment plan.

For The Turing Test Hackathon 2026, BountyPilot demonstrates how an AI agent can select an active Web3 opportunity, reject stale listings, and prepare a verifiable submission package. The repo includes a runnable dashboard, scoring CLI, submission generator, and a minimal Solidity contract that can record the selected score and evidence hash on Mantle after human wallet approval.
```
# Submission Draft

## Project Name

BountyPilot

## One-Line Description

An AI opportunity agent that turns noisy bounty boards into executable Web3 submission packs with a Mantle-ready proof layer.

## Target Track

Primary: The Turing Test Hackathon 2026 on DoraHacks.

Best-fit tracks:

- Agentic Economy, if the next build step uses Byreal Agent Skills, Byreal Perps CLI, or RealClaw.
- Alpha & Data, if the next build step adds Mantle on-chain data ingestion and evidence-backed opportunity scoring.
- Best UI/UX Award, because the current local dashboard is already runnable and demo-friendly.

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
- Mantle proof/deployment plan.

For the Turing Test Hackathon, the repo includes a minimal `BountyPilotScoreRegistry` contract that can record the selected opportunity score, evidence URI, and evidence hash on Mantle after wallet approval.

## What It Does Now

- Scores active Web3/AI opportunities.
- Correctly rejects expired hackathons, including the Bags listing whose official DoraHacks deadline already passed.
- Selects The Turing Test Hackathon 2026 as the best active Web3 target.
- Generates a complete project submission pack.
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

Current status: contract code and dry-run transaction payload are ready. Real deployment is intentionally gated behind explicit wallet approval.

## What Is Next

- Publish the repo to GitHub.
- Deploy the demo to a public URL.
- Add a Mantle on-chain data adapter or a Byreal/RealClaw integration, depending on the final selected track.
- Deploy `BountyPilotScoreRegistry` to Mantle Sepolia after wallet approval.
- Record a 2-minute demo video showing scoring, safety gates, dashboard, and the dry-run on-chain proof.

## Repository

Public GitHub repository URL: https://github.com/MichaelBIN720/bounty-pilot

## Public Demo

Dashboard URL: https://michaelbin720.github.io/bounty-pilot/demo/

## Demo Video

Demo video URL: https://raw.githubusercontent.com/MichaelBIN720/bounty-pilot/main/bounty-pilot-demo.mp4

## Short DoraHacks Copy

```text
BountyPilot is an AI opportunity agent that ranks Web3/AI bounties by deadline, upside, fit, effort, proof quality, and safety risk, then generates a submission pack and Mantle-ready proof plan for agent-assisted execution.
```

## Long DoraHacks Copy

```text
BountyPilot helps builders and AI agents avoid wasting time on stale task boards, expired hackathons, vague bounties, and unsafe account flows. It scans a set of monetizable opportunities, ranks them using an explicit scoring model, and generates the practical artifacts needed to execute: project angle, README outline, demo script, risk flags, safety gates, and a Mantle proof/deployment plan.

For The Turing Test Hackathon 2026, BountyPilot demonstrates how an AI agent can select an active Web3 opportunity, reject stale listings, and prepare a verifiable submission package. The repo includes a runnable dashboard, scoring CLI, submission generator, and a minimal Solidity contract that can record the selected score and evidence hash on Mantle after human wallet approval.
```
# Submission Draft

## Project Name

BountyPilot

## One-Line Description

An AI opportunity agent that turns noisy bounty boards into executable Web3 submission packs with a Mantle-ready proof layer.

## Target Track

Primary: The Turing Test Hackathon 2026 on DoraHacks.

Best-fit tracks:

- Agentic Economy, if the next build step uses Byreal Agent Skills, Byreal Perps CLI, or RealClaw.
- Alpha & Data, if the next build step adds Mantle on-chain data ingestion and evidence-backed opportunity scoring.
- Best UI/UX Award, because the current local dashboard is already runnable and demo-friendly.

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
- Mantle proof/deployment plan.

For the Turing Test Hackathon, the repo includes a minimal `BountyPilotScoreRegistry` contract that can record the selected opportunity score, evidence URI, and evidence hash on Mantle after wallet approval.

## What It Does Now

- Scores active Web3/AI opportunities.
- Correctly rejects expired hackathons, including the Bags listing whose official DoraHacks deadline already passed.
- Selects The Turing Test Hackathon 2026 as the best active Web3 target.
- Generates a complete project submission pack.
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

Current status: contract code and dry-run transaction payload are ready. Real deployment is intentionally gated behind explicit wallet approval.

## What Is Next

- Publish the repo to GitHub.
- Deploy the demo to a public URL.
- Add a Mantle on-chain data adapter or a Byreal/RealClaw integration, depending on the final selected track.
- Deploy `BountyPilotScoreRegistry` to Mantle Sepolia after wallet approval.
- Record a 2-minute demo video showing scoring, safety gates, dashboard, and the dry-run on-chain proof.

## Repository

Public GitHub repository URL: TBD

## Demo Video

Demo video URL: TBD

## Short DoraHacks Copy

```text
BountyPilot is an AI opportunity agent that ranks Web3/AI bounties by deadline, upside, fit, effort, proof quality, and safety risk, then generates a submission pack and Mantle-ready proof plan for agent-assisted execution.
```

## Long DoraHacks Copy

```text
BountyPilot helps builders and AI agents avoid wasting time on stale task boards, expired hackathons, vague bounties, and unsafe account flows. It scans a set of monetizable opportunities, ranks them using an explicit scoring model, and generates the practical artifacts needed to execute: project angle, README outline, demo script, risk flags, safety gates, and a Mantle proof/deployment plan.

For The Turing Test Hackathon 2026, BountyPilot demonstrates how an AI agent can select an active Web3 opportunity, reject stale listings, and prepare a verifiable submission package. The repo includes a runnable dashboard, scoring CLI, submission generator, and a minimal Solidity contract that can record the selected score and evidence hash on Mantle after human wallet approval.
```
