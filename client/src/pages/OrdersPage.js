import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Order from "../components/Order";

export default function OrdersPage() {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { orders, error, loading } = useSelector(
    (state) => state.getAllOrdersReducer
  );

  useEffect(() => {
    dispatch(getAllOrders(currentUser));
    console.log(orders);
  }, []);

  return (
    <div>
      <h1>My Orders </h1>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          orders.map((order) => {
            return (
              <div className="col-md-8 p-3" key={order._id}>
                <hr />
                <Order order={order} />
                <hr />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
