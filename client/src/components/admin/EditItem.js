import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { editItem } from "../../actions/itemActions";

export default function EditItem() {
  const location = useLocation();
  const { item } = location.state;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category.toString());
  const [description, setDescription] = useState(item.description);
  const [image, setImage] = useState(item.image);

  function submitHandler(e) {
    e.preventDefault();
    const newitem = {
      _id: item._id,
      name,
      price: Number(price),
      category: category.trim().split(","),
      description,
      image,
    };
    dispatch(editItem(newitem));
    window.location.href = "/admin/itemlist";
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      EditItem
      <div>
        <div className="container text-start">
          <form onSubmit={submitHandler}>
            <div className="mb-1 col-md-6 ">
              <label htmlFor="itemName" className="form-label">
                Name
              </label>
              <input
                required
                value={name}
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
                value={price}
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
                value={category}
                type="text"
                className="form-control"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              />
              <div className="form-text">
                Separate categories with comma. " , "
              </div>
            </div>
            <div className="mb-1 col-md-6">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={description}
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
                value={image}
                className="form-control"
                id="image"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary mb-5 col-md-4">
              Submit
            </button>
            <div className="w-100 text-start">
              <Link to={"/admin/itemlist"} className="btn btn-danger">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
