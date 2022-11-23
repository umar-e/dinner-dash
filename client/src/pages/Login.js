import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginUser } from "../actions/userActions";

import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { currentUser, loading, error } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();
console.log(error)
  function login(e) {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginUser(user));
  }
  if (currentUser) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5 text-start">
          <h2 className="text-center m-2">Login</h2>
          {loading && <Loading />}
          {error && <Error error={error.message? error.message: "Something went wrong"} />}
          <div>
            <form onSubmit={login}>
              <input
                required
                type="email"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                required
                type="password"
                placeholder="password"
                className="form-control"
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn btn-danger mt-2" type="submit">
                Login
              </button>
            </form>
          </div>
          <div className="mt-2">
            <Link className="text-secondary" to="/register">
              Not a user? Click here to register
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
