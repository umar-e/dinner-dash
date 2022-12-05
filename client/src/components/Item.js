import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addToCart } from "../actions/cartActions";

export default function Item({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(addToCart(item, quantity));
  }

  return (
    <div
      data-testid="item1"
      className="m-5 shadow-lg p-3 mb-5 bg-white rounded "
    >
      <div onClick={handleShow}>
        <h3>{item.name}</h3>
        <img
          src={item.image}
          className="img-fluid"
          alt=""
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <h4 className="mt-1">Price: {item.price * quantity} Rs.</h4>
        </div>

        <div className="w-100 m-1">
          <button className="btn btn-danger" onClick={addToCartHandler}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={item.image}
            alt=""
            className="img-fluid"
            style={{ height: "300px" }}
          />
          <p>{item.description}</p>
        </Modal.Body>

        <Modal.Footer>
          {/* <button className='btn btn-danger' onClick={handleClose} >Close</button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
