import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { placeOrder } from "../actions/orderActions";

import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function CheckOutPage() {
  const [address, setAddress] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cvv, setCvv] = useState();
  const dispatch = useDispatch();

  const { error, loading, success } = useSelector(
    (state) => state.placeOrderReducer
  );

  const { cartItems } = useSelector((state) => state.cartReducer);
  let subtotal = cartItems.reduce((x, item) => x + item.price, 0);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!currentUser) {
      window.location.href = "/cart";
      alert("Please login first");
    }
  });

  function handleCheckout() {
    let order = {
      name: currentUser.name,
      email: currentUser.email,
      userId: currentUser._id,
      cartItems: cartItems,
      subtotal: subtotal,
      address,
      cardNumber: Number(cardNumber),
      cvv: Number(cvv),
    };
    dispatch(placeOrder(order));
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-5 mt-5 text-start">
        {loading && <Loading />}
        {success && <Success success={"Payment Successful"} />}
        {error && <Error error={"Error in checkout"} />}
        <h2 className="text-center m-2">Checkout</h2>
        <div>
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
          <button className="btn btn-danger mt-2" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
