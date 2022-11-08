import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { loading, error } = useSelector((state) => state.loginUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-5 mt-5 text-start">
        <h2 className="text-center m-2">Login</h2>
        {loading && <Loading />}
        {error && <Error error={"Invalid credentials"} />}
        <div>
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
            type="text"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-danger mt-2" onClick={login}>
            Login
          </button>
        </div>
        <div className="mt-2">
          <a className="text-secondary" href="/register">
            Not a user? Click here to register
          </a>
        </div>
      </div>
    </div>
  );
}
