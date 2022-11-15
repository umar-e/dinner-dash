import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import {
  getAllItemsReducer,
  newItemReducer,
  deleteItemReducer,
  changeItemStatusReducer,
  editItemReducer,
} from "./reducers/itemReducer";
import { cartReducer } from "./reducers/cartReducer";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";
import {
  getAllOrdersReducer,
  placeOrderReducer,
  changeOrderStatusReducer,
} from "./reducers/orderReducer";

const finalReducer = combineReducers({
  getAllItemsReducer,
  cartReducer,
  registerUserReducer,
  loginUserReducer,
  placeOrderReducer,
  getAllOrdersReducer,
  newItemReducer,
  changeOrderStatusReducer,
  deleteItemReducer,
  changeItemStatusReducer,
  editItemReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems,
  },
  loginUserReducer: {
    currentUser,
  },
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
