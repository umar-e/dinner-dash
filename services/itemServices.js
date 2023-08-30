const Item = require("../models/itemModel");

const findAllItems = async () => {
  return Item.find();
};
const createItem = async (item) => {
  let newItem = new Item(item);
  await newItem.save();
};
const deleteOneItem = async (item_id) => {
  await Item.deleteOne({ _id: item_id });
};
const getOneItem = async (id) => {
  return Item.findOne({ _id: id });
};
const changeStatus = async (item_id) => {
  let doc = await Item.findOne({ _id: item_id });
  doc.isRetired = !doc.isRetired;
  await doc.save();
};
const updateItem = async (item) => {
  await Item.replaceOne({ _id: item._id }, { ...item });
};

module.exports = {
  findAllItems,
  createItem,
  deleteOneItem,
  getOneItem,
  changeStatus,
  updateItem,
};
