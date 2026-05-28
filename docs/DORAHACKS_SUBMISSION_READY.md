# DoraHacks Submission Ready Copy

## Project

BountyPilot

## One-Line Description

An AI opportunity agent that turns noisy bounty boards into executable Web3 submission packs with a Mantle-ready proof layer.

## Repository

https://github.com/AlbertGAO99720/bounty-pilot

## Public Demo

https://albertgao99720.github.io/bounty-pilot/demo/

## Demo Video

https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/bounty-pilot-demo.mp4

## Target Track

The Turing Test Hackathon 2026. Current best-fit track is AI DevTools because BountyPilot audits opportunity fit, safety risk, evidence quality, and Mantle proof readiness before an agent spends time or gas. Backup fit is Alpha & Data if the next build adds Mantle on-chain data ingestion.

## Short Description

BountyPilot ranks Web3 and AI opportunities by deadline, upside, fit, effort, proof quality, and safety risk, then generates a submission pack and Mantle-ready proof plan for agent-assisted execution.

## Long Description

BountyPilot helps builders and AI agents avoid wasting time on stale task boards, expired hackathons, vague bounties, and unsafe account flows. It scans monetizable opportunities, ranks them using an explicit scoring model, and generates the practical artifacts needed to execute: target rationale, README outline, demo script, risk flags, safety gates, and a Mantle proof/deployment plan.

For The Turing Test Hackathon 2026, BountyPilot demonstrates an AI DevTools workflow: verify the official deadline, reject stale listings, score project-track fit, generate a submission pack, and prepare a verifiable evidence hash. The repo includes a runnable dashboard, scoring CLI, `mantle:audit` readiness command, submission generator, demo video, and a minimal Solidity contract that can record the selected score and evidence hash on Mantle after human wallet approval.

## Safety Note

The current build is a dry run. It does not sign wallets, bypass captchas, fake identity, automate KYC, deploy contracts, launch tokens, or guarantee prize income.
