import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { newItem } from "../../actions/itemActions";
export default function NewItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    const item = {
      name,
      price: Number(price),
      category: category.trim().split(","),
      description,
      image,
    };
    dispatch(newItem(item));
  }
  return (
    <div className="container text-start">
      <form onSubmit={submitHandler}>
        <div className="mb-1 col-md-6 ">
          <label htmlFor="itemName" className="form-label">
            Name
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="itemName"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-1 col-md-6">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-1 col-md-6">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <div className="form-text">Separate categories with comma. " , "</div>
        </div>
        <div className="mb-1 col-md-6">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3 col-md-6 text-start">
          <label className="form-label" htmlFor="image">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-5 col-md-4">
          Submit
        </button>
        <div className="w-100 text-start">
          <Link to={"/admin"} className="btn btn-danger">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
