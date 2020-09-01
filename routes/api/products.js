const router = require("express").Router();
const productsController = require("../../apiControllers/products");

// Matches with "/api/products"
router.route("/").get(productsController.findAll);

// Matches with "/api/products/:id"
router.route("/:id").get(productsController.findById);

module.exports = router;
