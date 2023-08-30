import { setLocalStorageItem } from "../utils/localStorageUtils";

export const addToCart = (item, quantity) => (dispatch, getState) => {
  let cartItem = {
    name: item.name,
    _id: item._id,
    image: item.image,
    price: item.price,
    quantity: Number(quantity),
    description: item.description,
  };
  if (cartItem.quantity < 1) {
    alert("items cannot be less than one");
  } else {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  }
  const cartItems = getState().cartReducer.cartItems;
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  setLocalStorageItem("cartItems", cartItems)
};

export const deleteFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: item });
  const cartItems = getState().cartReducer.cartItems;
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  setLocalStorageItem("cartItems", cartItems)
};
