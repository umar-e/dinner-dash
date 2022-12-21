import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Login from "../Login";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Login Page exists", () => {
  const initialState = { userReducer: {} };

  const mockStore = configureStore();
  let store;
  it("Expects Login to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
      { wrapper: Router }
    );
    expect(screen.getByTestId("login")).toBeInTheDocument();
  });
});
