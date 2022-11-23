import axios from "axios";
const token = JSON.parse(localStorage.getItem("token"));

const instance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getItemsAPI = async () => {
  return await instance.get("/items/");
};
export const createItemsAPI = async (item) => {
  return await instance.post("/items/", item);
};
export const deleteItemsAPI = async (item_id) => {
  return await instance.delete(`/items/${item_id}`);
};
export const toggleItemStatusAPI = async (item_id) => {
  return await instance.patch(`/items/${item_id}`);
};
export const editItemsAPI = async (item) => {
  return await instance.put(`/items/${item._id}`, { item });
};
export const loginUserAPI = async (user) => {
  return await axios.post("/users/login", user);
};
export const registerUserAPI = async (user) => {
  return await axios.post("/users/register", user);
};
export const createOrderAPI = async (order) => {
  return await instance.post("/orders/", { order });
};
export const getOrdersAPI = async () => {
  return await instance.get("/orders/");
};
export const getAdminOrdersAPI = async () => {
  return await instance.get("/orders/admin");
};
export const toggleOrderStatusAPI = async (order_id) => {
  return await instance.patch(`/orders/${order_id}`);
};
