const express = require("express");
const {
  newOrder,
  getAllOrders,
  changeOrderStatus,
  getAllAdminOrders,
} = require("../controllers/orderController");
const authenticateRole = require("../middleware/authenticateRole");
const authenticateToken = require("../middleware/AuthenticateToken");
const router = express.Router();

router.post("/", authenticateToken, newOrder);
router.get("/", authenticateToken, getAllOrders);
router.patch("/:id", authenticateToken, authenticateRole, changeOrderStatus);
router.get("/admin", authenticateToken, authenticateRole, getAllAdminOrders);
module.exports = router;
