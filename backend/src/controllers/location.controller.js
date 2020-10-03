const { Location } = require("../database/associations");

class LocationController {
    static all(req, res) {
        Location
            .findAll()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static find(req, res) {
        Location
            .findOne({ where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static get(req, res) {
        Location
            .findOne({
                where: { id: req.params.id },
                include: [{ model: Location }]
            })
            .then(data => { res.json(data); })
            .catch(err => res.json(err));
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
            })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static update(req, res) {
        const {
            type, name, district = null, location_id = null
        } = req.body;
        Location
            .update({
                type, name, district, location_id
            }, { where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static destroy(req, res) {
        Location
            .destroy({ where: { id: req.params.id } })
            .then(number => res.json(number))
            .catch(e => res.json(e));
    }
}

module.exports = { LocationController };