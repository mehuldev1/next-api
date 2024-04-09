const { mongoose } = require("mongoose");

const productsModel = new mongoose.Schema({
    name: String,
}) 

export const Product = mongoose.models.products || mongoose.model("products",productsModel)