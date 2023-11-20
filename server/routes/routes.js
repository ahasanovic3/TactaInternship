const express = require("express");
const shopper = require("../models/shoppers");
const shopperItem = require("../models/shoppingItem");
const connection = require("../models/connections");

const router = express.Router();

router.get("/getAllShoppers", async (req, res) => {
  try {
    const data = await shopper.find();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getAllItemsThatShopperDoesntHave/:shopperId", async (req, res) => {
  try {
    const data = await connection.findOne({
      shopperId: req.params.shopperId,
    });
    
    const items = await shopperItem.find(
      {
        _id: {$nin: data.shoppingItemId}
      }
    )
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




router.get("/getAllItemsForShopper/:shopperId", async (req, res) => {
  try {
    const data = await connection.findOne({
      shopperId: req.params.shopperId,
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/createConnection", async (req, res) => {
  const { shopperId, itemId } = req.body;

  try {
    if (!shopperId || !itemId) {
      return res
        .status(400)
        .json({ message: "Both shopperId and itemId are required." });
    }

    const data = await shopper.findById(shopperId);
    const item = await shopperItem.findById(itemId);

    if (!data || !item) {
      return res.status(404).json({ message: "Shopper or item not found." });
    }

   
    const connect = new connection({
      shopperId: shopperId,
      shoppingItemId: itemId,
    });

    
    await connect.save();

    res.status(201).json({ message: "Connection created successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
