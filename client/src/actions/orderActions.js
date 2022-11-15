import axios from "axios";

export const placeOrder = (order) => async (dispatch) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  try {
    await axios.post("/api/orders/placeorder", { order });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED", payload: error });
  }
};

export const getAllOrders = (currentUser, admin) => async (dispatch) => {
  dispatch({ type: "GET_ORDERS_REQUEST" });
  try {
    const response = await axios.post("/api/orders/getallorders", {
      currentUser,
      admin,
    });
    dispatch({ type: "GET_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ORDERS_FAILED", payload: error });
  }
};

export const changeOrderStatus = (order) => async (dispatch) => {
  dispatch({ type: "CHANGE_STATUS_REQUEST" });
  try {
    await axios.patch("/api/orders/changestatus", { order });
    dispatch({ type: "CHANGE_STATUS_SUCCESS" });
    window.location.href = "/admin/orderlist";
  } catch (error) {
    dispatch({ type: "CHANGE_STATUS_FAILED", payload: error });
  }
};
