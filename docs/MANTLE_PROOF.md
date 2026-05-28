# Mantle Proof Plan

The Turing Test Hackathon rewards projects that do more than present an idea. BountyPilot therefore includes a minimal on-chain proof surface that can be deployed to Mantle after wallet approval.

## Contract

```text
contracts/BountyPilotScoreRegistry.sol
```

The contract records:

- selected opportunity ID;
- BountyPilot score;
- evidence URI;
- evidence hash;
- submitter address;
- block timestamp.

The deployment-award path uses `recordAgentAudit` to write the `80 / 100` AI audit readiness score, evidence URI, and evidence hash on-chain. The original `recordScore` function remains available for generic score records, including the `123` opportunity ranking score.

## Dry-Run Command

```bash
npm run mantle:audit
npm run mantle:data
npm run mantle:evidence
npm run mantle:plan
```

The audit command outputs:

- recommended track;
- readiness score;
- artifact checks;
- remaining blockers;
- updated DoraHacks positioning copy.

The data command outputs:

- Mantle Mainnet chain ID and latest block;
- Mantle Sepolia chain ID and latest block;
- block hashes and timestamps for public evidence;
- a safety note confirming read-only mode.

The evidence command writes:

- `docs/evidence/latest.json`;
- selected opportunity and score breakdown;
- AI DevTools readiness audit;
- read-only Mantle Mainnet and Sepolia observations;
- public artifact URLs;
- evidence hash for later on-chain recording.

Latest evidence hash:

```text
0x2ae1b9e3ba104263de612d9c104f9afd2acaf9de7ebc42027b7ac7333ce1f338
```

The proof-plan command outputs:

- target network;
- contract path;
- `bytes32` opportunity ID;
- selected score;
- placeholder evidence URI;
- SHA-256 evidence hash;
- safety gates before deployment.

## Why This Matters

The project can prove that an AI agent selected a target using a documented scoring model rather than vague manual judgment. The public evidence file can contain the source URLs, score breakdown, risks, and final selected opportunity. The contract stores the hash so the evidence can be checked later.

## Deployment Boundary

No deployment is performed by default.

Real deployment requires:

- Michael's wallet approval;
- Mantle Sepolia or Mantle mainnet RPC selection;
- funded wallet for gas;
- contract verification on Mantle Explorer if pursuing the deployment award;
- calling `recordAgentAudit` with the current evidence hash;
- deployed address added to README and DoraHacks submission.

Do not store private keys or seed phrases in the repo, shell history, screenshots, or demo video.
