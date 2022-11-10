const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    userId: { type: String, required: true },
    cartItems: { type: Array, required: true },
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
