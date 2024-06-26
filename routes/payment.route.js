const express = require("express");
const { PaymentModel } = require("../models/payment.model");
const paymentRouter = express.Router();
const { authenticate } = require("../middlewares/user.middlewares");
require("dotenv").config();

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
//payment Intent
const stripe = require("stripe")(
  "sk_test_51PTlIz06qAZY9jhqW9uehslpw8aU6mK1apH7cqVdv4jxzrjsvdHUOwPdUsfHBynzW5XmNqQ63j2CDYpoXKZifbuJ00VNgYP4p4"
);

// const stripe = require("stripe")(
//   "sk_test_51PTlIz06qAZY9jhqW9uehslpw8aU6mK1apH7cqVdv4jxzrjsvdHUOwPdUsfHBynzW5XmNqQ63j2CDYpoXKZifbuJ00VNgYP4p4"
// );

paymentRouter.get("/payment", authenticate, async (req, res) => {
  try {
    const paymentIntents = await stripe.paymentIntents.list({ limit: 3 });
    res.status(200).json(paymentIntents);
  } catch (error) {
    res.status(500).send({ msg: "Failed retrieving payment intents" });
  }
});

paymentRouter.post("/payment", authenticate, async (req, res) => {
  const { order, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
    });
    const newPayment = new PaymentModel({
      amount: paymentIntent.amount,
      order,
    });
    console.log(newPayment);
    await newPayment.save();

    res.status(200).send({ msg: "Payment successful", payment: paymentIntent });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Failed to process payment" });
  }
});

paymentRouter.post("/payment/:id", authenticate, async (req, res) => {
  const { id: intentId } = req.params;

  if (!intentId) {
    return res.status(401).json({ message: "Payment ID is required." });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(intentId);
    res.status(200).json(paymentIntent);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Failed to capturing payment intent" });
  }
});

module.exports = { paymentRouter };
