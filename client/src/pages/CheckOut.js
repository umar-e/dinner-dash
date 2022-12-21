import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { getAllOrders, placeOrder } from "../actions/orderActions";

import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function CheckOut() {
  const [address, setAddress] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cvv, setCvv] = useState();
  const dispatch = useDispatch();

  const { error, loading, success } = useSelector(
    (state) => state.orderReducer
  );
  const { currentUser } = useSelector((state) => state.userReducer);

  const { cartItems } = useSelector((state) => state.cartReducer);
  const subtotal = cartItems?.reduce((x, item) => x + item.price, 0);
  const cartIds = cartItems?.map((item) => item._id);
  const cartQuantity = cartItems?.map((item) => item.quantity);

  function handleCheckout(e) {
    e.preventDefault();
    let order = {
      user: currentUser._id,
      cartItems: cartIds,
      itemQuantity: cartQuantity,
      subtotal: subtotal,
      address,
      cardNumber: Number(cardNumber),
      cvv: Number(cvv),
    };
    dispatch(placeOrder(order));
    // dispatch(getAllOrders(false))
  }
  if (!currentUser) {
    return <Navigate to="/cart" />;
  } else {
    return (
      <div data-testid="checkout" className="row justify-content-center">
        <div className="col-md-5 mt-5 text-start">
          {loading && <Loading />}
          {success && <Success success={"Payment Successful"} />}
          {error && (
            <Error
              error={error.message ? error.message : "Something went wrong"}
            />
          )}
          <h2 className="text-center m-2">Checkout</h2>
          <div>
            <form onSubmit={handleCheckout}>
              <textarea
                required
                type="text"
                placeholder="address"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                required
                type="number"
                placeholder="card number"
                className="form-control"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <input
                required
                type="number"
                placeholder="cvv"
                className="form-control"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
              <button className="btn btn-danger mt-2" type="submit">
                Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
