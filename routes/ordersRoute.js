const { response } = require("express");
const express = require("express");
const Order = require("../models/orderModel");
const router = express.Router();

router.post("/placeorder", async (req, res) => {
  const { order } = req.body;
  const newOrder = new Order({ ...order });
  try {
    await newOrder.save();
    res.send("Order created successfully");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/getallorders", async (req, res) => {
  const { currentUser, admin } = req.body;
  let orders;
  try {
    if (admin) {
      orders = await Order.find({}).sort({ createdAt: -1 });
    } else {
      orders = await Order.find({ userId: currentUser._id }).sort({
        createdAt: -1,
      });
    }
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.patch("/changestatus", async (req, res) => {
  const { order } = req.body;
  let status;
  switch (order.status) {
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

  try {
    let doc = await Order.findOne({ _id: order._id });
    doc.status = status;
    await doc.save();
    res.send("Order Updated Successfully");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
