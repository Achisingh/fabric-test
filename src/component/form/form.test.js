import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./form";

describe("App tests : ", () => {
  test("to test heading of the page", () => {
    const mockFormData = {
      apartmentType: "",
      noOfguests: "",
      corpRatio: "",
      borewellRatio: "",
      totalWaterConsumed: "",
      totalCost: "",
    };
    render(<Form formData={mockFormData} />);
    const heading = screen.getByText(/apartment type/i);
    expect(heading).toBeInTheDocument();
  });
  test("to test onChange event", async () => {
    const setStateOfForm = jest.fn();
    const mockFormData = {
      apartmentType: "",
      noOfguests: "",
      corpRatio: "",
      borewellRatio: "",
      totalWaterConsumed: "",
      totalCost: "",
    };
    render(<Form formData={mockFormData} setStateOfForm={setStateOfForm} />);
    const input = screen.getByRole("spinbutton", { name: /no\. of guests/i });
  });
});
