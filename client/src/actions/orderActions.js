import { createOrderAPI, getAdminOrdersAPI, getOrdersAPI, toggleOrderStatusAPI } from "../api/ordersApi";

export const placeOrder = (order) => async (dispatch) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  try {
    await createOrderAPI(order)
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED", payload: error.response.data });
  }
};

export const getAllOrders = (admin) => async (dispatch) => {
  dispatch({ type: "GET_ORDERS_REQUEST" });
  try {
    if (admin) {
      const response = await getAdminOrdersAPI()
      dispatch({ type: "GET_ORDERS_SUCCESS", payload: response.data });
    } else {
      const response = await getOrdersAPI()
      dispatch({ type: "GET_ORDERS_SUCCESS", payload: response.data });
    }
  } catch (error) {
    dispatch({ type: "GET_ORDERS_FAILED", payload: error.response.data });
  }
};

export const changeOrderStatus = (order_id) => async (dispatch) => {
  dispatch({ type: "CHANGE_STATUS_REQUEST" });
  try {
    await toggleOrderStatusAPI(order_id)
    dispatch({ type: "CHANGE_STATUS_SUCCESS" });
  } catch (error) {
    dispatch({ type: "CHANGE_STATUS_FAILED", payload: error.response.data });
  }
};
