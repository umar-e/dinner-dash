import React from "react";
import { render, screen } from "@testing-library/react";

import thunk from "redux-thunk"
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AdminItems from "../../admin/AdminItems";

import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Admin Items page exists", () => {
  const initialState = { userReducer: { currentUser: { isAdmin: true } }, itemReducer: {} };

  const mockStore = configureStore([thunk]);
  let store;
  it("Expects Admin Items to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AdminItems />
      </Provider>,
      { wrapper: Router }
    );
    expect(screen.getByTestId("adminitems")).toBeInTheDocument();
  });
});
