const express = require("express");
const Order = require("../models/orderModel");
const router = express.Router();

router.post("/placeorder", async (req, res) => {
  const { order } = req.body;
  const newOrder = new Order({ ...order });
  try {
    newOrder.save();
    res.send("Order created successfully");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/getallorders", async (req, res) => {
  const { currentUser } = req.body;
  let orders;
  try {
    if (currentUser.isAdmin) {
      orders = await Order.find({});
    } else {
      orders = await Order.find({});
    }
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
