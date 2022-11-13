import axios from "axios";

export const placeOrder = (order) => async (dispatch) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  console.log(order);
  try {
    const response = await axios.post("/api/orders/placeorder", { order });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED", payload: error });
    console.log(error);
  }
};

export const getAllOrders = (currentUser) => async (dispatch) => {
  dispatch({ type: "GET_ORDERS_REQUEST" });
  try {
    const response = await axios.post("/api/orders/getallorders", {
      currentUser,
    });
    console.log(response);
    dispatch({ type: "GET_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ORDERS_FAILED", payload: error });
  }
};

export const changeOrderStatus = (order) => async (dispatch) => {
  dispatch({ type: "CHANGE_STATUS_REQUEST" });
  console.log(order);
  try {
    await axios.patch("/api/orders/changestatus", { order });
    dispatch({ type: "CHANGE_STATUS_SUCCESS" });
    window.location.href = "/admin/orderlist";
  } catch (error) {
    dispatch({ type: "CHANGE_STATUS_FAILED", payload: error });
    console.log(error);
  }
};
