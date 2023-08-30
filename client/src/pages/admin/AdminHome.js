import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

export default function AdminHome() {
  const { currentUser } = useSelector((state) => state.userReducer);
  if (!currentUser || !currentUser.isAdmin) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <h1>Admin</h1>
        <div className="flex-container">
          <div className="col">
            <Link className="btn btn-primary w-75" to={"/admin/itemlist"}>
              All Items
            </Link>
          </div>
          <div className="col">
            <Link className="btn btn-primary w-75" to={"/admin/orderlist"}>
              All Orders
            </Link>
          </div>
          <div className="col">
            <Link className="btn btn-primary w-75" to={"/admin/newitem"}>
              Add New Item
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
