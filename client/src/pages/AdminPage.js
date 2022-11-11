import React from "react";
import { Link, Route, Routes, Router } from "react-router-dom";
import ItemList from "../components/admin/ItemList"
import OrderList from "../components/admin/OrderList"
import NewItem from "../components/admin/NewItem"

export default function AdminPage() {
  return (
    <div>
      <h1>Admin</h1>
      <div className="flex-container">
        <div className="col">
          <Link className="btn btn-primary w-75" to={"/admin/itemlist"}>All Items</Link>
        </div>
        <div className="col">
          <Link className="btn btn-primary w-75" to={"/admin/orderlist"}>All Orders</Link>
        </div>
        <div className="col">
          <Link className="btn btn-primary w-75" to={"/admin/newitem"} >Add New Item</Link>
        </div>
      </div>
    </div>
  );
}
