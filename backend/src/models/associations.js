const { Location } = require("./location");
const { Precinct } = require("./precinct");

// locations -> location
Location.hasMany(Location, { foreignKey: "localidad_id", as: "parts" });
Location.belongsTo(Location, { as: "from" });
// precincts -> location
Location.hasMany(Precinct, { foreignKey: "localidad_id", as: "precincts" });
Precinct.belongsTo(Location, { as: "location" });
// 
module.exports = {
    Location,
    Precinct,
};