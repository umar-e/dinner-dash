import React from "react";
import { render, screen } from "@testing-library/react";
import Order from "../Order";

describe("Testing Order exists", () => {
  const order = {
    address: "hehe",
    createdAt: "2015-12-01T00:00:00",
    subtotal: "2000",
    status: "Delivered",
    updatedAt: "2015-12-01T00:00:00",
    cartItems: [],
  };
  it("Expects order to exist", () => {
    render(<Order order={order} />);
    expect(screen.getByTestId("order1")).toBeInTheDocument();
  });
});
