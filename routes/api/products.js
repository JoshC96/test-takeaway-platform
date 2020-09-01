const router = require("express").Router();
const productsController = require("../../apiControllers/products");

// Matches with "/api/products"
router
    .route("/")
    .get(productsController.allProducts);

// Matches with "/api/products/id"
router
    .route("/id")
    .get(productsController.productsById);

// Matches with "/api/products/category"
router
    .route("/category")
    .get(productsController.productsByCategory);

module.exports = router;
