const express = require("express");
const bcrypt = require("bcrypt");

const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

const jwt = require("jsonwebtoken");

userRouter.post("/register", async (req, res) => {
  const payload = req.body;
  try {
    const salt = await bcrypt.genSalt(10);

    // Hash the password
    const hashedPassword = await bcrypt.hash(payload.password, salt);

    // Replace the plain text password with the hashed password
    payload.password = hashedPassword;

    const user = new UserModel(payload);
    user.save();
    res.send({ msg: "User registered successfully", user });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

userRouter.post("/login", async (req, res) => {
  //   const { email, password } = req.body;
  //   try {
  //     const user = await UserModel.find({ email });
  //     await bcrypt.compare(password, user.password);
  //     var token = jwt.sign({ foo: "bar" }, "sjfd");

  //     if (token > 0) {
  //       res.send({ msg: "Login Successful", token: token });
  //       console.log(user);
  //     } else {
  //       res.send("Wrong Credential!");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }

  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).send({ msg: "Wrong Credentials!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ msg2: "Wrong Credentials!" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      "your_secret_key",
      { expiresIn: "1h" }
    );

    res.send({ msg: "Login Successful", token: token });
    console.log(user);
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

module.exports = { userRouter };
