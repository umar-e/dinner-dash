import { loginUserAPI, registerUserAPI } from "../api/baseAPI";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    await registerUserAPI(user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error.response.data });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await loginUserAPI(user);
    localStorage.setItem("currentUser", JSON.stringify(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    // window.location.href = "/"
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error.response.data });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
  window.location.href = '/'
};
