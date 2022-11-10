const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    varients: [],
    prices: [],
    category: [],
    image: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgpayOM1rZdWnQqPbXrXgCTkpScar0eRI9w6dPQS7PVR-oaUHZc3aevZbxUP7_YWjAbk&usqp=CAU",
    },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const itemModel = mongoose.model("items", itemSchema);
module.exports = itemModel;
