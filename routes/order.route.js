const express = require("express");
const { authenticate } = require("../middlewares/user.middlewares");
const { OrderModel } = require("../models/order.model");

const orderRouter = express.Router();

orderRouter.get("/orders", authenticate, async (req, res) => {
  let query = req.query;
  try {
    const products = await OrderModel.find(query);
    res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Failed to fetch products" });
  }
});

orderRouter.post("/orders", authenticate, async (req, res) => {
  const { user, products, totalAmount } = req.body;
  try {
    const newOrder = new OrderModel({ user, products, totalAmount });
    console.log(newOrder);
    await newOrder.save();

    res.status(200).send({ msg: "Order placed successfully", order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "Failed to place order" });
  }
});

orderRouter.get("/orders/:orderId", async (req, res) => {
  const { orderId } = req.params;
  console.log("orderId", orderId);
  try {
    const orders = await OrderModel.findOne({ _id: orderId });
    res.status(201).send({ msg: "Order found successfully", order: orders });
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "Failed to fetch orders" });
  }
});

module.exports = { orderRouter };
