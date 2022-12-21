import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";

describe("Testing Navbar exists", () => {
  const initialState = {
    userReducer: { currentUser: { name: "test name" } },
    cartReducer: { cartItems: [1, 2, 3] },
  };
  const mockStore = configureStore();
  let store;
  it("Expects navbar to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
      { wrapper: Router }
    );
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});
