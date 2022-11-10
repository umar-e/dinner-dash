import React, { useState } from "react";

import { Modal } from "react-bootstrap";
export default function OrderItem({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <p>
        <b onClick={handleShow}>{item.name}</b>{" "}
      </p>
      <p>
        {item.varient} * {item.quantity} = {item.price}
      </p>
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
