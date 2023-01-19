import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./form";

describe("Form tests : ", () => {
  const mockFormData = {
    apartmentType: "",
    noOfguests: "",
    corpRatio: "",
    borewellRatio: "",
    totalWaterConsumed: "",
    totalCost: "",
  };
  test("to test if apartment type ", () => {
    render(<Form formData={mockFormData} />);
    // screen.debug();
    const heading = screen.getByText(/apartment type/i);
    expect(heading).toBeInTheDocument();
  });
  test("to test handleChange", () => {
    const setStateOfForm = jest.fn();
    render(<Form formData={mockFormData} setStateOfForm={setStateOfForm} />);
    const comboBox = screen.getByRole("combobox", {
      name: /apartment type/i,
    });
    fireEvent.change(comboBox, { target: { value: "2", id: "apartmentType" } });
    expect(setStateOfForm).toHaveBeenCalledTimes(1);
  });
});
