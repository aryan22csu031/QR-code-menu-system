const express = require("express");
const { getOrders, createOrder } = require("../controllers/orderController");
const router = express.Router();

router.get("/orders", getOrders);
router.post("/order/new", createOrder);

module.exports = router;
