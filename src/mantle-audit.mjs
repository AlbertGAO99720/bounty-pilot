import { fileURLToPath } from "node:url";
import { opportunities } from "./opportunities.mjs";
import { rankOpportunities } from "./scoring.mjs";

const CHECKS = [
  {
    id: "official-deadline",
    label: "Official DoraHacks deadline verified",
    status: "ready",
    weight: 12,
    evidence: "The Turing Test Hackathon page is active until 2026-06-15."
  },
  {
    id: "public-artifacts",
    label: "Public repo, demo, and video are available",
    status: "ready",
    weight: 14,
    evidence: "GitHub, GitHub Pages demo, and raw demo video URLs are public."
  },
  {
    id: "explicit-scoring",
    label: "Agent decision model is inspectable",
    status: "ready",
    weight: 14,
    evidence: "src/scoring.mjs exposes deadline, upside, fit, proof, effort, and risk scoring."
  },
  {
    id: "mantle-proof-surface",
    label: "Mantle proof surface exists",
    status: "dry-run-ready",
    weight: 18,
    evidence: "BountyPilotScoreRegistry can record opportunity score, AI audit readiness score, and evidence hash."
  },
  {
    id: "safety-boundary",
    label: "Wallet and KYC safety gates are explicit",
    status: "ready",
    weight: 10,
    evidence: "No private keys, wallet signatures, KYC, or deployment are automated."
  },
  {
    id: "mantle-data-adapter",
    label: "Mantle-specific data adapter",
    status: "ready",
    weight: 16,
    evidence: "npm run mantle:data reads Mantle Mainnet and Mantle Sepolia chain state without wallet access."
  },
  {
    id: "testnet-deployment",
    label: "Mantle Sepolia deployment",
    status: "needs-wallet-approval",
    weight: 16,
    evidence: "Requires Michael's explicit wallet approval and funded testnet address."
  }
];

const SCORE_BY_STATUS = {
  ready: 1,
  "dry-run-ready": 0.75,
  "next-build": 0.25,
  "needs-wallet-approval": 0
};

export function buildMantleAgentAudit(opportunity) {
  const checks = CHECKS.map((check) => ({
    ...check,
    earned: Math.round(check.weight * SCORE_BY_STATUS[check.status])
  }));

  const readinessScore = checks.reduce((sum, check) => sum + check.earned, 0);
  const maxScore = checks.reduce((sum, check) => sum + check.weight, 0);
  const blockers = checks
    .filter((check) => check.status === "next-build" || check.status === "needs-wallet-approval")
    .map((check) => check.label);

  return {
    opportunityId: opportunity.id,
    opportunityName: opportunity.name,
    recommendedTrack: "AI DevTools",
    readinessScore,
    maxScore,
    verdict:
      "Submission-ready as a dry-run AI DevTools prototype with read-only Mantle data; strongest remaining upgrade is approved testnet deployment.",
    checks,
    blockers,
    nextPatch:
      "Deploy BountyPilotScoreRegistry to Mantle Sepolia after wallet approval, call recordAgentAudit, and add explorer links to the submission.",
    dorahacksCopy:
      "BountyPilot is an AI DevTools agent that audits Web3 hackathon opportunities before a builder spends time or gas. It verifies official deadlines, scores fit and risk, generates a submission pack, and prepares a Mantle evidence hash plus AI audit score that can be recorded on-chain after wallet approval."
  };
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
  const [best] = rankOpportunities(opportunities);
  console.log(JSON.stringify(buildMantleAgentAudit(best), null, 2));
}
