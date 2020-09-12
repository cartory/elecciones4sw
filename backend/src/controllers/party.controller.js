// const 

class PartyController {
    static all(req, res) {
        res.send("get all parties");
    }

    static find(req, res) {
        res.send("find party");
    }

    static store(req, res) {
        res.send("create party");
    }

    static update(req, res) {
        res.send("update party");
    }

    static destroy(req, res) {
        res.send("destroy party");
    }
}

module.exports = { PartyController };