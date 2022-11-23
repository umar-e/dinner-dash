const express = require("express");
require("dotenv").config();
const path = require("path");
const db = require("./db.js");
const app = express();
const itemsRoute = require("./routes/itemsRoute.js");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use(express.json());

app.use("/api/users/", userRoute);
app.use("/api/items/", itemsRoute);
app.use("/api/orders/", ordersRoute);

db.on("connected", () => {
  console.log("db connection established");

  const port = process.env.PORT || 5000;
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("Server working...");
    });
  }

  app.listen(port, () => "Server Running on port " + port);
});
db.on("error", () => console.log("db connection error"));
