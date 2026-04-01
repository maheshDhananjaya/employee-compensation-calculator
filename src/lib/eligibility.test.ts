import { getTotalEligibleAmount } from "@/lib/eligibility";

describe("getTotalEligibleAmount", () => {
  it("returns 0 for invalid inputs", () => {
    expect(getTotalEligibleAmount(0, 1000)).toBe(0);
    expect(getTotalEligibleAmount(10, 0)).toBe(0);
    expect(getTotalEligibleAmount(Number.NaN, 1000)).toBe(0);
  });

  it("calculates within first tier", () => {
    expect(getTotalEligibleAmount(5, 1000)).toBe(12500);
  });

  it("calculates across multiple tiers", () => {
    expect(getTotalEligibleAmount(10, 1000)).toBe(22500);
    expect(getTotalEligibleAmount(20, 1000)).toBe(39000);
  });

  it("caps calculation at 34 years", () => {
    expect(getTotalEligibleAmount(40, 1000)).toBe(48000);
  });
});
