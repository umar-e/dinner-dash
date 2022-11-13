import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeOrderStatus } from "../../actions/orderActions";
import OrderItem from "../OrderItem";
export default function Order({ order }) {
  const dispatch = useDispatch();
  function statusHandler() {
    dispatch(changeOrderStatus(order));
  }
  return (
    <div className="flex-container">
      <div className="col">
        <h5>Items:</h5>
        {order.cartItems.map((item) => (
          <div>
            <OrderItem item={item} />
          </div>
        ))}
      </div>
      <div className="col">
        <h5>Address:</h5>
        <p>{order.address}</p>
        <h5>Ordered At</h5>
        <p>
          {order.createdAt.substring(0, 10)} {order.createdAt.substring(11, 19)}
        </p>
        <h5>updated at:</h5>
        <p>
          {order.updatedAt.substring(0, 10)} {order.updatedAt.substring(11, 19)}
        </p>
      </div>
      <div className="col">
        <h5>Subtotal:</h5>
        <p>{order.subtotal}</p>
        <h5>Status:</h5>
        <p>
          <b>{order.status} </b>
          <br />
        </p>
        <button onClick={statusHandler} className="btn btn-sm btn-danger">
          change status
        </button>
      </div>
    </div>
  );
}