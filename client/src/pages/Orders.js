import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { getAllOrders } from "../actions/orderActions";

import Error from "../components/Error";
import Loading from "../components/Loading";
import Order from "../components/Order";

export default function Orders() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userReducer);

  const { orders, error, loading } = useSelector((state) => state.orderReducer);

  useEffect(() => {
    // if (!orders || orders.length === 0) {
    // }
    dispatch(getAllOrders(false));
  }, []);

  if (!currentUser) {
    return <Navigate to="/" />;
  } else {
    return (
      <div data-testid="orderspage">
        <h1>My Orders </h1>
        <div className="row justify-content-center">
          {loading && <Loading />}
          {error && (
            <Error
              error={error.message ? error.message : "Something went wrong"}
            />
          )}
          {orders &&
            orders.map((order) => {
              return (
                <div className="col-md-8 p-3" key={order._id}>
                  <hr />
                  <Order order={order} />
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
