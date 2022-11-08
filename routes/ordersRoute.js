const express = require("express");
const router = express.Router();

router.post("/placeorder", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "order placed" });
});
module.exports = router;
