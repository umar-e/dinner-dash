import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeItemStatus,
  deleteItem,
  getAllItems,
} from "../../actions/itemActions";

import Error from "../Error";
import Loading from "../Loading";

export default function ItemList() {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { items, error, loading } = useSelector(
    (state) => state.getAllItemsReducer
  );

  useEffect(() => {
    if (!currentUser || !currentUser.isAdmin) {
      window.location.href = "/";
    }
    dispatch(getAllItems());
  }, []);

  function deleteHandler(item) {
    dispatch(deleteItem(item));
  }

  function retireHandler(item) {
    dispatch(changeItemStatus(item));
  }

  return (
    <div className="justify-content-start">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error="Something went wrong" />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price </th>
              <th>Categories</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>
                  <img
                    src={item.image}
                    style={{ height: "60px", width: "60px" }}
                    alt="img"
                  />
                </td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  {item.category.map((cat) => {
                    return cat + " ";
                  })}
                </td>
                <td>{item.isRetired ? "true" : "false"}</td>
                <td>
                  <i
                    onClick={() => retireHandler(item)}
                    className={
                      item.isRetired
                        ? "fa-solid fa-toggle-off"
                        : "fa-solid fa-toggle-on"
                    }
                  ></i>
                  &nbsp; &nbsp;
                  <Link
                    className="fa fa-pen-to-square"
                    to={`/admin/edititem/${item._id}`}
                    state={{ item }}
                  ></Link>
                  &nbsp;
                  <i
                    onClick={() => deleteHandler(item)}
                    className="fa fa-trash"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <div className="w-100 text-start">
        <Link to={"/admin"} className="btn btn-danger mx-5">
          Back
        </Link>
      </div>
    </div>
  );
}
