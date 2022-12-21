import React from "react";
import { render, screen } from "@testing-library/react";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "../Home";

describe("Testing Home page exists", () => {
  const initialState = { itemReducer: {} };

  const mockStore = configureStore([thunk]);
  let store;
  it("Expects Home to exist", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId("homepage")).toBeInTheDocument();
  });
});
