const express = require("express");
const {authenticate}=require("../middlewares/user.middlewares");

const { ProductModel } = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  let query = req.query;
  try {
    const products = await ProductModel.find(query);
    res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Failed to fetch products" });
  }
});

productRouter.post("/add", authenticate, (req, res) => {
  const data = req.body;
  try {
    const product = new ProductModel(data);
    product.save();
    res
      .status(201)
      .send({ msg: "Product added successfully", product: product });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Failed to add product" });
  }
});

productRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const ID = req.params.id;

  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send("Updated the product details!");
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Failed to update product" });
  }
});

productRouter.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.send("Deleted the product!");
  } catch (err) {
    res.status(500).send({ msg: "Failed to delete product" });
  }
});

module.exports = { productRouter };
