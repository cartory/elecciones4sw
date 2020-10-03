const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Vote extends Model { }

Vote.init({
    type: DataTypes.STRING,
    amount: DataTypes.BIGINT,
    position: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false
});

module.exports = { Vote };