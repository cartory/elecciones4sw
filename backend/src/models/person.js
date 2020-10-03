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
    gender: DataTypes.CHAR,
    // 
    vowel: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    president: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    delegate: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    secretary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    // candidate
    candidate: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    position: DataTypes.STRING,
    description: DataTypes.TEXT,
    observations: DataTypes.TEXT,
    type: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false
});

module.exports = { Person };