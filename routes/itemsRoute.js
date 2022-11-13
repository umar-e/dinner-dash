const express = require("express");
const router = express.Router();

const Item = require("../models/itemModel");

router.get("/getallitems", async (req, res) => {
  try {
    const items = await Item.find({});
    res.send(items);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
router.post("/newitem", async (req, res) => {
  let { item } = req.body;
  if (item.image.trim() === "" || item.image === undefined) {
    item = {
      ...item,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgpayOM1rZdWnQqPbXrXgCTkpScar0eRI9w6dPQS7PVR-oaUHZc3aevZbxUP7_YWjAbk&usqp=CAU",
    };
  }
  const newItem = new Item({ ...item });
  try {
    newItem.save();
    res.send("Item created successfully");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/deleteitem", async (req, res) => {
  const { item } = req.body;
  try {
    await Item.deleteOne({ _id: item._id });
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.get("/getitem", async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.query.id });
    res.send(item);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
router.patch("/changestatus", async (req, res) => {
  const { item } = req.body;
  let status = !item.isRetired;
  try {
    let doc = await Item.findOne({ _id: item._id });
    doc.isRetired = status;
    doc.save();
    res.send("Item Updated Successfully");
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error });
  }
});

router.post("/edititem", async (req, res) => {
  let { item } = req.body;
  if (item.image.trim() === "" || item.image === undefined) {
    item = {
      ...item,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgpayOM1rZdWnQqPbXrXgCTkpScar0eRI9w6dPQS7PVR-oaUHZc3aevZbxUP7_YWjAbk&usqp=CAU",
    };
  }
  try {
    await Item.replaceOne(item._id, { ...item });
    res.send("Item created successfully");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
