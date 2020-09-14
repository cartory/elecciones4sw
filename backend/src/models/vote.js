const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Vote extends Model { }

Vote.init({
    type: DataTypes.ENUM("invalid", "white", "valid"),
    amount: DataTypes.BIGINT,
    position: DataTypes.ENUM("president", "deputy"),
}, {
    sequelize,
});

module.exports = { Vote };