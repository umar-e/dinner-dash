import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { editItem } from "../../actions/itemActions";
import { useFormik } from "formik";
import * as Yup from "yup";

import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Success from "../../components/Success";

export default function EditItem() {
  const location = useLocation();
  const { item } = location.state;
  const { currentUser } = useSelector((state) => state.userReducer);
  const { loading, success, error } = useSelector((state) => state.itemReducer);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: item.name,
      price: item.price,
      category: item.category.toString(),
      description: item.description,
      image: item.image,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      price: Yup.number().required("Price is required"),
      category: Yup.string().required("Category is required"),
      description: Yup.string().required("Description is required"),
      image: Yup.string(),
    }),
    onSubmit: (values) => {
      const newItem = {
        _id: item._id,
        name: values.name,
        price: Number(values.price),
        category: values.category.split(",").map((cat) => cat.trim()),
        description: values.description,
        image: values.image,
      };
      dispatch(editItem(newItem));
    },
  });

  if (!currentUser || !currentUser.isAdmin) {
    return <Navigate to="/" />;
  } else {
    return (
      <div data-testid="adminedit" >
        {loading && <Loading />}
        {error && (
          <Error
            error={error.message ? error.message : "Something went wrong"}
          />
        )}
        {success && <Success success="Successfully edited" />}
        EditItem
        <div>
          <div className="container text-start">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-1 col-md-6 ">
                <label htmlFor="itemName" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  value={formik.values.name}
                  type="text"
                  className="form-control"
                  id="itemName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-danger">{formik.errors.name}</p>
                ) : null}
              </div>

              <div className="mb-1 col-md-6">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  value={formik.values.price}
                  name="price"
                  type="number"
                  className="form-control"
                  id="price"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.price && formik.errors.price ? (
                  <p className="text-danger">{formik.errors.price}</p>
                ) : null}
              </div>
              <div className="mb-1 col-md-6">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  value={formik.values.category}
                  name="category"
                  type="text"
                  className="form-control"
                  id="category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.category && formik.errors.category ? (
                  <p className="text-danger">{formik.errors.category}</p>
                ) : null}
                <div className="form-text">
                  Separate categories with comma. " , "
                </div>
              </div>
              <div className="mb-1 col-md-6">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea
                  name="description"
                  value={formik.values.description}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.description && formik.errors.description ? (
                  <p className="text-danger">{formik.errors.description}</p>
                ) : null}
              </div>
              <div className="mb-3 col-md-6 text-start">
                <label className="form-label" htmlFor="image">
                  Image URL
                </label>
                <input
                  value={formik.values.image}
                  name="image"
                  type="text"
                  className="form-control"
                  id="image"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.image && formik.errors.image ? (
                  <p className="text-danger">{formik.errors.image}</p>
                ) : null}
              </div>

              <button type="submit" className="btn btn-primary mb-5 col-md-4">
                Submit
              </button>
              <div className="w-100 text-start">
                <Link to={"/admin/itemlist"} className="btn btn-danger">
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
