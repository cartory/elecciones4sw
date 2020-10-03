const { Vote } = require("../models/vote");
const { Party } = require("../models/party");
const { Table } = require("../models/table");
const { Person } = require("../models/person");
const { Location } = require("../models/location");

// locations -> location
Location.hasMany(Location, { foreignKey: "location_id" });
Location.belongsTo(Location, { foreignKey: "location_id" });
// tables cl-> location
Location.hasMany(Table, { foreignKey: "location_id" });
Table.belongsTo(Location, { foreignKey: "location_id" });
// table <--  votes --> parties
Party.belongsToMany(Table, { through: Vote, foreignKey: "party_id" });
Table.belongsToMany(Party, { through: Vote, foreignKey: "table_id" });
// person -> parties
Person.belongsTo(Party, { foreignKey: "party_id" });
Party.hasMany(Person, { foreignKey: "party_id" });
// person -> location
Person.belongsTo(Location, { foreignKey: "location_id" });
Location.hasMany(Person, { foreignKey: "location_id" });
// 
module.exports = {
    Vote,
    Party,
    Table,
    Person,
    Location,
};