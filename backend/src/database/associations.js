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

module.exports = {
    Location,
    Precinct,
    Table,
};