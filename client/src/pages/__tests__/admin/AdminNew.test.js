import React from "react";
import { render, screen } from "@testing-library/react";

import thunk from "redux-thunk"
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AdminNew from "../../admin/AdminNew";

import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Admin New Items page exists", () => {
  const initialState = { userReducer: { currentUser: { isAdmin: true } }, itemReducer: {} };

  const mockStore = configureStore([thunk]);
  let store;
  it("Expects Admin New Items to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AdminNew />
      </Provider>,
      { wrapper: Router }
    );
    expect(screen.getByTestId("adminnew")).toBeInTheDocument();
  });
});
