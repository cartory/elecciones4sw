const { Op } = require("sequelize");

const { Table, Party, Vote, Location } = require("../database/associations");

const getID_from_array_locs = async ({ locs = [] }) => {
    let id = 1;
    try {
        let i = 0;
        while (true) {
            const loc = await Location.findOne({
                where: { name: { [Op.like]: `%${locs[i++].toLowerCase()}%` } }
            });
            if (!loc) break;
            if (i >= locs.length) break;
            id = loc.dataValues.id;
        }
    } catch (e) {
        console.error(e);
    }
    return id;
}

const get_Party_from_name = async (name = "string") => {
    try {
        return await Party.findOne({
            where: {
                acronym: {
                    [Op.like]: `%${name.toUpperCase()}%`,
                }
            }
        });
    } catch (e) {
        console.error(e);
    }
    return null;
}

class TableController {
    static all(req, res) {
        Table
            .findAll()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static find(req, res) {
        Table
            .findOne({ where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static async store(req, res) {
        const acta = JSON.parse(req.body.acta);
        const votos = JSON.parse(req.body.votos);

        const location_id = await getID_from_array_locs({
            locs: acta["localidad"].split(",")
        });

        try {
            const _table = await Table.create({
                code: acta["codigo"],
                number: acta["nro"],
                open: acta["apertura"],
                close: acta["cierre"],
                location_id,
            }, {
                fields: [
                    "code", "number", "open", "close", "location_id"
                ]
            });

            const _votes = [];
            let _nulls = 0;
            let _whites = 0;

            for (const key in votos) {
                const party = await get_Party_from_name(key);
                const col = votos[key].split(",");
                const amount = parseInt(col[0]) + parseInt(col[1]);
                if (key.includes("BLANCO")) {
                    _whites = amount;
                } else if (key.includes("NULO")) {
                    _nulls = amount;
                } else {
                    let party_id = party ? party.dataValues.id : 1;
                    _votes.push({ amount, position: "presidente&candidato", party_id });
                }
            }

            for (let i = 0; i < _votes.length; i++) {
                await Vote.create({
                    amount: _votes[i].amount,
                    position: _votes[i].position,
                    whites: i == 0 ? _whites : 0,
                    nulls: i == 0 ? _nulls : 0,
                    party_id: _votes[i].party_id,
                    table_id: _table.dataValues.id
                }, {
                    fields: [
                        "amount", "position", "whites",
                        "nulls", "party_id", "table_id"
                    ]
                });
            }
            res.json({ success: true });
        } catch (e) {
            console.error(e);
            res.json({ success: false, e });
        }
    }

    static update(req, res) {
        const {
            code, number, open, close, precinct_id = null
        } = req.body;
        Table
            .update({
                code, number, open, close, precinct_id
            }, { where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static destroy(req, res) {
        Table
            .destroy({ where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}

module.exports = { TableController };