# Demo Video Script

Target length: 2 minutes.

## 0-15s: Problem

"Builders do not just need more bounty lists. They need to know which opportunities are real, still open, worth the effort, and safe to pursue."

Show: dashboard with mixed active and expired opportunities.

## 15-35s: Official Deadline Check

"BountyPilot treats official source verification as part of execution. A third-party listing made the Bags hackathon look open, but the DoraHacks page showed the submission period had already ended."

Show: Bags ranked as expired, then The Turing Test Hackathon selected.

## 35-55s: Mantle AI DevTools readiness

"Mantle AI DevTools readiness: 80 / 100. Official deadline, public demo, chain data, and evidence hash are ready."

Show:

- selected target;
- AI DevTools track;
- Mantle audit card at `80 / 100`;
- `chain data` and `evidence hash` tags.

## 55-75s: Read-only Mantle data

"Read-only Mantle data is live. mantle:data verifies Mainnet chain ID 5000 and Sepolia chain ID 5003 without wallet access."

Run:

```bash
npm run mantle:data
```

Show:

- Mantle Mainnet chain ID `5000`;
- Mantle Sepolia chain ID `5003`;
- latest block hashes and timestamps;
- no wallet/private key/signature requirement.

## 75-100s: Evidence pack

"Evidence pack is public. mantle:evidence combines score, audit, chain observations, artifact URLs, safety gates, and dry-run proof."

Run:

```bash
npm run mantle:evidence
```

Show:

- public evidence JSON;
- evidence hash;
- dry-run Mantle proof record.

## 100-120s: Safety close

"No fake identity, KYC automation, wallet signing, token launch, or contract deploy. Sepolia deployment remains behind explicit human approval."

Run:

```bash
npm run mantle:plan
```

Show:

- contract name `BountyPilotScoreRegistry`;
- target network `Mantle Sepolia testnet`;
- evidence URI and hash;
- human approval gates.
