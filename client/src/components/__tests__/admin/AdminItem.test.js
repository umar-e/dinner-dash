import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AdminItem from "../../admin/AdminItem";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Item exists", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  const item = {
    name: "item name",
    price: 100,
    description: "description",
    image: "",
    category: ["123"],
  };
  it("Expects item to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AdminItem item={item} />
      </Provider>,
      { wrapper: Router }
    );
    expect(screen.getByText("item name")).toBeInTheDocument();
  });
});
