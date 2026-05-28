import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sha256Hex, stableJson } from "./hash.mjs";
import { buildMantleAgentAudit } from "./mantle-audit.mjs";
import { readMantleData } from "./mantle-data.mjs";
import { buildMantleDeploymentPlan } from "./mantle-plan.mjs";
import { opportunities } from "./opportunities.mjs";
import { rankOpportunities } from "./scoring.mjs";

const PUBLIC_EVIDENCE_URI =
  "https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/docs/evidence/latest.json";

function buildSelectedOpportunity(opportunity) {
  return {
    id: opportunity.id,
    name: opportunity.name,
    type: opportunity.type,
    status: opportunity.status,
    source: opportunity.source,
    url: opportunity.url,
    deadline: opportunity.deadline,
    prize: opportunity.prize,
    score: opportunity.score,
    daysLeft: opportunity.daysLeft,
    scoreBreakdown: opportunity.scoreBreakdown,
    requirements: opportunity.requirements,
    riskFlags: opportunity.riskFlags
  };
}

export async function buildMantleEvidencePack() {
  const ranked = rankOpportunities(opportunities);
  const [best] = ranked;
  const mantleAudit = buildMantleAgentAudit(best);
  const mantleData = await readMantleData();

  const evidenceCore = {
    schemaVersion: "bounty-pilot-evidence-v0.1",
    generatedAt: mantleData.generatedAt,
    mode: "read-only-dry-run",
    selectedOpportunity: buildSelectedOpportunity(best),
    ranking: ranked.map((opportunity) => ({
      id: opportunity.id,
      name: opportunity.name,
      status: opportunity.status,
      score: opportunity.score,
      deadline: opportunity.deadline,
      daysLeft: opportunity.daysLeft,
      riskFlagCount: opportunity.riskFlags.length
    })),
    mantleAudit,
    mantleData,
    publicArtifacts: {
      repository: "https://github.com/AlbertGAO99720/bounty-pilot",
      demo: "https://albertgao99720.github.io/bounty-pilot/demo/",
      demoVideo: "https://raw.githubusercontent.com/AlbertGAO99720/bounty-pilot/main/bounty-pilot-demo.mp4",
      evidenceURI: PUBLIC_EVIDENCE_URI
    },
    safetyBoundary: [
      "No wallet, private key, seed phrase, signature, transaction, or deployment is used.",
      "No KYC, identity document, personal-data gate, captcha bypass, or platform-rule bypass is automated.",
      "Any Mantle Sepolia or mainnet deployment requires explicit human wallet approval."
    ]
  };

  const evidenceHash = sha256Hex(stableJson(evidenceCore));
  const mantleProofPlan = buildMantleDeploymentPlan(best, {
    evidenceURI: PUBLIC_EVIDENCE_URI,
    evidenceHash,
    evidencePayload: evidenceCore,
    readinessScore: mantleAudit.readinessScore
  });

  return {
    ...evidenceCore,
    hashAlgorithm: "sha256",
    hashScope: "canonical stable JSON of this evidence pack before hashAlgorithm, hashScope, evidenceHash, and mantleProofPlan are appended",
    evidenceHash: `0x${evidenceHash}`,
    mantleProofPlan
  };
}

async function main() {
  const writeIndex = process.argv.indexOf("--write");
  const outputPath = writeIndex >= 0
    ? process.argv[writeIndex + 1] || "docs/evidence/latest.json"
    : null;

  const pack = await buildMantleEvidencePack();
  const json = `${stableJson(pack)}\n`;

  if (outputPath) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, json);
    console.log(JSON.stringify({
      wrote: outputPath,
      selectedOpportunity: pack.selectedOpportunity.name,
      readinessScore: pack.mantleAudit.readinessScore,
      evidenceHash: pack.evidenceHash,
      evidenceURI: pack.publicArtifacts.evidenceURI
    }, null, 2));
    return;
  }

  console.log(json);
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
  await main();
}
