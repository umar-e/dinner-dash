import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { registerUser } from "../actions/userActions";
import { useFormik } from "formik";
import * as Yup from "yup";

import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      displayName: Yup.string()
        .max(32, "Must less than 32 characters")
        .min(2, "Name must be at least 2 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: (values) => {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
        displayName: values.displayName,
      };
      dispatch(registerUser(user));
    },
  });

  const { currentUser, error, loading, success } = useSelector(
    (state) => state.userReducer
  );

  if (currentUser) {
    return <Navigate to="/" />;
  } else {
    return (
      <div data-testid="register" className="row justify-content-center">
        <div className="col-md-5 mt-5 text-start">
          {loading && <Loading />}
          {success && <Success success={"User registered successfully"} />}
          {error && (
            <Error
              error={error.message ? error.message : "Something went wrong"}
            />
          )}
          <h2 className="text-center m-2">Register</h2>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="form-control"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-danger">{formik.errors.name}</p>
              ) : null}
              <input
                name="displayName"
                type="text"
                placeholder="display name"
                className="form-control"
                value={formik.values.displayName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.displayName && formik.errors.displayName ? (
                <p className="text-danger">{formik.errors.displayName}</p>
              ) : null}

              <input
                name="email"
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
                name="password"
                type="password"
                placeholder="password"
                className="form-control"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-danger">{formik.errors.password}</p>
              ) : null}

              <input
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
                className="form-control"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <p className="text-danger">{formik.errors.confirmPassword}</p>
              ) : null}

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
