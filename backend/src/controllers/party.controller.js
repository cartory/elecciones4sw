const { Party, Person } = require("../database/associations");

class PartyController {
    static all(req, res) {
        Party
            .findAll()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static find(req, res) {
        Party
            .findOne({ where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static store(req, res) {
        const { name, icon, acronym, pdf } = req.body;
        Party
            .create({
                name, icon, acronym
            }, {
                fields: ["name", "icon", "acronym", "pdf"]
            })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static update(req, res) {
        const { name, icon, acronym, pdf } = req.body;
        Party
            .update({
                name, icon, acronym, pdf
            }, { where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static destroy(req, res) {
        Party
            .destroy({ where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static candidates(req, res) {
        const { acro } = req.params;
        Party
            .findAll({
                where: { acronym: acro },
                include: [{
                    model: Person,
                    attributes: [
                        "location_id", "type", "document", "lastname1", "lastname2", "names", "birthdate", "gender"
                    ],
                    order: [
                        ["location_id", "DESC"],
                        ["position", "DESC"],
                        ["lastname1", "DESC"],
                        ["lastname2", "DESC"],
                        ["type", "DESC"],
                    ]
                }]
            })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
    
}

module.exports = { PartyController };