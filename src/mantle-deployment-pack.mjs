import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { sha256Hex, stableJson } from "./hash.mjs";
import { compileMantleContract } from "./mantle-compile.mjs";

const EVIDENCE_PATH = "docs/evidence/latest.json";
const OUTPUT_PATH = "build/mantle/deployment-pack.json";
const DOC_PATH = "docs/MANTLE_DEPLOYMENT_PACK.md";

function assertEvidenceHash(evidence) {
  const { hashAlgorithm, hashScope, evidenceHash, mantleProofPlan, ...core } = evidence;
  const recomputed = `0x${sha256Hex(stableJson(core))}`;

  if (recomputed !== evidenceHash) {
    throw new Error(`Evidence hash mismatch: ${recomputed} != ${evidenceHash}`);
  }

  return {
    hashAlgorithm,
    hashScope,
    evidenceHash,
    recomputed
  };
}

function requireAgentAuditRecord(evidence) {
  const record = evidence.mantleProofPlan?.agentAuditRecord;

  if (!record) {
    throw new Error("Missing mantleProofPlan.agentAuditRecord in evidence pack.");
  }

  if (record.functionName !== "recordAgentAudit") {
    throw new Error(`Unexpected function name: ${record.functionName}`);
  }

  if (record.readinessScore !== evidence.mantleAudit?.readinessScore) {
    throw new Error("Agent audit readiness score does not match mantleAudit.readinessScore.");
  }

  if (record.evidenceHash !== evidence.evidenceHash) {
    throw new Error("Agent audit evidence hash does not match evidenceHash.");
  }

  return record;
}

function renderDeploymentPackMarkdown(pack) {
  const args = pack.callAfterDeploy.recordAgentAudit.arguments;

  return `# Mantle Deployment Pack

Evidence generated at: ${pack.evidence.generatedAt}

This pack prepares the wallet-gated steps for the DoraHacks Deployment Award path. It does not deploy, sign, send transactions, read private keys, or touch KYC.

## Network

- Network: ${pack.network.name}
- Chain ID: \`${pack.network.chainId}\`
- RPC: ${pack.network.rpc}
- Explorer: ${pack.network.explorer}

## Compiled Contract

- Contract: \`${pack.contract.name}\`
- Source: \`${pack.contract.sourcePath}\`
- ABI: \`${pack.contract.abiPath}\`
- Bytecode: \`${pack.contract.bytecodePath}\`
- Compiler: \`${pack.contract.compiler}\`
- Optimizer: enabled, runs \`${pack.contract.optimizer.runs}\`
- Constructor args: none
- Bytecode size: \`${pack.contract.bytecodeBytes}\` bytes

## Call After Deploy

Function:

\`\`\`text
recordAgentAudit(bytes32 opportunityId, uint256 readinessScore, string evidenceURI, bytes32 evidenceHash)
\`\`\`

Arguments:

- \`opportunityId\`: \`${args.opportunityIdBytes32}\`
- \`readinessScore\`: \`${args.readinessScore}\`
- \`evidenceURI\`: ${args.evidenceURI}
- \`evidenceHash\`: \`${args.evidenceHash}\`

## Explorer Verification Fields

- Contract name: \`${pack.contract.name}\`
- Compiler: \`${pack.contract.compiler}\`
- Solidity pragma: \`^0.8.20\`
- Optimizer: enabled
- Optimizer runs: \`200\`
- Constructor arguments: none

## DoraHacks Update After Wallet Steps

After deployment and the \`recordAgentAudit\` transaction, update the DoraHacks BUIDL details with:

- deployed contract address;
- Mantle Explorer contract link;
- \`recordAgentAudit\` transaction link;
- evidence URI and current evidence hash.

## Hard Stops

${pack.hardStops.map((item) => `- ${item}`).join("\n")}
`;
}

export async function buildMantleDeploymentPack() {
  const evidence = JSON.parse(await readFile(EVIDENCE_PATH, "utf8"));
  const evidenceCheck = assertEvidenceHash(evidence);
  const agentAuditRecord = requireAgentAuditRecord(evidence);
  const artifact = await compileMantleContract();

  const pack = {
    generatedAt: new Date().toISOString(),
    mode: "wallet-gated-predeploy",
    network: {
      name: "Mantle Sepolia testnet",
      chainId: 5003,
      rpc: "https://rpc.sepolia.mantle.xyz",
      explorer: "https://explorer.sepolia.mantle.xyz"
    },
    contract: {
      name: "BountyPilotScoreRegistry",
      sourcePath: artifact.sourcePath,
      abiPath: artifact.abiPath,
      bytecodePath: artifact.bytecodePath,
      compiler: artifact.compiler,
      optimizer: artifact.optimizer,
      constructorArgs: [],
      bytecodeBytes: artifact.bytecodeBytes,
      functions: artifact.functions
    },
    evidence: {
      path: EVIDENCE_PATH,
      uri: evidence.publicArtifacts.evidenceURI,
      hash: evidence.evidenceHash,
      hashVerified: evidenceCheck.recomputed === evidence.evidenceHash,
      generatedAt: evidence.generatedAt,
      readinessScore: evidence.mantleAudit.readinessScore
    },
    callAfterDeploy: {
      recordAgentAudit: {
        functionName: "recordAgentAudit",
        signature: "recordAgentAudit(bytes32,uint256,string,bytes32)",
        arguments: {
          opportunityId: agentAuditRecord.opportunityId,
          opportunityIdBytes32: agentAuditRecord.opportunityIdBytes32,
          readinessScore: agentAuditRecord.readinessScore,
          evidenceURI: agentAuditRecord.evidenceURI,
          evidenceHash: agentAuditRecord.evidenceHash
        }
      }
    },
    dorahacksUpdateAfterDeploy: [
      "deployed contract address",
      "Mantle Explorer contract link",
      "recordAgentAudit transaction link",
      "evidence URI and evidence hash"
    ],
    hardStops: [
      "Do not paste a private key into the terminal, repo, shell history, screenshots, or browser fields.",
      "Do not deploy to Mantle Mainnet unless Michael explicitly switches from Sepolia to mainnet.",
      "Do not sign an unexpected wallet message.",
      "Do not proceed through captcha, KYC, identity document, or personal-data gates on Michael's behalf."
    ]
  };

  await mkdir("build/mantle", { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(pack, null, 2)}\n`);
  await writeFile(DOC_PATH, renderDeploymentPackMarkdown(pack));

  return {
    wrote: [OUTPUT_PATH, DOC_PATH],
    contract: pack.contract.name,
    bytecodeBytes: pack.contract.bytecodeBytes,
    evidenceHash: pack.evidence.hash,
    readinessScore: pack.evidence.readinessScore,
    callAfterDeploy: pack.callAfterDeploy.recordAgentAudit.signature
  };
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
  console.log(JSON.stringify(await buildMantleDeploymentPack(), null, 2));
}
