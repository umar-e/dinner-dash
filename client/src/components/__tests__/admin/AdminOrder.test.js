import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AdminOrder from "../../admin/AdminOrder";

describe("Testing Item exists", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  const order = {
    address: "hehe",
    createdAt: "2015-12-01T00:00:00",
    subtotal: "2000",
    status: "Delivered",
    updatedAt: "2015-12-01T00:00:00",
    cartItems: [],
  };
  it("Expects item to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AdminOrder order={order} />
      </Provider>
    );
    expect(screen.getByText("hehe")).toBeInTheDocument();
  });
});
