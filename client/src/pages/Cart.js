import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, deleteFromCart } from "../actions/cartActions";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cartReducer);

  let subtotal = cartItems.reduce(
    (x, item) => x + item.price * item.quantity,
    0
  );
  const { currentUser } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleCheckout() {
    if (currentUser) {
      navigate("/checkout");
    } else {
      return alert("login to checkout");
    }
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>My Cart</h1>

          {cartItems &&
            cartItems.map((item) => {
              return (
                <div className="flex-container">
                  <div className="text-start m-1 w-100">
                    <h5>{item.name}</h5>
                    <h5>
                      Price: {item.quantity} * {item.price} ={" "}
                      {item.price * item.quantity}
                    </h5>
                    <h5 style={{ display: "inline" }}>Quantity: </h5>
                    <i
                      className="fa fa-plus"
                      onClick={() => {
                        dispatch(addToCart(item, item.quantity + 1));
                      }}
                    ></i>
                    <b>{item.quantity}</b>
                    <i
                      className="fa fa-minus"
                      onClick={() => {
                        dispatch(addToCart(item, item.quantity - 1));
                      }}
                    ></i>
                    <hr />
                  </div>

                  <div className="w-100">
                    <img
                      src={item.image}
                      style={{ height: "80px", width: "80px" }}
                      alt=""
                    />
                  </div>

                  <div className="w-100 mt-4">
                    <i
                      className="fa fa-trash"
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col-md-4 text-end">
          <h1>Sub Total: {subtotal} /-</h1>
          <button className="btn btn-danger" onClick={handleCheckout}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
