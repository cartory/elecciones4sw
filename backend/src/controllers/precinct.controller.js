const { Precinct } = require("../database/associations");

class PrecinctController {
    static all(req, res) {
        Precinct
            .findAll()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static find(req, res) {
        Precinct
            .findOne({ where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static store(req, res) {
        const { name, location_id = null } = req.body;

        Precinct
            .create({
                name, location_id
            }, {
                fields: ["name", "location_id"]
            })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static update(req, res) {
        const { name, location_id = null } = req.body;
        Precinct
            .update({
                name, location_id
            }, { where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static destroy(req, res) {
        Precinct
            .destroy({ where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}

module.exports = { PrecinctController };