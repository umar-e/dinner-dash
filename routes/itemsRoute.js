const express = require("express");
const {
  getAllItems,
  newItem,
  deleteItem,
  getItem,
  changeItemStatus,
  editItem,
} = require("../controllers/itemController");
const authenticateRole = require("../utils/authenticateRole");
const authenticateToken = require("../utils/AuthenticateToken");
const router = express.Router();

router.get("/", getAllItems);
router.post("/", authenticateToken, authenticateRole, newItem);
router.delete("/:id", authenticateToken, authenticateRole, deleteItem);
router.get("/:id", authenticateToken, getItem);
router.patch("/:id", authenticateToken, authenticateRole, changeItemStatus);
router.put("/:id", authenticateToken, authenticateRole, editItem);

module.exports = router;
