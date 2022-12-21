import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginUser } from "../actions/userActions";
import { useFormik } from "formik";
import * as Yup from "yup";

import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      const user = {
        email: values.email,
        password: values.password,
      };
      dispatch(loginUser(user));
    },
  });

  const { currentUser, loading, error } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  if (currentUser) {
    return <Navigate to="/" />;
  } else {
    return (
      <div data-testid="login" className="row justify-content-center">
        <div className="col-md-5 mt-5 text-start">
          <h2 className="text-center m-2">Login</h2>
          {loading && <Loading />}
          {error && (
            <Error
              error={error.message ? error.message : "Something went wrong"}
            />
          )}
          <div>
            <form onSubmit={formik.handleSubmit}>
              <input
                name="email"
                // required
                type="text"
                placeholder="email"
                className="form-control"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-danger">{formik.errors.email}</p>
              ) : null}
              <input
                // required
                name="password"
                type="password"
                placeholder="password"
                className="form-control"
                // minLength={6}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-danger">{formik.errors.password}</p>
              ) : null}
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
