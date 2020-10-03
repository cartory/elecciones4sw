const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    // process.env.DATABASE_URL,
    {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIAL,
        define: {
            timestamps: false,
            deletedAt: false,
        },
    },
);

module.exports = sequelize;