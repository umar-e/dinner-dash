import { createItemsAPI, deleteItemsAPI, editItemsAPI, getItemsAPI, toggleItemStatusAPI } from "../api/itemsApi";

export const getAllItems = () => async (dispatch) => {
  dispatch({ type: "GET_ITEMS_REQUEST" });
  try {
    const response = await getItemsAPI();
    let categories = response.data.map((item) => {
      return [...item.category];
    });
    let uniqueCategories = [...new Set(categories.flat())];
    dispatch({
      type: "GET_ITEMS_SUCCESS",
      payload: { data: response.data, categories: uniqueCategories },
    });
  } catch (error) {
    dispatch({ type: "GET_ITEMS_FAILED", payload: error.response.data });
  }
};

export const newItem = (item) => async (dispatch) => {
  dispatch({ type: "NEW_ITEM_REQUEST" });
  try {
    await createItemsAPI(item)
    dispatch({ type: "NEW_ITEM_SUCCESS" });
  } catch (error) {
    dispatch({ type: "NEW_ITEM_FAILED", payload: error.response.data });
  }
};

export const deleteItem = (item_id) => async (dispatch) => {
  dispatch({ type: "DELETE_ITEM_REQUEST" });
  try {
    await deleteItemsAPI(item_id)
    dispatch({ type: "DELETE_ITEM_SUCCESS" });
  } catch (error) {
    dispatch({ type: "DELETE_ITEM_FAILED", payload: error.response.data });
  }
};

export const changeItemStatus = (item_id) => async (dispatch) => {
  dispatch({ type: "CHANGE_ITEM_STATUS_REQUEST" });
  try {
    await toggleItemStatusAPI(item_id)
    dispatch({ type: "CHANGE_ITEM_STATUS_SUCCESS" });
  } catch (error) {
    dispatch({ type: "CHANGE_ITEM_STATUS_FAILED", payload: error.response.data });
  }
};

export const editItem = (item) => async (dispatch) => {
  dispatch({ type: "EDIT_ITEM_REQUEST" });
  try {
    await editItemsAPI(item)
    dispatch({ type: "EDIT_ITEM_SUCCESS" });
  } catch (error) {
    dispatch({ type: "EDIT_ITEM_FAILED", payload: error.response.data });
  }
};
