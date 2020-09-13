const { Table } = require("../database/associations");

class TableController {
    static all(req, res) {
        Table
            .findAll()
            .then(data => {
                res.json(data);
            })
            .catch(e => {
                res.json(e);
            });
    }

    static find(req, res) {
        Table
            .findOne({
                where: { id: req.params.id }
            })
            .then(data => {
                res.json(data);
            })
            .catch(e => {
                res.json(e);
            });
    }

    static store(req, res) {
        const {
            code, number, open, close, precinct_id = null
        } = req.body;
        Table
            .create({
                code, number, open, close, precinct_id
            }, {
                fields: [
                    "code", "number", "open", "close", "precinct_id" 
                ]
            }).then(party => {
                res.json(party);
            }).catch(e => {
                res.json(e);
            });
    }

    static update(req, res) {
        const {
            code, number, open, close, precinct_id = null
        } = req.body;
        Table
            .update({
                code, number, open, close, precinct_id
            }, { where: { id: req.params.id } })
            .then(val => {
                res.json(val);
            })
            .catch(e => {
                res.json(e);
            });
    }

    static destroy(req, res) {
        Table
            .destroy({ where: { id: req.params.id } })
            .then(number => {
                res.json(number);
            })
            .catch(e => {
                res.json(e);
            });
    }
}

module.exports = { TableController };