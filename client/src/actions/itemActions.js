import axios from "axios";
export const getAllItems = () => async (dispatch) => {
  dispatch({ type: "GET_ITEMS_REQUEST" });
  try {
    const response = await axios.get("/api/items/getallitems");
    console.log(response);
    dispatch({ type: "GET_ITEMS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ITEMS_FAILED", payload: error });
  }
};

export const newItem = (item) => async (dispatch) => {
  dispatch({ type: "NEW_ITEM_REQUEST" });
  console.log(item);
  try {
    const response = await axios.post("/api/items/newitem", { item });
    dispatch({ type: "NEW_ITEM_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "NEW_ITEM_FAILED", payload: error });
    console.log(error);
  }
};

export const deleteItem = (item) => async (dispatch) => {
  dispatch({ type: "DELETE_ITEM_REQUEST" });
  console.log(item);
  try {
    await axios.post("/api/items/deleteitem", { item });
    dispatch({ type: "DELETE_ITEM_SUCCESS" });
    window.location.href = "/admin/itemlist";
  } catch (error) {
    dispatch({ type: "DELETE_ITEM_FAILED", payload: error });
    console.log(error);
  }
};

export const getItemById = (itemId) => async (dispatch) => {
  dispatch({ type: "GET_ITEM_BY_ID_REQUEST" });
  try {
    const response = await axios.get(`/api/items/getitem?id=${itemId}`);
    dispatch({ type: "GET_ITEM_BY_ID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ITEM_BY_ID_FAILED", payload: error });
  }
};

export const changeItemStatus = (item) => async (dispatch) => {
  dispatch({ type: "CHANGE_ITEM_STATUS_REQUEST" });
  console.log(item);
  try {
    await axios.patch("/api/items/changestatus", { item });
    dispatch({ type: "CHANGE_ITEM_STATUS_SUCCESS" });
    window.location.href = "/admin/itemlist";
  } catch (error) {
    dispatch({ type: "CHANGE_ITEM_STATUS_FAILED", payload: error });
    console.log(error);
  }
};

export const editItem = (item) => async (dispatch) => {
  dispatch({ type: "EDIT_ITEM_REQUEST" });
  try {
    await axios.post("/api/items/edititem", { item });
    dispatch({ type: "EDIT_ITEM_SUCCESS" });
  } catch (error) {
    dispatch({ type: "EDIT_ITEM_FAILED", payload: error });
    console.log(error);
  }
};
