const { Location } = require("../models/location");
const { Precinct } = require("../models/precinct");

// locations -> location
Location.hasMany(Location);
Location.belongsTo(Location);
// precincts -> location
Location.hasMany(Precinct);
Precinct.belongsTo(Location);

module.exports = {
    Location,
    Precinct,
};