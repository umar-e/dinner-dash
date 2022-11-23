const Order = require("../models/orderModel");
var ObjectId = require("mongodb").ObjectId;
const createOrder = async (order) => {
  const ids = order.cartItems?.map((item) => ObjectId(item));

  const newOrder = new Order({
    ...order,
    cartItems: ids,
    userId: ObjectId(order.userId),
  });
  await newOrder.save();
};

const findAllOrders = async (admin, currentUser) => {
  if (admin) {
    let res = await Order.find({})
      .populate("cartItems")
      .populate("user", "-password")
      .sort({ createdAt: -1 });
    return res;
  } else {
    let res = await Order.find({ user: currentUser._id })
      .populate("cartItems")
      .populate("user", "-password")
      .sort({
        createdAt: -1,
      });
    return res;
  }
};

const updateOrderStatus = async (id) => {
  let doc = await Order.findOne({ _id: id });
  let status;
  switch (doc.status) {
    case "ordered":
      status = "paid";
      break;
    case "paid":
      status = "completed";
      break;
    case "completed":
      status = "canceled";
      break;
    default:
      break;
  }
  doc.status = status;
  await doc.save();
};
module.exports = {
  createOrder,
  findAllOrders,
  updateOrderStatus,
};
