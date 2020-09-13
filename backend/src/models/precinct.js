const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const { Location } = require("./location");

class Precinct extends Model { }

Precinct.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre: DataTypes.STRING,
    localidad_id: DataTypes.INTEGER,
}, {
    sequelize,
    tableName: "recintos",
    modelName: "recintos",
});

module.exports = { Precinct };