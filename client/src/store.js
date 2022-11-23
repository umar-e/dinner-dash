import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import itemReducer from "./reducers/itemReducer";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
import orderReducer from "./reducers/orderReducer";
const finalReducer = combineReducers({
  cartReducer,
  itemReducer,
  userReducer,
  orderReducer,
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
  userReducer: {
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
