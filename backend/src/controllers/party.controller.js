const { Party } = require("../models/party");

class PartyController {
    static all(req, res) {
        Party
            .findAll()
            .then(parties => {
                res.json(parties);
            })
            .catch((e) => {
                console.error(e);
                res.json(e);
            });
    }

    static find(req, res) {
        res.send("find party");
    }

    static store(req, res) {
        res.send("response");
    }

    static update(req, res) {
        res.send("update party");
    }

    static destroy(req, res) {
        res.send("destroy party");
    }
}

module.exports = { PartyController };