# Mantle Deployment Pack

Evidence generated at: 2026-05-28T03:11:06.620Z

This pack prepares the wallet-gated steps for the DoraHacks Deployment Award path. It does not deploy, sign, send transactions, read private keys, or touch KYC.

## Network

- Network: Mantle Sepolia testnet
- Chain ID: `5003`
- RPC: https://rpc.sepolia.mantle.xyz
- Explorer: https://explorer.sepolia.mantle.xyz

## Compiled Contract

- Contract: `BountyPilotScoreRegistry`
- Source: `contracts/BountyPilotScoreRegistry.sol`
- ABI: `build/mantle/BountyPilotScoreRegistry.abi.json`
- Bytecode: `build/mantle/BountyPilotScoreRegistry.bytecode.txt`
- Compiler: `solc-js 0.8.30+commit.73712a01`
- Optimizer: enabled, runs `200`
- Constructor args: none
- Bytecode size: `1699` bytes

## Call After Deploy

Function:

```text
recordAgentAudit(bytes32 opportunityId, uint256 readinessScore, string evidenceURI, bytes32 evidenceHash)
```

Arguments:

- `opportunityId`: `0x91af48c5e7e96b5f4e9c91dc24e10d311d7497ff2e16ed600f1fc68e5aa4f2ae`
- `readinessScore`: `80`
- `evidenceURI`: https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/docs/evidence/latest.json
- `evidenceHash`: `0x2ae1b9e3ba104263de612d9c104f9afd2acaf9de7ebc42027b7ac7333ce1f338`

## Explorer Verification Fields

- Contract name: `BountyPilotScoreRegistry`
- Compiler: `solc-js 0.8.30+commit.73712a01`
- Solidity pragma: `^0.8.20`
- Optimizer: enabled
- Optimizer runs: `200`
- Constructor arguments: none

## DoraHacks Update After Wallet Steps

After deployment and the `recordAgentAudit` transaction, update the DoraHacks BUIDL details with:

- deployed contract address;
- Mantle Explorer contract link;
- `recordAgentAudit` transaction link;
- evidence URI and current evidence hash.

## Hard Stops

- Do not paste a private key into the terminal, repo, shell history, screenshots, or browser fields.
- Do not deploy to Mantle Mainnet unless Michael explicitly switches from Sepolia to mainnet.
- Do not sign an unexpected wallet message.
- Do not proceed through captcha, KYC, identity document, or personal-data gates on Michael's behalf.
