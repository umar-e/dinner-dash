import React, { useState } from "react";
import OrderItem from "./OrderItem";
export default function Order({ order }) {
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
        <p>{order.createdAt}</p>
      </div>
      <div className="col">
        <h5>Subtotal:</h5>
        <p>{order.subtotal}</p>
        <h5>Status:</h5>
        <p>
          <b>{order.status}</b>
        </p>
        <h5>updated at:</h5>
        <p>{order.updatedAt}</p>
      </div>
    </div>
  );
}
