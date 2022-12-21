import React from "react";
import { render, screen } from "@testing-library/react";
import Unknown from "../Unknown"
test("Expects Unknown page to exist", () => {
  render(<Unknown />);
  expect(screen.getByTestId("unknown")).toBeInTheDocument();
});
