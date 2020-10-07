const { Router } = require("express");
const router = Router();
// CONTROLLERS
const { ExcelGenerator } = require("./controllers/excel.generator");
const { TableController } = require("./controllers/table.controller");
const { PartyController } = require("./controllers/party.controller");
const { PersonController } = require("./controllers/person.controller");
const { LocationController } = require("./controllers/location.controller");
// AUTH
const { verifyLogin, verifyToken } = require("./database/auth");

// ROUTES
router
    // PARTIES
    .get("/parties", PartyController.all)
    .post("/parties", PartyController.store)
    .get("/parties/:id", PartyController.find)
    .put("/parties/:id", PartyController.update)
    .delete("/parties/:id", PartyController.destroy)
    .get("/parties/votes/get/:loc", PartyController.byLocation)
    .get("/parties/candidates/:acro", PartyController.candidates)
    // LOCATIONS
    .get("/locations", LocationController.all)
    .post("/locations", LocationController.store)
    .get("/locations/:id", LocationController.get)
    .put("/locations/:id", LocationController.update)
    .delete("/locations/:id", LocationController.destroy)
    // TABLES&VOTES
    .get("/tables", TableController.all)
    .post("/tables", TableController.store)
    .get("/tables/:id", TableController.find)
    .put("/tables/:id", TableController.update)
    .delete("/tables/:id", TableController.destroy)
    //  PERSONS
    .get("/persons", PersonController.all)
    .get("/persons/count", PersonController.count)
    //  EXCEL OR PDF
    .get("/voters", ExcelGenerator.voters_xlsx)
    .get("/votes/excel/:loc", ExcelGenerator.recount_xlsx)
    // LOGIN
    .post("/signup", PersonController.register)
    .get("/me", verifyToken, PersonController.profile)
    .post("/signin", verifyLogin, PersonController.login);

module.exports = router;