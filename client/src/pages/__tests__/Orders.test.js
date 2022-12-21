import React from "react";
import { render, screen } from "@testing-library/react";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Orders from "../Orders";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Orders Page exists", () => {
  const initialState = {
    userReducer: { currentUser: { name: "test name" } },
    orderReducer: {},
  };

  const mockStore = configureStore([thunk]);
  let store;
  it("Expects Orders to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Orders />
      </Provider>,
      { wrapper: Router }
    );
    expect(screen.getByTestId("orderspage")).toBeInTheDocument();
  });
});
