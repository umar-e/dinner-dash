import React from "react";
import { render, screen } from "@testing-library/react";

import OrderItem from "../OrderItem";

describe("Testing Order Item exists", () => {
  const quantity = 2;
  const item = {
    name: "item name",
    price: 100,
    description: "description",
    image: "",
  };
  it("Expects Order item to exist", () => {
    render(<OrderItem item={item} quantity={quantity} />);
    expect(screen.getByText("item name")).toBeInTheDocument();
  });
});
