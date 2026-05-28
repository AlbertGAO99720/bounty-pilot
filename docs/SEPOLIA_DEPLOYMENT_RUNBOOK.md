# Mantle Sepolia Deployment Runbook

Use this only if the organizer confirms that a Sepolia deployment will materially improve eligibility or judging.

## Current Dry-Run Record

- Network: Mantle Sepolia testnet
- Chain ID: `5003`
- RPC: `https://rpc.sepolia.mantle.xyz`
- Explorer: `https://explorer.sepolia.mantle.xyz`
- Contract: `contracts/BountyPilotScoreRegistry.sol`
- Opportunity ID: `mantle-turing-test-2026`
- Opportunity ID bytes32: `0x91af48c5e7e96b5f4e9c91dc24e10d311d7497ff2e16ed600f1fc68e5aa4f2ae`
- Score: `123`
- Evidence URI: `https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/docs/evidence/latest.json`
- Evidence hash: `0x2ae1b9e3ba104263de612d9c104f9afd2acaf9de7ebc42027b7ac7333ce1f338`

`docs/evidence/latest.json` is the source of truth. If `npm run mantle:evidence` is run again, the latest block observations and evidence hash may change. Do not deploy a record until the evidence file and docs agree.

## Preflight Without Wallet

```bash
npm run score
npm run mantle:audit
npm run mantle:data
npm run mantle:plan
```

Confirm:

- `mantle:audit` reports `80 / 100`;
- `mantle:data` reports Mantle Mainnet chain ID `5000`;
- `mantle:data` reports Mantle Sepolia chain ID `5003`;
- `mantle:plan` uses the public evidence URI and the current evidence hash above.

## Wallet-Gated Steps

These steps require Michael to be present and approve each wallet action.

1. Add or select Mantle Sepolia in the wallet.
2. Confirm the wallet has testnet gas.
3. Compile `BountyPilotScoreRegistry.sol` with Solidity `0.8.20` or newer.
4. Deploy `BountyPilotScoreRegistry` to Mantle Sepolia.
5. Call `recordScore` with:
   - `opportunityId`: `0x91af48c5e7e96b5f4e9c91dc24e10d311d7497ff2e16ed600f1fc68e5aa4f2ae`
   - `score`: `123`
   - `evidenceURI`: `https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/docs/evidence/latest.json`
   - `evidenceHash`: `0x2ae1b9e3ba104263de612d9c104f9afd2acaf9de7ebc42027b7ac7333ce1f338`
6. Copy the deployed contract address, record transaction hash, and explorer links.
7. Update README, DoraHacks details, and `docs/evidence/latest.json` with the deployed address and transaction link.

## Hard Stops

- Do not use a private key in the repo, shell history, screenshots, or video.
- Do not deploy to mainnet unless Michael explicitly switches from Sepolia to mainnet.
- Do not sign an unexpected wallet message.
- Do not proceed through KYC, captcha, or personal-data gates on Michael's behalf.
