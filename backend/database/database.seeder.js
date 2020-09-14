const { PartySeeder } = require("./seeders/party.seeder");
const sequelize = require("../src/database/sequelize");

function authDB() {
    sequelize
        .authenticate()
        .then(() => {
            console.log("AUTH TO DB!!");
        })
        .catch(e => {
            console.error(e);
        });
}
function seedDB() {
    authDB();
    PartySeeder.seed();
}

seedDB();