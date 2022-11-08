import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../actions/itemActions";
import Item from "../components/Item";
export default function HomePage() {
  const dispatch = useDispatch();

  const itemsState = useSelector((state) => state.getAllItemsReducer);

  const { items, error, loading } = itemsState;

  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>something went wrong</h1>
        ) : (
          items.map((item) => {
            return (
              <div className="col-md-4 p-3" key={item._id}>
                <div>
                  <Item item={item} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
