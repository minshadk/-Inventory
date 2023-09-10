const express = require("express");
const router = express.Router();
const Item = require("../models/item");

// Create a new item
router.post("/", async (req, res) => {
  try {
    const { name, category } = req.body;
    const item = new Item({ name, category });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Retrieve all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find().populate({
      path: "category",
      select: "name",
    });

    const itemsWithCategoryName = items.map((item) => ({
      _id: item._id,
      name: item.name,
      category: item.category.name,
    }));

    res.json(itemsWithCategoryName);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Retrieve an single item
router.get("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await Item.findById(itemId).populate({
      path: "category",
      select: "name",
    });

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an item
router.put("/:id", async (req, res) => {
  try {
    const { name, category } = req.body;
    const { id } = req.params;

    let updatedData = { name, category };
    const updatedItem = await Item.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a item
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    await Item.findByIdAndRemove(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
