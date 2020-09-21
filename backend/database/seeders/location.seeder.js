const { Location } = require("../../src/database/associations");

async function create_location_and_getID(
    { type, name, district = null, location_id = null }
) {
    try {
        const loc = await Location.create({
            type, name, district, location_id
        }, {
            fields: ["type", "name", "district", "location_id"]
        });
        return loc.dataValues.id;
    } catch (e) {
        // console.error(e);
        return -1;
    }
}

class LocationSeeder {
    static async seed() {
        let location_id = await create_location_and_getID({
            type: "pais", name: "Bolivia"
        });
        const deps = [
            "Beni",
            "Chuquisaca",
            "Cochabamba",
            "La Paz",
            "Oruro",
            "Pando",
            "Potosi",
            "Santa Cruz",
            "Tarija"
        ];

        deps.forEach(async (dep) => {
            await create_location_and_getID({
                type: "departamento", name: dep, location_id
            });
        });
        // provincias
    }
}

module.exports = { LocationSeeder };