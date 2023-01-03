const { Router } = require("express");
const { userModel } = require("../models/User.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userRoutes = Router();

userRoutes.get("/", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

userRoutes.post("/", async (req, res) => {
  let { email } = req.body;
  try {
    let user = await userModel.findOne({ email: email });
    if (user) {
      res.send("registered");
    } else {
      res.send("new");
    }
  } catch (e) {
    return res.status(401).send(e.message);
  }
});

userRoutes.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  try {
    // let user = await userModel.findOne({ email: email });
    // if (user) {
    //   return res.send({ error: "Already Registered, Please Login" });
    // } else {
      bcrypt.hash(password, 6, async function (err, hash) {
        if (err) {
          res.send({ error: "Something wrong" });
          console.log(err);
        } else {
          const newUser = new userModel({ name, email, password: hash });
          await newUser.save();
          res.send({ message: "Succesfully Registered", user: newUser });
        }
      });
    // }
  } catch (err) {
    return res.status(401).send(e.message);
  }
});

userRoutes.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    let hash = user.password;
    bcrypt.compare(password, hash, async function (err, result) {
      if (user && result) {
        var token = jwt.sign({ userId: user._id }, process.env.privateKey);
        res.send({
          message: "Login Successful",
          token,
          user,
        });
      } else if (err) {
        res.send({ error: "Something went wrong" });
      } else {
        res.send({ error: "Wrong username or password" });
      }
    });
  } else {
    res.send({ error: "Wrong username or password" });
  }
});

module.exports = {
  userRoutes,
};
