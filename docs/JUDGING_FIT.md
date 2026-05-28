# Judging Fit Matrix

Source checked on DoraHacks, 2026-05-28:

- The Turing Test Hackathon 2026 prize pool: `100,000 USD`
- Submission deadline: `2026-06-15 23:59`
- Current BUIDL status: `Under Review`
- Current selected track: `AI DevTools`

## Money Path Ranking

1. `20 Project Deployment Award`
   - Best near-term money path because the page says it has no judge scoring and is first-come, first-served for the first 20 projects that meet the deployment milestones.
   - Hard blocker: wallet-approved Mantle deployment and contract verification.
2. `AI DevTools`
   - Current submitted track.
   - Strong fit because BountyPilot is a Mantle-specific audit assistant for AI/Web3 hackathon submissions.
   - Hard blocker: subjective judging, and deployment likely improves credibility.
3. `Best UI/UX Award`
   - Secondary fit because the public frontend is accessible and beginner-friendly.
   - Hard blocker: current demo is functional but not a deep interactive app.
4. `Grand Champion`
   - Upside is high but least predictable.
   - Hard blocker: must be deployed on Mantle Network and beat projects across all tracks.

## 20 Project Deployment Award Checklist

Official bar:

- Smart contract deployed on Mantle Mainnet or Testnet.
- Contract verified on Mantle Explorer.
- At least one AI-powered function is callable on-chain, such as an inference result written on-chain.
- Frontend demo is publicly accessible.
- Deployment address included in DoraHacks submission.
- Demo video is at least 2 minutes and walks through the core use case.
- Open-source GitHub repo with README, setup instructions, architecture overview, and deployed contract address.

Current BountyPilot status:

- Public frontend: ready.
- Demo video: ready, `120s`.
- Open-source repo: ready.
- Architecture and proof docs: ready.
- AI-powered on-chain function: contract now exposes `recordAgentAudit`, which records the `80 / 100` AI audit readiness score, evidence URI, and evidence hash on-chain.
- Mantle deployment: blocked until Michael approves wallet use.
- Explorer verification: blocked until deployment.
- Deployed address in README/DoraHacks: blocked until deployment.

## AI DevTools Track Fit

Official track language:

> Smart gas optimisation tools and Mantle-specific audit assistants.

BountyPilot fit:

- Mantle-specific audit assistant for AI/Web3 hackathon opportunities.
- Checks official deadline, artifact readiness, read-only Mantle chain data, proof surface, and wallet/KYC safety gates.
- Produces a public evidence pack and hash that can be written to Mantle.

Current readiness:

- `80 / 100`

Remaining improvement with highest expected impact:

- Deploy `BountyPilotScoreRegistry` to Mantle Sepolia.
- Verify the contract on Mantle Explorer.
- Call `recordAgentAudit` with readiness score `80` and the current evidence hash. The generic `recordScore` path remains available for the `123` opportunity ranking score, but the deployment-award proof should emphasize the AI audit result.
- Add contract address and transaction link to README, DoraHacks, and `docs/evidence/latest.json`.

## Decision Rule

If the organizer confirms that deployment materially improves eligibility or judging, prioritize Sepolia deployment over additional documentation.

If the organizer says dry-run is enough for AI DevTools, only deploy if the 20 Project Deployment Award still has available slots and the wallet risk is acceptable.
