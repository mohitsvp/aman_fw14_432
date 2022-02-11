const express = require("express");

const Product = require("../models/product.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("", authenticate, async (req, res) => {
  try {
    req.body.user_id = req.user._id;
    const product = await Product.create(req.body);

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const products = await Product.find()
    .populate({path:"user_id"})
    .lean().exec();

    return res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id",async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    res.status(201).send(products);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id).lean().exec();

   res.send(products);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
