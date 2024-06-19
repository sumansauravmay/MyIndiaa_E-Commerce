const express = require("express");

const { ProductModel } = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  let query = req.query;
  try {
    const products = await ProductModel.find(query);
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

productRouter.post("/add", (req, res)=>{
    const data=req.body;
    try{
const product=new ProductModel(data);
 product.save();
res.send("added product")
    }catch(err){
        console.log(err);
    }
})


module.exports={productRouter};


