import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "../Loading";

test("Expects Loading element to exist", () => {
  render(<Loading />);
  expect(screen.getByTestId("loading")).toBeInTheDocument();
});
