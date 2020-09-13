const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const { Precinct } = require("./precinct");

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
// 
Location.hasMany(Location, { foreignKey: "localidad_id" });
Location.belongsTo(Location, { foreignKey: "localidad_id" });
// 
Location.hasMany(Precinct, { foreignKey: "localidad_id" });

module.exports = { Location };