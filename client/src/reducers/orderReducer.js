const orderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "PLACE_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PLACE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "PLACE_ORDER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_ORDERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case "GET_ORDERS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CHANGE_STATUS_REQUEST":
      return {
       ...state,
        loading: true,
      };
    case "CHANGE_STATUS_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "CHANGE_STATUS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default orderReducer;
