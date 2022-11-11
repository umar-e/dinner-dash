import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function RegisterPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { error, loading, success } = useSelector(
    (state) => state.registerUserReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function register() {
    if (password !== confirmPassword) {
      alert("passwords do not match");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-5 mt-5 text-start">
        {loading && <Loading />}
        {success && <Success success={"User registered successfully"} />}
        {error && <Error error={"Email already registered"} />}
        <h2 className="text-center m-2">Register</h2>
        <div>
          <input
            required
            type="text"
            placeholder="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="text"
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="confirm password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="btn btn-danger mt-2" onClick={register}>
            Register
          </button>
        </div>
        <div className="mt-2">
          <a className="text-secondary" href="/login">
            Already a user? Click here to login
          </a>
        </div>
      </div>
    </div>
  );
}
