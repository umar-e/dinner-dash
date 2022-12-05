import axios from "axios";

export const loginUserAPI = async (user) => {
  return await axios.post("/users/login", user);
};
export const registerUserAPI = async (user) => {
  await axios.post("/users/register", user);
};
