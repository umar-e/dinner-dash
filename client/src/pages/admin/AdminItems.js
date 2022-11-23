import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  getAllItems,
} from "../../actions/itemActions";
import AdminItem from "../../components/admin/AdminItem";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

export default function AdminItems() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userReducer);

  const { items, error, loading } = useSelector((state) => state.itemReducer);

  useEffect(() => {
    // if (!items || items.length === 0) {
    // }
    dispatch(getAllItems());
  }, []);

  if (!currentUser || !currentUser.isAdmin) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="justify-content-start">
        {/* {loading && <Loading />} */}
        {error && (
          <Error
            error={error.message ? error.message : "Something went wrong"}
          />
        )}
        {
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price </th>
                <th>Categories</th>
                <th>Retired?</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items && items.map((item) => <AdminItem item={item} />)}
            </tbody>
          </Table>
        }
        <div className="w-100 text-start">
          <Link to={"/admin"} className="btn btn-danger mx-5">
            Back
          </Link>
        </div>
      </div>
    );
  }
}
