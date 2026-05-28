import { opportunities } from "./opportunities.mjs";
import { fileURLToPath } from "node:url";

export function buildBagsLaunchPlan(opportunity, options = {}) {
  const wallet = options.wallet || "YOUR_SOLANA_WALLET";
  const collaboratorWallet = options.collaboratorWallet || "OPTIONAL_COLLABORATOR_WALLET";
  const projectSlug = opportunity.id.replace(/[^a-z0-9]+/gi, "-").slice(0, 24);
  const symbol = options.symbol || "BPILOT";

  return {
    token: {
      name: `BountyPilot ${opportunity.name}`.slice(0, 32),
      symbol,
      description: [
        "BountyPilot is an AI opportunity agent that finds Web3/AI bounties, scores execution risk,",
        "and prepares submission packs. This launch plan demonstrates how agent-assisted work can",
        "use Bags fee sharing to split upside between the builder, the opportunity scout, and future collaborators.",
        `Target opportunity: ${opportunity.name}.`
      ].join(" "),
      imageUrl: `https://example.com/${projectSlug}.png`,
      website: "https://github.com/yourname/bounty-pilot"
    },
    feeShareConfig: {
      payer: wallet,
      baseMint: "TOKEN_MINT_FROM_CREATE_TOKEN_INFO",
      feeClaimers: [
        {
          user: wallet,
          userBps: 7000,
          role: "builder-agent-operator"
        },
        {
          user: collaboratorWallet,
          userBps: 3000,
          role: "human-opportunity-scout"
        }
      ]
    },
    safeExecutionNotes: [
      "This is a dry-run plan. Do not create token metadata or submit a launch transaction without explicit wallet approval.",
      "Bags authentication requires a Solana wallet signature and may require an API key.",
      "Any real launch needs token image, wallet funding for transaction fees, and review of legal/tax/market risks."
    ]
  };
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
  const bagsOpportunity = opportunities.find((opportunity) => opportunity.id === "bags-hackathon-2026");
  const plan = buildBagsLaunchPlan(bagsOpportunity, {
    wallet: process.env.BAGS_WALLET || "YOUR_SOLANA_WALLET",
    collaboratorWallet: process.env.BAGS_COLLABORATOR_WALLET || "OPTIONAL_COLLABORATOR_WALLET"
  });
  console.log(JSON.stringify({
    status: "legacy-reference-only",
    reason: "The official DoraHacks Bags Hackathon submission period has ended.",
    plan
  }, null, 2));
}
