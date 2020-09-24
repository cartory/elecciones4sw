const { Router } = require("express");
const router = Router();
// CONTROLLERS
const { PartyController } = require("./controllers/party.controller");
const { TableController } = require("./controllers/table.controller");
const { LocationController } = require("./controllers/location.controller");
const { PrecinctController } = require("./controllers/precinct.controller");
const { PersonController } = require("./controllers/person.controller");
const { ExcelGenerator } = require("./controllers/excel.generator");
// ROUTES
router
    // PARTIES
    .get("/parties", PartyController.all)
    .post("/parties", PartyController.store)
    .get("/parties/candidates/:acro", PartyController.candidates)
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
    .delete("/precincts/:id", PrecinctController.destroy)
    // TABLES
    .get("/tables", TableController.all)
    .post("/tables", TableController.store)
    .get("/tables/:id", TableController.find)
    .put("/tables/:id", TableController.update)
    .delete("/tables/:id", TableController.destroy)
    //  PERSONS
    .get("/persons", PersonController.all)
    .get("/persons/count", PersonController.count)
    //  EXCEL
    .get("/voters", ExcelGenerator.voters_xlsx);

module.exports = router;