export const addToCart = (item, quantity, varient) => (dispatch, getState) => {
  let cartItem = {
    name: item.name,
    _id: item._id,
    image: item.image,
    prices: item.prices,
    price: item.prices[0][varient] * quantity,
    varient,
    quantity: Number(quantity),
  };
if(cartItem.quantity < 1){
  alert('items cannot be less than one')
}
else{
  dispatch({ type: "ADD_TO_CART", payload: cartItem });
}
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: item });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
