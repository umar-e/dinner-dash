import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Cart from "../Cart";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Checkout page exists", () => {
  const initialState = { cartReducer: {}, userReducer: {} };

  const mockStore = configureStore();
  let store;
  it("Expects Checkout to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
      { wrapper: Router }

    );
    expect(screen.getByTestId("cartpage")).toBeInTheDocument();
  });
});
