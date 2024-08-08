import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("shows Hello text", () => {
    render(<App />);
    expect(screen.getByText("Hello Vite + React!")).toBeInTheDocument();
  });

  it("increases the value when button is pressed", async () => {
    render(<App />);
    const btn = screen.getByRole("button", { name: /count is/ });
    await userEvent.click(btn);
    expect(btn).toHaveTextContent("count is: 1");
  });
});
