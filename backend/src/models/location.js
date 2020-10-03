const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Location extends Model { }

Location.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    district: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false
});

module.exports = { Location };