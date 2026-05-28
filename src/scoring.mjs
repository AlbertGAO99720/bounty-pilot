const MS_PER_DAY = 24 * 60 * 60 * 1000;
const DEFAULT_NOW = new Date("2026-05-28T12:00:00+08:00");

export function daysUntil(deadline, now = DEFAULT_NOW) {
  if (!deadline) return null;
  const due = new Date(`${deadline}T23:59:59+08:00`);
  return Math.ceil((due - now) / MS_PER_DAY);
}

export function scoreOpportunity(opportunity, now = DEFAULT_NOW) {
  const daysLeft = daysUntil(opportunity.deadline, now);
  const isExpired = opportunity.status === "expired" || (daysLeft != null && daysLeft < 0);
  const deadlineScore = daysLeft == null
    ? 2
    : isExpired
      ? 0
      : daysLeft <= 5
        ? 8
        : daysLeft <= 14
          ? 10
          : 6;

  const speedScore = opportunity.directCashSpeed * 8;
  const fitScore = opportunity.aiFit * 3 + opportunity.web3Fit * 3;
  const upsideScore = opportunity.upside * 4;
  const proofScore = opportunity.proofQuality * 3;
  const effortPenalty = Math.max(0, opportunity.effortDays - 4) * 3;
  const riskPenalty = opportunity.riskFlags.length * 2;
  const inactivePenalty = isExpired ? 200 : 0;

  const total = deadlineScore + speedScore + fitScore + upsideScore + proofScore - effortPenalty - riskPenalty - inactivePenalty;

  return {
    ...opportunity,
    daysLeft,
    isExpired,
    score: total,
    scoreBreakdown: {
      deadlineScore,
      speedScore,
      fitScore,
      upsideScore,
      proofScore,
      effortPenalty,
      riskPenalty,
      inactivePenalty
    }
  };
}

export function rankOpportunities(opportunities, now) {
  return opportunities
    .map((opportunity) => scoreOpportunity(opportunity, now))
    .sort((a, b) => b.score - a.score);
}
