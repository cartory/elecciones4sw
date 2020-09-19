const { Party, Person } = require("../database/associations");

class PartyController {
    static all(req, res) {
        Party
            .findAll()
            .then(parties => {
                res.json(parties);
            })
            .catch(e => {
                res.json(e);
            });
    }

    static find(req, res) {
        Party
            .findOne({
                where: { id: req.params.id }
            })
            .then(party => {
                res.json(party);
            })
            .catch(e => {
                res.json(e);
            });
    }

    static store(req, res) {
        const { name, icon, acronym } = req.body;
        Party
            .create({
                name, icon, acronym
            }, {
                fields: ["name", "icon", "acronym"]
            }).then(party => {
                res.json(party);
            }).catch(e => {
                res.json(e);
            });
    }

    static update(req, res) {
        const { name, icon, acronym } = req.body;
        Party
            .update({
                name, icon, acronym
            }, { where: { id: req.params.id } })
            .then(val => {
                res.json(val);
            })
            .catch(e => {
                res.json(e);
            });
    }

    static destroy(req, res) {
        Party
            .destroy({ where: { id: req.params.id } })
            .then(number => {
                res.json(number);
            })
            .catch(e => {
                res.json(e);
            });
    }

    static candidates(req, res) {
        const { acro } = req.params;
        console.log(acro);
        Party
            .findAll({
                where: { acronym: acro },
                include: [
                    {
                        model: Person,
                        attributes: [
                            "location_id","type", "document", "lastname1", "lastname2", "names", "birthdate", "gender"
                        ],
                        order: [
                            ["location_id", "DESC"],
                            ["position", "DESC"],   
                            ["lastname1", "DESC"],
                            ["lastname2", "DESC"],
                            ["type", "DESC"],
                        ]
                    }
                ]
            })
            .then(data => res.json(data))
            .catch(e => res.json(e));
    }
}

module.exports = { PartyController };