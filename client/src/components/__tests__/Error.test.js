import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "../Error";

test("Expects error message to exist", () => {
  render(<Error error={"Error message"} />);
  expect(screen.getByText("Error message")).toBeInTheDocument();
});
