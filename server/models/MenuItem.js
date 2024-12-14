const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  halfServingPrice: {
    type: Number,
  },
  fullServingPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["breakfast", "lunch", "dinner", "drinks", "desserts"],
    required: true,
  },
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
