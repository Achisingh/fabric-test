import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests : ", () => {
  test("to test heading of the page", () => {
    render(<App />);
    const heading = screen.getByText("Calculate Water Bill");
    expect(heading).toBeInTheDocument();
  });
});
