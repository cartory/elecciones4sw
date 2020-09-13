const { Router } = require("express");
const router = Router();
// CONTROLLERS
const { PartyController } = require("./controllers/party.controller");
const { LocationController } = require("./controllers/location.controller");
const { PrecinctController } = require("./controllers/precinct.controller");
// ROUTES
router
    // PARTIDOS
    .get("/parties", PartyController.all)
    .post("/parties", PartyController.store)
    .get("/parties/:id", PartyController.find)
    .put("/parties/:id", PartyController.update)
    .delete("/parties/:id", PartyController.destroy)
    // LOCATIONS
    .get("/locations", LocationController.all)
    .post("/locations", LocationController.store)
    .get("/locations/:id", LocationController.find)
    .put("/locations/:id", LocationController.update)
    .delete("/locations/:id", LocationController.destroy)
    // PRECICNTS
    .get("/precincts", PrecinctController.all)
    .post("/precincts", PrecinctController.store)
    .get("/precincts/:id", PrecinctController.find)
    .put("/precincts/:id", PrecinctController.update)
    .delete("/precincts/:id", PrecinctController.destroy);

module.exports = router;