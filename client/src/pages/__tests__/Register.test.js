import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Register from "../Register";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Register page exists", () => {
  const initialState = { userReducer: {} };

  const mockStore = configureStore();
  let store;
  it("Expects register form to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
      { wrapper: Router }
    );
    expect(screen.getByTestId("register")).toBeInTheDocument();
  });
});
