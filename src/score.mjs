import { opportunities } from "./opportunities.mjs";
import { rankOpportunities } from "./scoring.mjs";

const ranked = rankOpportunities(opportunities);

for (const item of ranked) {
  console.log(`${item.score.toString().padStart(3, " ")}  ${item.name}`);
  console.log(`     type=${item.type} deadline=${item.deadline || "none"} daysLeft=${item.daysLeft ?? "n/a"}`);
  console.log(`     url=${item.url}`);
  console.log(`     why=${item.fitNotes}`);
  console.log(`     risks=${item.riskFlags.join("; ")}`);
}
