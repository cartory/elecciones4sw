const { Location, Precinct } = require("../../src/database/associations");
const { beni } = require("./deps.const");
const precinct = require("../../src/models/precinct");

const getID_from_name = async (name) => {
    try {
        const dep = await Location.findOne({
            where: { name }
        });
        return dep.dataValues.id;
    } catch (e) {
        console.error(e);
        return -1;
    }
}

const seed_location = async (
    { obj, type, district = null, location_id = null }
) => {
    const _location = await Location.create({
        type,
        name: (Array.isArray(obj)) ? obj[0] : obj,
        district, location_id
    }, {
        fields: [
            "type", "name", "district", "location_id"
        ]
    });
    if (type != "distrito") {
        obj[1].forEach(async (child) => {
            await seed_location({
                obj: child,
                type: (type == "provincia") ? "municipio" : "distrito",
                location_id: _location.dataValues.id
            });
        });
    }
}

const BeniSeeder = async () => {
    const _id = await getID_from_name("Beni");
    beni.forEach(async (prov) => {
        try {
            await seed_location({
                obj: prov,
                type: "provincia",
                location_id: _id
            });
        } catch (e) {
            console.error(e);
        }
    });
}

module.exports = { BeniSeeder }