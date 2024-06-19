const express = require("express");

const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

const jwt = require("jsonwebtoken");

userRouter.post("/register", async (req, res) => {
  const payload = req.body;
  try {
    const user = new UserModel(payload);
    user.save();
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email, password });
    var token = jwt.sign({ foo: "bar" }, "sjfd");
    if (token > 0) {
      res.send({ msg: "Login Successful", token: token });
      console.log(user);
    } else {
      res.send("Wrong Credential!");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = { userRouter };
