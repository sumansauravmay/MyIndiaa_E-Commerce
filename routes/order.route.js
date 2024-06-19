const express = require("express");

const { OrderModel } = require("../models/order.model");

const orderRouter = express.Router();

orderRouter.post("/orders", async (req, res) => {
  const { userId, products, totalAmount } = req.body;
  try {
    const newOrder = new OrderModel({ user: userId, products, totalAmount });
    await newOrder.save();
    res.status(200).send({ msg: "Order placed successfully", order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "Failed to place order" });
  }
});

orderRouter.get("/orders/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await OrderModel.find({ user: userId });
    res.send(orders);
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "Failed to fetch orders" });
  }
});


module.exports={orderRouter};
