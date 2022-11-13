import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  changeItemStatus,
  deleteItem,
  getAllItems,
} from "../../actions/itemActions";
import Error from "../Error";
import Loading from "../Loading";

export default function ItemList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, error, loading } = useSelector(
    (state) => state.getAllItemsReducer
  );

  useEffect(() => {
    dispatch(getAllItems());
  }, []);
  function deleteHandler(item) {
    dispatch(deleteItem(item));
  }
  function editHandler(item) {
    navigate(`/admin/edititem/${item._id}`);
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
                  <i
                    className="fa fa-pen-to-square"
                    onClick={() => editHandler(item)}
                  ></i>
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
