import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../actions/itemActions";
import Error from "../components/Error";
import Item from "../components/Item";
import Loading from "../components/Loading";
export default function HomePage() {
  const dispatch = useDispatch();

  const { items, error, loading } = useSelector(
    (state) => state.getAllItemsReducer
  );

  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
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
