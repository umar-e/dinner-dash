const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: [0, "price can't be lower than 0"],
    },
    price: { type: Number, required: true },
    category: { type: Array, required: true },
    image: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgpayOM1rZdWnQqPbXrXgCTkpScar0eRI9w6dPQS7PVR-oaUHZc3aevZbxUP7_YWjAbk&usqp=CAU",
    },
    description: { type: String, required: true },
    isRetired: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);
const itemModel = mongoose.model("items", itemSchema);
module.exports = itemModel;
