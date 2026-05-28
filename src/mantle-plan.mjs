import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { opportunities } from "./opportunities.mjs";
import { rankOpportunities } from "./scoring.mjs";

function stableJson(value) {
  return JSON.stringify(value, Object.keys(value).sort(), 2);
}

export function buildMantleDeploymentPlan(opportunity, options = {}) {
  const evidencePayload = {
    opportunityId: opportunity.id,
    opportunityName: opportunity.name,
    deadline: opportunity.deadline,
    selectedScore: opportunity.score,
    selectedTrack: options.track || "AI DevTools pre-submit audit",
    modelVersion: "bounty-pilot-score-v0.2",
    proofScope: [
      "opportunity ranking",
      "risk flags",
      "submission requirements",
      "human approval gates"
    ],
    requirements: opportunity.requirements,
    riskFlags: opportunity.riskFlags
  };

  const evidenceHash = createHash("sha256")
    .update(stableJson(evidencePayload))
    .digest("hex");

  return {
    targetNetwork: options.network || "Mantle Sepolia testnet",
    contract: {
      name: "BountyPilotScoreRegistry",
      path: "contracts/BountyPilotScoreRegistry.sol",
      purpose: "Records the selected opportunity score, evidence URI, and evidence hash on-chain."
    },
    dryRunRecord: {
      opportunityId: opportunity.id,
      opportunityIdBytes32: `0x${createHash("sha256").update(opportunity.id).digest("hex")}`,
      score: opportunity.score,
      evidenceURI: options.evidenceURI || "ipfs://CID_OR_PUBLIC_JSON_URL_AFTER_REPO_PUBLISH",
      evidenceHash: `0x${evidenceHash}`
    },
    submissionGates: [
      "Publish repository and demo first.",
      "Only deploy the contract after Michael approves wallet use.",
      "Use testnet before any mainnet transaction.",
      "Do not store private keys in the repo or shell history.",
      "DoraHacks final submission remains manual if captcha, KYC, or profile data appears."
    ]
  };
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
  const [best] = rankOpportunities(opportunities);
  const plan = buildMantleDeploymentPlan(best);
  console.log(JSON.stringify(plan, null, 2));
}
