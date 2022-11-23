const express = require("express");
const {
  newOrder,
  getAllOrders,
  changeOrderStatus,
  getAllAdminOrders,
} = require("../controllers/orderController");
const authenticateRole = require("../utils/authenticateRole");
const authenticateToken = require("../utils/AuthenticateToken");
const router = express.Router();

router.post("/", authenticateToken, newOrder);
router.get("/", authenticateToken, getAllOrders);
router.patch("/:id", authenticateToken, authenticateRole, changeOrderStatus);
router.get("/admin", authenticateToken, authenticateRole, getAllAdminOrders);
module.exports = router;
