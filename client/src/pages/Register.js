import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { registerUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Register() {
  const [name, setName] = useState();
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const dispatch = useDispatch();

  const { currentUser, error, loading, success } = useSelector(
    (state) => state.userReducer
  );

  function register(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
    } else {
      const user = {
        name,
        email,
        password,
        displayName,
      };
      dispatch(registerUser(user));
    }
  }
  if (currentUser) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5 text-start">
          {loading && <Loading />}
          {success && <Success success={"User registered successfully"} />}
          {error && <Error error={error.message? error.message: "Something went wrong"} />}
          <h2 className="text-center m-2">Register</h2>
          <div>
            <form onSubmit={register}>
              <input
                required
                type="text"
                placeholder="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="display name"
                className="form-control"
                minLength={2}
                maxLength={32}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
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
                value={password}
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                required
                type="password"
                placeholder="confirm password"
                className="form-control"
                minLength={6}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="btn btn-danger mt-2" type="submit">
                Register
              </button>
            </form>
          </div>
          <div className="mt-2">
            <Link className="text-secondary" to="/login">
              Already a user? Click here to login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
