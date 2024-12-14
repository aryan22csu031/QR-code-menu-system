const MenuItem = require("../models/MenuItem");

exports.getMenu = async (req, res) => {
  try {
    const menu = await MenuItem.find();
    res.status(200).json({
      status: "success",
      data: menu,
    });
  } catch (err) {
    res.status(500).json({
      success: "false",
      message: "Error fetching menu items",
      error: err.message || err,
    });
  }
};

exports.addMenuItem = async (req, res) => {
  const { name, description, halfServingPrice, fullServingPrice, category } =
    req.body;
  const newItem = new MenuItem({
    name,
    description,
    halfServingPrice,
    fullServingPrice,
    category,
  });
  try {
    await newItem.save();
    res.status(201).json({
      status: "success",
      message: "item added successfully",
      item: newItem,
    });
  } catch (err) {
    res
      .status(500)
      .json({
        success: "false",
        message: "failed to add menu item",
        message: err.message || err,
      });
  }
};
