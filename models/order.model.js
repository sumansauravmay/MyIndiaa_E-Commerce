const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  products: [
    { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
  ],
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model("Orders", orderSchema);
module.exports = { OrderModel };
