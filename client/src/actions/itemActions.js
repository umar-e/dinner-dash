import axios from "axios";
export const getAllItems = () => async (dispatch) => {
  dispatch({ type: "GET_ITEMS_REQUEST" });
  try {
    const response = await axios.get("/api/items/getallitems");
    let categories = response.data.map((item) => {
      return [...item.category];
    });
    let uniqueCategories = [...new Set(categories.flat())];
    dispatch({
      type: "GET_ITEMS_SUCCESS",
      payload: { data: response.data, categories: uniqueCategories },
    });
  } catch (error) {
    dispatch({ type: "GET_ITEMS_FAILED", payload: error });
  }
};

export const newItem = (item) => async (dispatch) => {
  dispatch({ type: "NEW_ITEM_REQUEST" });
  try {
    await axios.post("/api/items/newitem", { item });
    dispatch({ type: "NEW_ITEM_SUCCESS" });
  } catch (error) {
    dispatch({ type: "NEW_ITEM_FAILED", payload: error });
  }
};

export const deleteItem = (item) => async (dispatch) => {
  dispatch({ type: "DELETE_ITEM_REQUEST" });
  try {
    await axios.post("/api/items/deleteitem", { item });
    dispatch({ type: "DELETE_ITEM_SUCCESS" });
    window.location.href = "/admin/itemlist";
  } catch (error) {
    dispatch({ type: "DELETE_ITEM_FAILED", payload: error });
  }
};

export const changeItemStatus = (item) => async (dispatch) => {
  dispatch({ type: "CHANGE_ITEM_STATUS_REQUEST" });
  try {
    await axios.patch("/api/items/changestatus", { item });
    dispatch({ type: "CHANGE_ITEM_STATUS_SUCCESS" });
    window.location.href = "/admin/itemlist";
  } catch (error) {
    dispatch({ type: "CHANGE_ITEM_STATUS_FAILED", payload: error });
  }
};

export const editItem = (item) => async (dispatch) => {
  dispatch({ type: "EDIT_ITEM_REQUEST" });
  try {
    await axios.post("/api/items/edititem", { item });
    dispatch({ type: "EDIT_ITEM_SUCCESS" });
  } catch (error) {
    dispatch({ type: "EDIT_ITEM_FAILED", payload: error });
  }
};
