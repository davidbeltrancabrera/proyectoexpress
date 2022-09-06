
const express = require("express");
const productController = require("./../controllers/productController.js");
const productRouter = express.Router(); 

//routes
productRouter.route("/")
    .get(productController.getAllProducts)
    .post(productController.addProduct);

productRouter.route("/:id").get(productController.getProductById);
productRouter.route("/:id").delete(productController.delProductById);
productRouter.route("/:id").put(productController.putProductById);

module.exports = productRouter;