const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Precinct extends Model { }

Precinct.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre: DataTypes.STRING,
}, {
    sequelize,
});

module.exports = { Precinct };