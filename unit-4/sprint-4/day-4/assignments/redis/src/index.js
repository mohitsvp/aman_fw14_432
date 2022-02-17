const express = require("express");
const connect = require("./configs/db.js");

const productController = require("./controllers/product.controller");

const app = express();

app.use(express.json());

app.use("/products", productController);

port = process.env.PORT || 3000;

app.listen(port, async () => {
  await connect();
  console.log("Listing on port 3000");
});
