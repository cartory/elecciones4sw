const { Location } = require("../database/associations");

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
            }).then(loc => {
                res.json(loc);
            }).catch(e => {
                res.json(e);
            });
    }

    static store(req, res) {
        const {
            type, name, district = null, location_id = null
        } = req.body;

        Location
            .create({
                type, name, district, location_id
            }, {
                fields: [
                    "type", "name", "district", "location_id",
                ]
            }).then(loc => {
                res.json(loc);
            }).catch(e => {
                res.json(e);
            });
    }

    static update(req, res) {
        const {
            type, name, district = null, location_id = null
        } = req.body;
        Location
            .update({
                type, name, district, location_id
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