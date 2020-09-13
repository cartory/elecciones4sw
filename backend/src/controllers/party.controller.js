const { Party } = require("../database/associations");

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
}

module.exports = { PartyController };