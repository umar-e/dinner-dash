const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("connected", () => console.log("db connection established"));
db.on("error", () => console.log("db connection error"));

module.exports = mongoose;
