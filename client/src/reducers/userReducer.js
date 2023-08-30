import { getLocalStorageItem } from "../utils/localStorageUtils";

const currentUser = getLocalStorageItem("currentUser")
  ? getLocalStorageItem("currentUser")
  : null;

const userReducer = (state = { currentUser }, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        // ...state,
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "USER_LOGIN_REQUEST":
      return {
        // ...state,
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "USER_LOGIN_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
