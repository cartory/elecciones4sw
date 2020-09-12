const { Router } = require("express");
const router = Router();
// CONTROLLERS
const { PartyController } = require("./controllers/party.controller");
// ROUTES
router
    .get("/parties", PartyController.all)
    .post("/parties", PartyController.store)
    .get("/parties/:id", PartyController.find)
    .put("/parties/:id", PartyController.update)
    .delete("/parties/:id", PartyController.destroy);

module.exports = router;