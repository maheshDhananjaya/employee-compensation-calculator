export const getTotalEligibleAmount = (
  totalNumberOfYearsWorked: number,
  basicSalary: number,
): number => {
  if (
    !Number.isFinite(totalNumberOfYearsWorked) ||
    !Number.isFinite(basicSalary)
  ) {
    return 0;
  }

  if (totalNumberOfYearsWorked <= 0 || basicSalary <= 0) {
    return 0;
  }

  const tiers = [
    { limit: 5, rate: 2.5 },
    { limit: 14, rate: 2.0 },
    { limit: 19, rate: 1.5 },
    { limit: 24, rate: 1.0 },
    { limit: 34, rate: 0.5 },
  ];

  let total = 0;
  let remaining = totalNumberOfYearsWorked;
  let previousLimit = 0;

  for (const { limit, rate } of tiers) {
    if (remaining <= 0) break;

    const yearsInTier = Math.min(remaining, limit - previousLimit);
    total += basicSalary * yearsInTier * rate;
    remaining -= yearsInTier;
    previousLimit = limit;
  }

  return total;
};
