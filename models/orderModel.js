const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    cartItems:
      // { type: Array, required: true }
      [{ type: mongoose.Schema.Types.ObjectId, ref: "items", required: true }],
    itemQuantity: { type: Array, required: true },
    subtotal: { type: Number, required: true },
    address: { type: String, required: true },
    cardNumber: { type: Number, required: true },
    cvv: { type: Number, required: true },
    status: { type: String, default: "ordered" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", orderSchema);
