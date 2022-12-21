import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Item from "../Item";

describe("Testing Item exists", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  const item = {
    name: "item name",
    price: 100,
    description: "description",
    image: "",
  };
  it("Expects item to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Item item={item} />
      </Provider>
    );
    expect(screen.getByTestId("item1")).toBeInTheDocument();
  });
});
