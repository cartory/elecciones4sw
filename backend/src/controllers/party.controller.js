const { Party } = require("../models/party");

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
        const { nombre, icono, sigla } = req.body;
        Party
            .create({
                nombre, icono, sigla
            }, {
                fields: ["nombre", "icono", "sigla"]
            }).then(party => {
                res.json(party);
            }).catch(e => {
                res.json(e);
            });
    }

    static update(req, res) {
        const { nombre, icono, sigla } = req.body;
        Party
            .update({
                nombre, icono, sigla
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