const jwt = require("jsonwebtoken");

const { Person } = require("../database/associations");
const { Party } = require("../models/party");

const generate_token = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: 3600 });
}

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

    static register(req, res) {
        const {
            document, lastname1, lastname2, names,
            birthdate, gender, delegate = false, party_id = null
        } = req.body;

        Person
            .create({
                document, lastname1, lastname2, names,
                birthdate, gender, delegate, party_id
            }, {
                fields: [
                    "document", "lastname1", "lastname2", "names",
                    "birthdate", "gender", "delegate", "party_id"
                ],
                include: [{ model: Party }]
            })
            .then(data => {
                res.json({
                    auth: true,
                    token: generate_token(data.dataValues.id),
                    data
                });
            })
            .catch(err => res.json({ auth: false, err }));
    }

    static login(req, res) {
        res.json({
            auth: true,
            token: generate_token(req.person.dataValues.id),
            data: req.person
        });
    }

    static profile(req, res) {
        Person
            .findOne({
                where: { id: req.id },
                include: [{ model: Party }]
            })
            .then(data => {
                if (!data)
                    res.json({ auth: false, message: "not Found" });
                res.json({ auth: true, data });
            })
            .catch(err => res.json({ auth: false, err }));
    }

    static count(req, res) {
        Person
            .count()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}

module.exports = { PersonController };