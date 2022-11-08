const express = require("express");
const Item = require("./models/itemModel.js");
const app = express();
const db = require("./db.js");
app.use(express.json());
const itemsRoute = require("./routes/itemsRoute.js");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);
app.get("/", (req, res) => {
  res.send("Server working...");
});
app.use("/api/items/", itemsRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => "Server Running on port " + port);
