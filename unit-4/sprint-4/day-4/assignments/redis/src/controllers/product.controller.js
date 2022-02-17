const express = require("express");

const Product = require("../models/product.model");

const redis = require("../configs/redis");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    const products = await Product.find().lean().exec();

    redis.set("allproducts", product._id.toString(), JSON.stringify(products));

    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    redis.get("allproducts", async function (err, fetchedProducts) {
      if (err) return res.status(500).send({ message: err.message });
      if (fetchedProducts)
        return res
          .status(200)
          .send({ products: JSON.parse(fetchedProducts), redis: true });

      const products = await Product.find().lean().exec();
      redis.set("allproducts", JSON.stringify(products));

      return res.status(200).send({ products, redis: false });
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    // posts.620e26e3016519842f847e6f
    redis.get(`products.${req.params.id}`, async function (err, fetchedProducts) {
      if (err) return res.status(500).send({ message: err.message });

      if (fetchedProducts)
        return res
          .status(200)
          .send({ post: JSON.parse(fetchedProducts), redis: true });

      const product = await Product.findById(req.params.id).lean().exec();
      redis.set(`products.${req.params.id}`, JSON.stringify(product));

      return res.status(200).send({ product, redis: false });
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    const products = await Product.find().lean().exec();

    redis.set(`products.${req.params.id}`, JSON.stringify(product));
    redis.set("allproducts", JSON.stringify(products));

    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    const products = await Product.find().lean().exec();

    redis.del(`products.${req.params.id}`);
    redis.set("allProducts", JSON.stringify(products));

    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
