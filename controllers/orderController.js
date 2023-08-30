const {
  createOrder,
  findAllOrders,
  updateOrderStatus,
} = require("../services/orderServices");

const newOrder = async (req, res) => {
  const { order } = req.body;
  try {
    await createOrder(order);
    res.send("Order created successfully");
  } catch (error) {
    res.status(500).json({ message: "Could not create order" });
  }
};
const getAllOrders = async (req, res) => {
  const { user } = req.user;
  try {
    const orders = await findAllOrders(false, user);
    res.send(orders);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
const getAllAdminOrders = async (req, res) => {
  const { user } = req.user;
  try {
    const orders = await findAllOrders(user.isAdmin, user);
    res.send(orders);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
const changeOrderStatus = async (req, res) => {
  const order_id = req.params.id;
  try {
    await updateOrderStatus(order_id);
    res.send("Order Updated Successfully");
  } catch (error) {
    res.status(500).json({ message: "Could not change order status" });
  }
};
module.exports = {
  newOrder,
  getAllOrders,
  changeOrderStatus,
  getAllAdminOrders,
};
