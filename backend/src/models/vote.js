const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Vote extends Model { }

Vote.init({
    amount: DataTypes.BIGINT,
    position: DataTypes.STRING,
    whites: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    nulls: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
}, {
    sequelize,
    timestamps: false
});

module.exports = { Vote };