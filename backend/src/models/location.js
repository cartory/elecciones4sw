const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Location extends Model { }

Location.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    tipo: DataTypes.STRING,
    nombre: DataTypes.STRING,
    circunscripcion: DataTypes.INTEGER,
    localidad_id: DataTypes.INTEGER
}, {
    sequelize,
    tableName: "localidades",
    modelName: "localidades",
});

module.exports = { Location };