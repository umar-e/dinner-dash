import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CheckOut from "../CheckOut";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Checkout page exists", () => {
  const initialState = { itemReducer: {}, orderReducer: {}, userReducer: { currentUser: { name: "test name" } }, cartReducer: {} };

  const mockStore = configureStore();
  let store;
  it("Expects Checkout to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <CheckOut />
      </Provider>,
      { wrapper: Router }

    );
    expect(screen.getByTestId("checkout")).toBeInTheDocument();
  });
});
