import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const { currentUser } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  return (
    <div data-testid="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded">
        <Link className="navbar-brand" to="/">
          Dinner Dash
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="dropdown mt-2">
                <a
                  className="dropdown-toggle text-secondary"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.displayName ? currentUser.displayName : currentUser.name}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/orders">
                    Orders
                  </Link>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart {cartState.cartItems.length}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
