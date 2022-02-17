const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    Prd_name: { type: String, required: true },
    Prd_price: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
