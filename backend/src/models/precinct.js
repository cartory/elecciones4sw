const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Precinct extends Model { }

Precinct.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: DataTypes.STRING,
}, {
    sequelize,
});

module.exports = { Precinct };