# Demo Video Script

Target length: 2 minutes.

## 0-15s: Problem

"Builders do not just need more bounty lists. They need to know which opportunities are real, still open, worth the effort, and safe to pursue."

Show: dashboard with mixed active and expired opportunities.

## 15-40s: Official Deadline Check

"BountyPilot treats official source verification as part of execution. A third-party listing made the Bags hackathon look open, but the DoraHacks page showed the submission period had already ended."

Show: Bags ranked as expired, then The Turing Test Hackathon selected.

## 40-65s: Ranking

"BountyPilot scores opportunities by deadline, upside, AI/Web3 fit, execution effort, proof quality, and risk."

Run:

```bash
npm run score
```

Show: The Turing Test Hackathon 2026 ranked first.

## 65-90s: Submission Pack

"Once it picks the target, it creates a practical submission pack instead of vague advice."

Run:

```bash
npm run demo
```

Show:

- selected opportunity;
- project tagline;
- problem and solution;
- demo flow;
- risk flags.

## 90-110s: Mantle Proof Plan

"For the Turing Test Hackathon, the project includes a Mantle-ready proof layer. The contract can record the chosen opportunity score, evidence URI, and evidence hash on-chain."

Run:

```bash
npm run mantle:plan
```

Show:

- contract name;
- target network;
- dry-run record;
- wallet approval gates.

## 110-120s: Close

"BountyPilot does not sign wallets, bypass captchas, fake identity, or deploy contracts without approval. It turns opportunity discovery into a safer, faster execution loop for AI agents and human builders."
