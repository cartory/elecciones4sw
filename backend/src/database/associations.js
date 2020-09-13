const { Vote } = require("../models/vote");
const { Party } = require("../models/party");
const { Table } = require("../models/table");
const { Location } = require("../models/location");
const { Precinct } = require("../models/precinct");
// locations -> location
Location.hasMany(Location, { foreignKey: "location_id" });
Location.belongsTo(Location, { foreignKey: "location_id" });
// precincts -> location
Location.hasMany(Precinct, { foreignKey: "location_id" });
Precinct.belongsTo(Location, { foreignKey: "location_id" });
// tables cl-> precinct
Precinct.hasMany(Table, { foreignKey: "precinct_id" });
Table.belongsTo(Precinct, { foreignKey: "precinct_id" });
// table <--  votes --> parties
Party.belongsToMany(Table, { through: Vote, foreignKey: "party_id" });
Table.belongsToMany(Party, { through: Vote, foreignKey: "table_id" });

module.exports = {
    Vote,
    Party,
    Table,
    Precinct,
    Location,
};