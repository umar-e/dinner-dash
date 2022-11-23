import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeItemStatus, deleteItem, getAllItems } from "../../actions/itemActions";

export default function AdminItem({item}) {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(item.isRetired)
  function deleteHandler(item_id) {
    dispatch(deleteItem(item_id));
    dispatch(getAllItems());
  }

  function retireHandler(item_id) {
    setStatus(!status)
    dispatch(changeItemStatus(item_id));
  }

  return (

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
        <td>{status ? "true" : "false"}</td>
        <td>
          <i
            onClick={() => retireHandler(item._id)}
            className={
              status
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
            onClick={() => deleteHandler(item._id)}
            className="fa fa-trash"
          ></i>
        </td>
      </tr>

  );
}
