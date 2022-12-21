import React from "react";
import { render, screen } from "@testing-library/react";

import thunk from "redux-thunk"
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AdminOrders from "../../admin/AdminOrders";

import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Admin Orders page exists", () => {
  const initialState = { userReducer: { currentUser: { isAdmin: true } }, orderReducer: {} };

  const mockStore = configureStore([thunk]);
  let store;
  it("Expects Admin Orders to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AdminOrders />
      </Provider>,
      { wrapper: Router }
    );
    expect(screen.getByTestId("adminorders")).toBeInTheDocument();
  });
});
