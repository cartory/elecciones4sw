const faker = require("faker");

const { bolivia, LocType } = require("./location.const");
const { Location } = require("../../src/database/associations");

const seed_precincts = async ({ number_to_create = 10, location_id = null }) => {
    while (number_to_create-- > 0) {
        await Location.create({
            type: LocType.PRECINCT,
            name: faker.address.streetAddress(true).toLowerCase(),
            district: null, location_id
        }, {
            fields: [
                "type", "name", "district", "location_id"
            ]
        });
    }
}

const seed_locations = async ({ obj, type, district = null, location_id = null }) => {
    try {
        const _location = await Location.create({
            type,
            name: (Array.isArray(obj)) ? obj[0].toLowerCase() : obj.toLowerCase(),
            district, location_id
        }, {
            fields: [
                "type", "name", "district", "location_id"
            ]
        });

        switch (type) {
            case LocType.COUNTRY:
                type = LocType.DEPARTMENT;
                break;
            case LocType.DEPARTMENT:
                type = LocType.PROVINCE;
                break;
            case LocType.PROVINCE:
                type = LocType.MUNICIPALITY;
                break;
            case LocType.MUNICIPALITY:
                type = LocType.DISTRICT;
                break;
            case LocType.DISTRICT:
                type = LocType.PRECINCT;
                break;
            default: return;
        }

        if (Array.isArray(obj)) {
            obj[1].forEach(async (child) => {
                await seed_locations({
                    obj: child,
                    type,
                    location_id: _location.dataValues.id
                });
            });
        } else {
            await seed_precincts({ number_to_create: 5, location_id: _location.dataValues.id });
        }
    } catch (error) {
        console.error("ERROR");
    }

}

class LocationSeeder {
    static async seed() {
        await seed_locations({
            obj: bolivia,
            type: LocType.COUNTRY,
        });
    }
}

module.exports = { LocationSeeder };