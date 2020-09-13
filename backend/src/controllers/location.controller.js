const { Location } = require("../models/location");

class LocationController {
    static all(req, res) {
        Location
            .findAll()
            .then(locs => {
                res.json(locs);
            }).catch(e => {
                res.json(e);
            });
    }

    static find(req, res) {
        Location
            .findOne({
                where: { id: req.params.id }
            }).then(location => {
                res.json(location);
            }).catch(e => {
                res.json(e);
            });
    }

    static store(req, res) {
        const {
            tipo, nombre, circunscripcion = null, localidad_id = null
        } = req.body;

        Location
            .create({
                tipo, nombre, circunscripcion, localidad_id
            }, {
                fields: [
                    "tipo", "nombre", "circunscripcion", "localidad_id",
                ]
            }).then(Location => {
                res.json(Location);
            }).catch(e => {
                res.json(e);
            });
    }

    static update(req, res) {
        const {
            tipo, nombre, circunscripcion, localidad_id
        } = req.body;
        Location
            .update({
                tipo, nombre, circunscripcion, localidad_id
            }, { where: { id: req.params.id } })
            .then(val => {
                res.json(val);
            }).catch(e => {
                res.json(e);
            });
    }

    static destroy(req, res) {
        Location
            .destroy({ where: { id: req.params.id } })
            .then(number => {
                res.json(number);
            }).catch(e => {
                res.json(e);
            });
    }
}

module.exports = { LocationController };