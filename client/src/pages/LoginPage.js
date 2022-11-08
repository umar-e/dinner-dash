import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";

export default function LoginPage() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem('currentUser')){
      window.location.href = '/'
    }
  },[])

  function login() {
    const user = {email, password}
    dispatch(loginUser(user))
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-5 mt-5 text-start">
        <h2 className="text-center m-2">Login</h2>
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
      </div>
    </div>
  );
}
