const Order = require("../models/Order");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      success: true,
      message: "orders fetched successfully",
      data: orders,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching orders",
      message: err.message,
    });
  }
};

exports.createOrder = async (req, res) => {
  const { CustomerName, items, totalPrice, Date } = req.body;
  const newOrder = new Order({ CustomerName, items, totalPrice, Date });
  try {
    await newOrder.save();
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: newOrder,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error creating order",
      message: err.message,
    });
  }
};
