import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../actions/itemActions";

import Error from "../components/Error";
import Item from "../components/Item";
import Loading from "../components/Loading";

export default function Home() {
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();

  const { categories, items, error, loading } = useSelector(
    (state) => state.itemReducer
  );

  let categoryItems =
    category === "all"
      ? items
      : items?.filter((order) => order.category.includes(category));

  useEffect(() => {
    if (!items || items.length === 0) {
      dispatch(getAllItems());
    }
  }, []);

  return (
    <div data-testid="homepage" className="row justify-content-center">
      <div className="row justify-content-center">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="form-select w-25"
        >
          <option value="all">All</option>
          {categories &&
            categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
        </select>
      </div>

      <div className="row">
        {loading && <Loading />}
        {error && <Error error={ error.message? error.message: "Something went wrong"} />}
        {categoryItems &&
          categoryItems.map((item) => {
            return (
              !item.isRetired && (
                <div className="col-md-4 p-3" key={item._id}>
                  <div>
                    <Item item={item} />
                  </div>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
}
