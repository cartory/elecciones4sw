const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Party extends Model { }

Party.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    name: DataTypes.STRING,
    icon: DataTypes.TEXT,
    acronym: DataTypes.STRING,
    pdf: DataTypes.TEXT
}, {
    sequelize,
    timestamps: false
});

module.exports = { Party };