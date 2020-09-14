const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Person extends Model { }

Person.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    document: DataTypes.BIGINT,
    names: DataTypes.STRING,
    lastname1: DataTypes.STRING,
    lastname2: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    birthdate : DataTypes.DATE,
    address: DataTypes.STRING, 
    gender: DataTypes.ENUM("M", "F"),
    // 
    vowel: DataTypes.BOOLEAN,
    president: DataTypes.BOOLEAN,
    delegate: DataTypes.BOOLEAN,
    secretary: DataTypes.BOOLEAN,
    // candidate
    candidate: DataTypes.BOOLEAN,
    position: DataTypes.STRING,
    description: DataTypes.TEXT,
    observations: DataTypes.TEXT,
    type: DataTypes.ENUM("headline", "alternate"),
}, {
    sequelize,
});

module.exports = { Person };