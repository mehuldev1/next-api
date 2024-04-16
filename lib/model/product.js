const { mongoose } = require("mongoose");

const productsModel = new mongoose.Schema({
    name: String,
}) 

export const Product =mongoose.model("products",productsModel)