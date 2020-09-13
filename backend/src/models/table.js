const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Table extends Model { }

Table.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    code: DataTypes.BIGINT.UNSIGNED,
    number: DataTypes.INTEGER.UNSIGNED,
    open: DataTypes.DATE,
    close: DataTypes.DATE,
}, {
    sequelize,
});

module.exports = { Table };