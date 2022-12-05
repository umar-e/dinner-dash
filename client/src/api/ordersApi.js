// const { default: instance } = require("./baseAPI");

import instance from "./baseApi";

export const createOrderAPI = async (order) => {
  await instance.post("/orders/", { order });
};
export const getOrdersAPI = async () => {
  return await instance.get("/orders/");
};
export const getAdminOrdersAPI = async () => {
  return await instance.get("/orders/admin");
};
export const toggleOrderStatusAPI = async (order_id) => {
  await instance.patch(`/orders/${order_id}`);
};
