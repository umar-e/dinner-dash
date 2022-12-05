import instance from "./baseApi";

export const getItemsAPI = async () => {
  return await instance.get("/items/");
};
export const createItemsAPI = async (item) => {
  await instance.post("/items/", item);
};
export const deleteItemsAPI = async (item_id) => {
  await instance.delete(`/items/${item_id}`);
};
export const toggleItemStatusAPI = async (item_id) => {
  await instance.patch(`/items/${item_id}`);
};
export const editItemsAPI = async (item) => {
  await instance.put(`/items/${item._id}`, { item });
};
