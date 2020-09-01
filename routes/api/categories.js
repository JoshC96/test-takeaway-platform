const router = require("express").Router();
const categoryController = require("../../apiControllers/categories");

// Matches with "/api/categories"
router
    .route("/")
    .get(categoryController.allCategories);


module.exports = router;
