const { Op } = require("sequelize");

const { Table, Party, Vote, Location } = require("../database/associations");

const getID_from_array_locs = async ({ locs = [] }) => {
    let id = 1;
    try {
        let i = 0;
        let loc = await Location.findOne({
            where: { name: { [Op.like]: `%${locs[i]}%` } }
        });

        while (i++ < locs.length && loc) {
            console.log(loc.dataValues);
            id = loc.dataValues.id;
            loc = await Location.findOne({
                where: { name: { [Op.like]: `%${locs[i]}%` } }
            });
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

        for (const key in votos) {
            console.log(key);
        }
        /**
         * 0. getLocID from str,str,str,... <<<<
         * 1. Creates Table & Obtains ID  <<<<
         * 2. Get partyID from name ... lol  
         * 3. Insert to Table with ListData and tableID&partyID
         */

        // const location_id = await getID_from_array_locs({
        //     locs: acta["localidad"].split(",")
        // });
        
        // console.log(location_id);

        // const _table = await Table.create({
        //     code: acta["codigo"],
        //     number: acta["nro"],
        //     open: acta["apertura"],
        //     close: acta["cierre"],
        //     location_id
        // }, {
        //     fields: [
        //         "code", "number", "open", "close", "location_id"
        //     ]
        // });

        // console.log(_table.dataValues);
        
        // const _votes = [];
        // let _nulls = 0;
        // let _whites = 0;
        
        // for (const key in votos) {
        //     const party = await get_Party_from_name(key);
        //     const col = votos[key].split(",");
        //     const amount = parseInt(col[0]) + parseInt(col[1]);
        //     if (key.includes("BLANCO")) {
        //         _whites = amount;
        //     } else if (key.includes("NULO")) {
        //         _nulls = amount;
        //     } else {
        //         let party_id = party ? party.dataValues.id : 1;
        //         _votes.push({ amount, position: "presidente&candidato", party_id });
        //     }
        // }

        // console.log(_votes);

        // for (let i = 0; i < _votes.length; i++) {
        //     await Vote.create({
        //         amount: _votes[i].amount,
        //         position: _votes[i].position,
        //         whites: i == 0 ? _whites : 0,
        //         nulls: i == 0 ? _nulls : 0,
        //         party_id: _votes[i].party_id,
        //         table_id: _table.dataValues.id
        //     }, {
        //         fields: [
        //             "amount", "position", "whites",
        //             "nulls", "party_id", "table_id"
        //         ]
        //     });
        // }

        res.json(req.body);
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