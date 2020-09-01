const router = require("express").Router();
const productRoutes = require("./products");
const categoryRoutes = require("./categories");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);

module.exports = router;
