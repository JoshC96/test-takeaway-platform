const router = require("express").Router();
const extrasController = require("../../apiControllers/extras");

// Matches with "/api/extras"
router
    .route("/")
    .get(extrasController.allExtras);


module.exports = router;
