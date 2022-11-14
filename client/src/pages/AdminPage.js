import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdminPage() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!currentUser || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  })

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
