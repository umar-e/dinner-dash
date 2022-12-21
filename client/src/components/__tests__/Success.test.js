import React from "react";
import { render, screen } from "@testing-library/react";
import Success from "../Success";
test("Expects Success message to exist", () => {
  render(<Success success={"Success message"} />);
  expect(screen.getByText("Success message")).toBeInTheDocument();
});
