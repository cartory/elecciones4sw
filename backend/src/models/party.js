const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Party extends Model { }

Party.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    icon: DataTypes.TEXT,
    acronym: DataTypes.STRING
}, {
    sequelize,
});

module.exports = { Party };