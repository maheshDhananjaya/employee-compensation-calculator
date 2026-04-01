import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EligibilityCalculator } from "@/components/EligibilityCalculator";

describe("EligibilityCalculator", () => {
  it("shows the total eligible amount after submit", async () => {
    const user = userEvent.setup();
    render(<EligibilityCalculator />);

    await user.type(screen.getByLabelText("Basic Salary"), "1000");
    await user.type(
      screen.getByLabelText("Total Number of years worked"),
      "10",
    );
    await user.click(screen.getByRole("button", { name: "Calculate" }));

    expect(screen.getByTestId("result-line")).toHaveTextContent(
      "Total eligible amount: 22500.00",
    );
  });

  it("disables calculate button when inputs are empty", () => {
    render(<EligibilityCalculator />);

    expect(screen.getByRole("button", { name: "Calculate" })).toBeDisabled();
  });
});
