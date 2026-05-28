# Next Actions

## Current State

1. Public GitHub repository:
   - https://github.com/AlbertGAO99720/bounty-pilot
2. Public demo page:
   - https://albertgao99720.github.io/bounty-pilot/demo/
3. Demo video:
   - https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/bounty-pilot-demo.mp4
4. Public evidence pack:
   - https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/docs/evidence/latest.json
5. Current readiness:
   - `80 / 100`
6. Current evidence hash:
   - `0x2ae1b9e3ba104263de612d9c104f9afd2acaf9de7ebc42027b7ac7333ce1f338`

## Demo Commands

```bash
npm run score
npm run demo
npm run mantle:audit
npm run mantle:data
npm run mantle:evidence
npm run mantle:plan
npm run mantle:deployment-pack
```

## Technical Upgrade Before Final Judging

The repo is submission-ready as a dry-run AI DevTools prototype. The shortest credible upgrade is now narrower:

1. Deploy `contracts/BountyPilotScoreRegistry.sol` to Mantle Sepolia after explicit wallet approval.
2. Verify the contract on Mantle Explorer.
3. Call `recordAgentAudit` with readiness score `80`, the current evidence URI, and the evidence hash.
4. Put the deployed address, record transaction, and explorer links in README, DoraHacks, and the evidence pack.
5. Record the deployed proof in the demo video if a final replacement video is needed.

## What I Can Do Without Extra Authorization

- Keep improving repo files and public documentation.
- Generate README, pitch, demo script, submission text, and evidence JSON.
- Build local scoring, audit, demo, read-only Mantle data, and dry-run proof logic.
- Generate the wallet-safe Mantle deployment pack.
- Open login/submission pages in the isolated Chrome window.

## What Needs Michael Approval

- Solving captchas.
- Providing profile fields or any KYC-like information.
- Creating, importing, or connecting a wallet.
- Signing any wallet challenge.
- Storing any API key.
- Deploying any contract.
- Launching any token or submitting any transaction.
- Submitting the final project if the page asks for personal/account data.
