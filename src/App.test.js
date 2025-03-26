import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders MyApp header", () => {
  render(<App />);
  const headerElement = screen.getByText(/MyApp/i);
  expect(headerElement).toBeInTheDocument();
});
