const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Precinct extends Model { }

Precinct.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    name: DataTypes.STRING,
}, {
    sequelize,
});

module.exports = { Precinct };