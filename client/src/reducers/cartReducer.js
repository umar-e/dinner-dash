import { getLocalStorageItem } from "../utils/localStorageUtils";

const cartItems = getLocalStorageItem("cartItems")
  ? getLocalStorageItem("cartItems")
  : [];

const cartReducer = (state = { cartItems: cartItems }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (exists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
