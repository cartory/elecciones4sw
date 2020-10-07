const sequelize = require("../src/database/sequelize");

const { PartySeeder } = require("./seeders/party.seeder");
const { LocationSeeder } = require("./seeders/location.seeder");
const { seedVoters } = require("./seeders/voter.seeder");
const { seed_votes } = require("./seeders/table-vote.seeder");

function authDB() {
    sequelize
        .authenticate()
        .then().catch();
}

async function seedDB() {
    await sequelize.authenticate();
    await seed_votes();
    // await PartySeeder.seed();
    // await LocationSeeder.seed();
    // await PersonSeeder.seed_ADN_politics();
    // await seedVoters({ number: 1000 });
    // await seedVoters({ number: 100, delegate: true });
    // await seedVoters({ number: 100, candidate: true });
    // await seedVoters({ number: 100, president: true });
    // await seedVoters({ number: 100, vowel: true });
    // await seedVoters({ number: 100, secretary: true });
}

seedDB().then(() => {
    console.log(`\x1b[32mDB DATABASE SEEDED!!\x1b[0m`);
});