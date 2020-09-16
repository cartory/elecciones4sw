const { PartySeeder } = require("./seeders/party.seeder");
const { LocationSeeder } = require("./seeders/location.seeder");

const sequelize = require("../src/database/sequelize");
const { PersonSeeder } = require("./seeders/person.seeder");

function authDB() {
    sequelize
        .authenticate()
        .then().catch();
}
async function seedDB() {
    authDB();
    await PartySeeder.seed();
    await LocationSeeder.seed();
    await PersonSeeder.seed_ADN_politics();
}

seedDB();
console.log(`\x1b[32mDB DATABASE SEEDED!!\x1b[0m`);