const express = require("express");
const Item = require("./models/itemModel.js");
const app = express();
const db = require("./db.js");
app.use(express.json());
// const itemsRoute = require("./routes/itemsRoute.js");
const userRoute = require('./routes/userRoute')
app.use('/api/users/', userRoute);

app.get("/", (req, res) => {
  res.send("Server working...");
});
// app.use("api/items/", itemsRoute);

app.get("/api/items/getallitems", async (req, res) => {
  try {
    const items = await Item.find({});
    res.send(items);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => "Server Running on port " + port);
