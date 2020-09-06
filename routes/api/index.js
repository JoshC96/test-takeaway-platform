const router = require("express").Router();
const productRoutes = require("./products");
const categoryRoutes = require("./categories");
const extrasRoutes = require("./extras");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/extras", extrasRoutes);

module.exports = router;
