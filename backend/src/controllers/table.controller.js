const { Table } = require("../database/associations");

class TableController {
    static all(req, res) {
        Table
            .findAll()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static find(req, res) {
        Table
            .findOne({ where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static store(req, res) {
        const {
            code, number, open, close, precinct_id = null
        } = req.body;
        Table
            .create({
                code, number, open, close, precinct_id
            }, {
                fields: ["code", "number", "open", "close", "precinct_id"]
            })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static update(req, res) {
        const {
            code, number, open, close, precinct_id = null
        } = req.body;
        Table
            .update({
                code, number, open, close, precinct_id
            }, { where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    static destroy(req, res) {
        Table
            .destroy({ where: { id: req.params.id } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}

module.exports = { TableController };