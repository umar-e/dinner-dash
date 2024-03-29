import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import { getAllOrders } from "../../actions/orderActions";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import AdminOrder from "../../components/admin/AdminOrder";

export default function AdminOrders() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userReducer);

  const { orders, error, loading } = useSelector((state) => state.orderReducer);

  const [selected, setSelected] = useState("all");
  let adminOrders =
    selected === "all"
      ? orders
      : orders?.filter((order) => order.status === selected);

  function changeOrders() {
    dispatch(getAllOrders(true));
  }
  useEffect(() => {
    if (!orders || orders.length === 0) {
      dispatch(getAllOrders(true));
    }
  }, []);
  if (!currentUser || !currentUser.isAdmin) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <h1> Orders </h1>
        <div className="row justify-content-center">
          {loading && <Loading />}
          {error && (
            <Error
              error={error.message ? error.message : "Something went wrong"}
            />
          )}
          <div className="row justify-content-center">
            <div className="row justify-content-center">
              <select
                onChange={(e) => setSelected(e.target.value)}
                className="form-select w-25"
              >
                <option value="all">All</option>
                <option value="ordered">Ordered</option>
                <option value="paid">Paid</option>
                <option value="canceled">Canceled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            {adminOrders &&
              adminOrders.map((order) => {
                return (
                  <div className="col-md-8 p-3" key={order._id}>
                    <span>
                      <b>Order placed by: </b> {order.user.name} ,{" "}
                      {order.user.email}
                    </span>
                    <hr />
                    <AdminOrder order={order} changeOrders={changeOrders} />
                    <hr />
                  </div>
                );
              })}
          </div>
          <div className="w-100 text-start">
            <Link to={"/admin"} className="btn btn-danger mx-5">
              Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
