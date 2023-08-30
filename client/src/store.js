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

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
