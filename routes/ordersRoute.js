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

router.get("/getorders", async (req, res) => {});

module.exports = router;
