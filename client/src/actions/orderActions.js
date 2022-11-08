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
