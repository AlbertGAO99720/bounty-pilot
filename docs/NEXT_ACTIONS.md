# Next Actions

## Immediate Path

1. Public GitHub repository is live:
   - https://github.com/AlbertGAO99720/bounty-pilot
2. Public demo page is live:
   - https://albertgao99720.github.io/bounty-pilot/demo/
3. Demo video is live:
   - https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/bounty-pilot-demo.mp4
4. Open the DoraHacks Turing Test Hackathon page:
   - https://dorahacks.io/hackathon/mantleturingtesthackathon2026/detail
5. Register as hacker if the account is not already registered.
6. Submit:
   - project name: BountyPilot;
   - repo URL;
   - demo video URL;
   - summary from `docs/SUBMISSION.md`.

## Technical Upgrade Before Final Submission

The current repo is demo-ready, but the official DoraHacks criteria reward real deployment. The shortest credible upgrade is:

1. Add a Mantle on-chain data adapter or a Byreal/RealClaw adapter.
2. Deploy `contracts/BountyPilotScoreRegistry.sol` to Mantle Sepolia.
3. Put the deployed address in the README and DoraHacks submission.
4. Record the deployed proof in the demo video.

## What I Can Do Without Extra Authorization

- Keep improving the repo files.
- Generate README, pitch, demo script, and submission text.
- Build local scoring/demo logic.
- Prepare a dry-run Mantle deployment payload.
- Open login/submission pages in the isolated Chrome window.

## What Needs Michael Approval

- Publishing to GitHub under Michael's account if the browser asks for login/2FA.
- Creating or connecting a DoraHacks account.
- Solving captchas.
- Providing profile fields or any KYC-like information.
- Creating, importing, or connecting a wallet.
- Signing any wallet challenge.
- Storing any API key.
- Deploying any contract.
- Launching any token or submitting any transaction.
- Submitting the final project to DoraHacks if the page asks for personal/account data.

## Suggested DoraHacks Submission Copy

Short description:

```text
BountyPilot is an AI opportunity agent that ranks Web3/AI bounties by deadline, upside, fit, effort, proof quality, and safety risk, then generates a submission pack and Mantle-ready proof plan for agent-assisted execution.
```

Long description:

```text
BountyPilot helps builders and AI agents avoid wasting time on stale task boards, expired hackathons, vague bounties, and unsafe account flows. It scans a set of monetizable opportunities, ranks them using an explicit scoring model, and generates the practical artifacts needed to execute: project angle, README outline, demo script, risk flags, safety gates, and a Mantle proof/deployment plan.

For The Turing Test Hackathon 2026, BountyPilot demonstrates how an AI agent can select an active Web3 opportunity, reject stale listings, and prepare a verifiable submission package. The repo includes a runnable dashboard, scoring CLI, submission generator, and a minimal Solidity contract that can record the selected score and evidence hash on Mantle after human wallet approval.
```

Demo commands:

```bash
npm run score
npm run demo
npm run mantle:plan
```
# Next Actions

## Immediate Path

1. Publish `bounty-pilot` as a public GitHub repository.
2. Record a 2-minute demo using `docs/DEMO_VIDEO_SCRIPT.md`.
3. Deploy the static demo to a public URL.
4. Open the DoraHacks Turing Test Hackathon page:
   - https://dorahacks.io/hackathon/mantleturingtesthackathon2026/detail
5. Register as hacker if the account is not already registered.
6. Submit:
   - project name: BountyPilot;
   - repo URL;
   - demo video URL;
   - summary from `docs/SUBMISSION.md`.

## Technical Upgrade Before Final Submission

The current repo is demo-ready, but the official DoraHacks criteria reward real deployment. The shortest credible upgrade is:

1. Add a Mantle on-chain data adapter or a Byreal/RealClaw adapter.
2. Deploy `contracts/BountyPilotScoreRegistry.sol` to Mantle Sepolia.
3. Put the deployed address in the README and DoraHacks submission.
4. Record the deployed proof in the demo video.

## What I Can Do Without Extra Authorization

- Keep improving the repo files.
- Generate README, pitch, demo script, and submission text.
- Build local scoring/demo logic.
- Prepare a dry-run Mantle deployment payload.
- Open login/submission pages in the isolated Chrome window.

## What Needs Michael Approval

- Publishing to GitHub under Michael's account if the browser asks for login/2FA.
- Creating or connecting a DoraHacks account.
- Solving captchas.
- Providing profile fields or any KYC-like information.
- Creating, importing, or connecting a wallet.
- Signing any wallet challenge.
- Storing any API key.
- Deploying any contract.
- Launching any token or submitting any transaction.
- Submitting the final project to DoraHacks if the page asks for personal/account data.

## Suggested DoraHacks Submission Copy

Short description:

```text
BountyPilot is an AI opportunity agent that ranks Web3/AI bounties by deadline, upside, fit, effort, proof quality, and safety risk, then generates a submission pack and Mantle-ready proof plan for agent-assisted execution.
```

Long description:

```text
BountyPilot helps builders and AI agents avoid wasting time on stale task boards, expired hackathons, vague bounties, and unsafe account flows. It scans a set of monetizable opportunities, ranks them using an explicit scoring model, and generates the practical artifacts needed to execute: project angle, README outline, demo script, risk flags, safety gates, and a Mantle proof/deployment plan.

For The Turing Test Hackathon 2026, BountyPilot demonstrates how an AI agent can select an active Web3 opportunity, reject stale listings, and prepare a verifiable submission package. The repo includes a runnable dashboard, scoring CLI, submission generator, and a minimal Solidity contract that can record the selected score and evidence hash on Mantle after human wallet approval.
```

Demo commands:

```bash
npm run score
npm run demo
npm run mantle:plan
```
