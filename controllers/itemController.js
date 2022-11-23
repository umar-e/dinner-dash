const {
  findAllItems,
  createItem,
  deleteOneItem,
  getOneItem,
  changeStatus,
  updateItem,
} = require("../services/itemServices");

const getAllItems = async (req, res) => {
  try {
    const items = await findAllItems();
    res.send(items);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const newItem = async (req, res) => {
  let item = req.body;
  try {
    if (item.image === undefined || item.image.trim() === "") {
      item = {
        ...item,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgpayOM1rZdWnQqPbXrXgCTkpScar0eRI9w6dPQS7PVR-oaUHZc3aevZbxUP7_YWjAbk&usqp=CAU",
      };
    }
    await createItem(item);
    res.status(201).json({ message: "Item created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Could not create item" });
  }
};

const deleteItem = async (req, res) => {
  const item_id = req.params.id;
  try {
    await deleteOneItem(item_id);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
const getItem = async (req, res) => {
  try {
    const item = await getOneItem(req.params.id);
    res.send(item);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const changeItemStatus = async (req, res) => {
  const item_id = req.params.id;
  try {
    changeStatus(item_id);
    res.send("Item Updated Successfully");
  } catch (error) {
    res.status(500).json({ message: "Could not change item status" });
  }
};

const editItem = async (req, res) => {
  let { item } = req.body;
  if (item.image === undefined || item.image.trim() === "") {
    item = {
      ...item,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgpayOM1rZdWnQqPbXrXgCTkpScar0eRI9w6dPQS7PVR-oaUHZc3aevZbxUP7_YWjAbk&usqp=CAU",
    };
  }
  try {
    await updateItem(item);
    res.send("Item edited successfully");
  } catch (error) {
    res.status(500).json({ message: "Could not update item" });
  }
};
module.exports = {
  getAllItems,
  deleteItem,
  newItem,
  getItem,
  changeItemStatus,
  editItem,
};
