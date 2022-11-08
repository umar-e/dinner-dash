const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://umar_ejaz:rNWFLI4QWEI5ybq3@cluster0.v5yxa95.mongodb.net/dinner-dash";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("connected", () => console.log("db connection established"));
db.on("error", () => console.log("db connection error"));

module.exports = mongoose;
