# Bags Integration

Bags is no longer the primary submission target because the official DoraHacks page for The Bags Hackathon shows the submission period ended on 2026-05-12. BountyPilot still keeps a dry-run Bags integration as a future monetization reference.

It generates the token metadata and fee-share payload that would be used in a real Bags launch flow, but does not authenticate, sign, or submit transactions by default.

## Why Dry Run First

Real Bags execution can require:

- Solana wallet creation or import;
- wallet challenge signing;
- API key storage;
- token image and metadata;
- transaction signing;
- SOL for transaction fees;
- legal/market review before launching a token.

Those steps are intentionally gated.

## Current Command

```bash
npm run bags:plan
```

This outputs:

- token name;
- symbol;
- description;
- image URL placeholder;
- fee-share config;
- safety notes.

## Real Bags Flow

Based on Bags docs:

1. `POST /agent/v2/auth/init` with wallet address.
2. Sign the challenge with the wallet.
3. `POST /agent/v2/auth/callback` with signature, address, nonce, and key name.
4. Use the API key for token metadata and fee-share endpoints.
5. Build and sign transactions.
6. Submit through `/solana/send-transaction`.

## Explicit Non-Actions

BountyPilot will not:

- create or import a real wallet without approval;
- store private keys in repo;
- sign a challenge without approval;
- launch a token without approval;
- claim any financial return or prize guarantee.
