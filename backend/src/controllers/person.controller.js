const { Person } = require("../database/associations");

class PersonController {
    static all(req, res) {
        Person
            .findAll({
                attributes: [
                    "document", "lastname1", "lastname2", "names", "birthdate", "gender"
                ],
                order: [
                    ["lastname1", "ASC"],
                    ["lastname2", "ASC"]
                ]
            })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}

module.exports = { PersonController };