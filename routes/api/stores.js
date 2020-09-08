const router = require("express").Router();
const storesController = require("../../apiControllers/stores");

// Matches with "/api/stores"
router
    .route("/")
    .get(storesController.allStores);

// Matches with "/api/stores/state"
router
    .route("/state")
    .get(storesController.storesByState);

    // Matches with "/api/stores/states"
router
    .route("/states")
    .get(storesController.allStates);

module.exports = router;
