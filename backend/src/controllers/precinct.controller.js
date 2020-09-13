const { Precinct } = require("../models/precinct");

class PrecinctController {
    static all(req, res) {
        Precinct
            .findAll()
            .then(data => {
                res.json(data);
            }).catch(e => {
                res.json(e);
            });
    }

    static find(req, res) {
        Precinct
            .findOne({
                where: { id: req.params.id }
            }).then(data => {
                res.json(data);
            }).catch(e => {
                res.json(e);
            });
    }

    static store(req, res) {
        const {
            nombre, localidad_id = null
        } = req.body;

        Precinct
            .create({
                nombre, localidad_id
            }, {
                fields: ["nombre", "localidad_id"]
            }).then(data => {
                res.json(data);
            }).catch(e => {
                res.json(e);
            });
    }

    static update(req, res) {
        const {
            nombre, localidad_id
        } = req.body;
        Precinct
            .update({
                nombre, localidad_id
            }, { where: { id: req.params.id } })
            .then(val => {
                res.json(val);
            }).catch(e => {
                res.json(e);
            });
    }

    static destroy(req, res) {
        Precinct
            .destroy({ where: { id: req.params.id } })
            .then(number => {
                res.json(number);
            }).catch(e => {
                res.json(e);
            });
    }
}

module.exports = { PrecinctController };