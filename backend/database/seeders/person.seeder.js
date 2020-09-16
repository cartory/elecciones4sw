const { Person, Party, Location } = require("../../src/database/associations");

async function insert_Politic_toDB({
    type, document, gender,
    names, lastname1, lastname2,
    birthdate, description, position,
    party_id = null, location_id = null,
}) {
    try {
        await Person.create({
            type, document, gender,
            names, lastname1, lastname2,
            birthdate, description, position,
            party_id, location_id,
            candidate: true,
        }, {
            fields: [
                "type", "document", "gender",
                "names", "lastname1", "lastname2",
                "birthdate", "description", "position",
                "party_id", "location_id",
                "candidate"
            ]
        });
    } catch (e) {
        console.error(e);
    }
}

async function getPartyID_from_acro(acronym) {
    try {
        const { dataValues } = await Party.findOne({ where: { acronym } });
        return dataValues.id;
    } catch (e) {
        console.error(e);
        return -1;
    }
}

async function getLocationID_from_name(name) {
    try {
        const { dataValues } = await Location.findOne({ where: { name } });
        return dataValues.id;
    } catch (e) {
        console.error(e);
        return -1;
    }
}

async function insertArray({
    rows, position, party_id, location_id
}) {
    try {
        rows.forEach(async (v) => {
            await insert_Politic_toDB({
                type: v[0], names: v[1],
                lastname1: v[2], lastname2: v[3],
                document: v[4], gender: v[5],
                birthdate: v[6],
                position,
                description: (v.length > 7) ? v[7] : null,
                party_id, location_id,
            });
        });
    } catch (error) {
        console.error("error");
    }
}

class PersonSeeder {
    static async seed_ADN_politics() {
        let party_id = await getPartyID_from_acro("ADN");
        let location_id = await getLocationID_from_name("La Paz");
        // senador@s LPZ
        let rows = [
            [
                "titular",
                "Sonia Celestina", "Soto", "Vega",
                2469149, "F", Date.UTC(59, 5, 19)
            ],
            [
                "suplente",
                "Victor Hugo", "Oña", "Ovando",
                1054972, "M", Date.UTC(61, 9, 23)
            ],
            [
                "titular",
                "Matilde", "Mayta", "Mamani",
                4780695, "F", Date.UTC(74, 8, 4)
            ],
            [
                "titular",
                "Nathaly Andrea", "Quinteros", "Torrez",
                7051726, "F", 30, Date.UTC(89, 12, 20)
            ],
        ];
        await insertArray({ rows, position: "senador", party_id, location_id });
        // diputads Plur LPZ
        rows = [
            [
                "titular",
                "Luciana Gabriela", "Ponce", "Morales",
                4741551, "F", Date.UTC(81, 11, 7),
            ],
            [
                "suplente",
                "Grover Cheriff", "Fernandez", "Roman",
                2475276, "M", Date.UTC(63, 6, 27),
            ],
            [
                "titular",
                "Rodrigo Alberto", "Rodriguez", "Aliaga",
                3421570, "M", Date.UTC(79, 6, 4),
            ],
            [
                "suplente",
                "Micaela Alejandra", "Muñoz", "Romay",
                6756883, "F", Date.UTC(87, 8, 26)
            ],
            [
                "titular",
                "Lesly", "Acosta", "Aguilar",
                3367910, "F", Date.UTC(75, 2, 14)
            ],
            [
                "titular",
                "David Reynaldo", "Mamani", "Condorena",
                5987409, "M", Date.UTC(80, 12, 29)
            ],
        ];

        await insertArray({
            rows, position: "diputado plurinacional", party_id, location_id
        });

        // // diputads uninominales LPZ
        rows = [
            [
                "suplente",
                "Miguel Angel", "Figueroa", "Silva",
                2020494, "M", Date.UTC(67, 9, 21),
                "Circunscripción 16"
            ],
            [
                "titular",
                "Ana Edith", "Morales", "Gutierrez",
                4287118, "F", Date.UTC(73, 12, 23),
                "Circunscripción 18"
            ],
        ];
        await insertArray({
            rows, position: "diputado uninominal",
            party_id, location_id
        });
        // diputds pluri SC
        rows = [
            [
                "suplente",
                "Carlos Eduardo", "Perez", "Montaño",
                7709905, "M", Date.UTC(99, 12, 3)
            ],
            [
                "titular",
                "German", "Olmos", "",
                4597619, "M", Date.UTC(78, 5, 12)
            ]
        ];
        location_id = await getLocationID_from_name("Santa Cruz");
        await insertArray({
            rows, position: "diputado plurinacional",
            party_id, location_id
        });
        // diputds uni SC
        rows = [
            [
                "titular",
                "Juan Cecilio", "Cespedes", "Batallanos",
                4712125, "M", Date.UTC(80, 10, 4),
                "Circunscripcion 44"
            ]
        ];
        await insertArray({
            rows, position: "diputado uninominal",
            party_id, location_id,
        });
    }
}

module.exports = { PersonSeeder };