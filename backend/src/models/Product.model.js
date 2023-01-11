const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  quantity: { type: Number, required: true, default: 10 },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  sub_category: { type: String, required: true },
  type: { type: String },
  cover_image: { type: String, required: true },
  images: { type: Array, required: true },
  rent_3: { type: Number, required: true },
  rent_6: { type: Number, required: true },
  rent_12: { type: Number, required: true },
  refundable_deposit: { type: Number, required: true },
  dimensions: { type: Array },
  safety_uses: { type: Array },
  features_specs: { type: Array },
  material_color: { type: Array },
});

const productModel = mongoose.model("product", productSchema);

module.exports = {
  productModel,
};
