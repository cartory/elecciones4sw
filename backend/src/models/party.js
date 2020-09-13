const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Party extends Model { }

Party.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre: DataTypes.STRING,
    icono: DataTypes.TEXT,
    sigla: DataTypes.STRING
}, {
    sequelize,
    tableName: "partidos",
    modelName: "partidos",
});

module.exports = { Party };