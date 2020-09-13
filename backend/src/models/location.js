const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Location extends Model { }

Location.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    district: DataTypes.INTEGER,
}, {
    sequelize,
});

module.exports = { Location };