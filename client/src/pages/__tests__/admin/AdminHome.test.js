import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AdminHome from "../../admin/AdminHome";

import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Admin Home page exists", () => {
  const initialState = { userReducer: { currentUser: { isAdmin: true } } };

  const mockStore = configureStore();
  let store;
  it("Expects Admin Home to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AdminHome />
      </Provider>,
      { wrapper: Router }
    );
    expect(screen.getByTestId("adminhome")).toBeInTheDocument();
  });
});
