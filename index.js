const express = require("express");
const { userRouter } = require("./routes/user.route");
const {productRouter}=require("./routes/product.route");
const {orderRouter}=require("./routes/order.route");
const {paymentRouter}=require("./routes/payment.route");
const { connnection } = require("./config/db");

require("dotenv").config();

const cors = require("cors");

app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/", userRouter);
app.use("/", productRouter);
app.use("/", orderRouter);
app.use("/", paymentRouter);


app.listen(process.env.port, async () => {
  try {
    await connnection;
    console.log(`port is running oon ${process.env.port}`);
  } catch (err) {
    console.log(err);
  }
});
