const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Table extends Model { }

Table.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    code: DataTypes.BIGINT,
    number: DataTypes.INTEGER,
    open: DataTypes.DATE,
    close: DataTypes.DATE,
}, {
    sequelize,
    timestamps: false
});

module.exports = { Table };