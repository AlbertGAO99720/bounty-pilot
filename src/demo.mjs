import { opportunities } from "./opportunities.mjs";
import { rankOpportunities } from "./scoring.mjs";
import { buildMantleDeploymentPlan } from "./mantle-plan.mjs";
import { buildMantleAgentAudit } from "./mantle-audit.mjs";

const ranked = rankOpportunities(opportunities);
const best = ranked[0];
const mantlePlan = buildMantleDeploymentPlan(best);
const mantleAudit = buildMantleAgentAudit(best);

const submissionPack = {
  selectedOpportunity: {
    name: best.name,
    score: best.score,
    deadline: best.deadline,
    daysLeft: best.daysLeft,
    whyThisWins: best.fitNotes,
    requirements: best.requirements,
    risks: best.riskFlags
  },
  project: {
    name: "BountyPilot",
    tagline: "An AI agent that turns noisy bounty boards into executable Web3 submission packs.",
    problem: "Builders waste time chasing stale tasks, vague hackathons, and opportunities blocked by account, KYC, wallet, or submission constraints.",
    solution: [
      "Scan opportunity sources.",
      "Score deadline, prize, fit, effort, proof quality, and safety risk.",
      "Generate a submission plan, README outline, demo script, Mantle audit, and Mantle proof plan.",
      "Stop before wallet signatures, KYC, deployment, or irreversible submissions."
    ],
    demoFlow: [
      "Run npm run score to rank opportunities.",
      "Run npm run demo to generate the selected submission pack.",
      "Run npm run mantle:audit to check AI DevTools readiness and blockers.",
      "Run npm run mantle:data to read Mantle chain state without wallet access.",
      "Run npm run mantle:plan to produce a dry-run Mantle deployment proof.",
      "Use the generated docs as the DoraHacks/GitHub/demo video submission base."
    ]
  },
  mantleAudit,
  mantleDryRun: mantlePlan
};

console.log(JSON.stringify(submissionPack, null, 2));
