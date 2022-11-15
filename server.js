const express = require("express");
const Item = require("./models/itemModel.js");
const db = require("./db.js");
const app = express();
const itemsRoute = require("./routes/itemsRoute.js");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server working...");
});
app.use("/api/users/", userRoute);
app.use("/api/items/", itemsRoute);
app.use("/api/orders/", ordersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => "Server Running on port " + port);
