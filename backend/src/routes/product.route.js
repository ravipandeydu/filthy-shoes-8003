const { Router } = require("express");
require("dotenv").config();

const { productModel } = require("../models/Product.model");

const productsRoutes = Router();

productsRoutes.get("/", async (req, res) => {
  const products = await productModel.find();
  res.send(products);
});

productsRoutes.post("/create", async (req, res) => {
  const newProduct = new productModel(req.body);
  try {
    await newProduct.save();
    res.send(newProduct);
  } catch (err) {
    res.send("something went wrong");
    console.log(err);
  }
});

productsRoutes.delete("/delete/:productId", async (req, res) => {
  const { productId } = req.params;
  const deletedProduct = await productModel.findOneAndDelete({
    _id: productId,
  });
  if (deletedProduct) {
    res.status(200).send("Deleted");
  } else {
    res.send("couldn't delete");
    console.log(err);
  }
});

productsRoutes.patch("/edit/:productId", async (req, res) => {
  const { productId } = req.params;
  const updatedProduct = await productModel.findOneAndUpdate(
    { _id: productId },
    req.body
  );
  if (updatedProduct) {
    res.send(updatedProduct);
  } else {
    res.send("couldn't update");
  }
});

productsRoutes.get("/search", async (req, res) => {
  let keyword = {};
  if (req.query.q) {
    keyword = req.query.q;
  }

  try {
    const product = await productModel.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { desc: { $regex: keyword, $options: "i" } },
      ],
    });
    return res.status(200).send(product);
  } catch (er) {
    return res.status(403).send(er.message);
  }
});

module.exports = {
  productsRoutes,
};
