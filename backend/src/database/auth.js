const jwt = require("jsonwebtoken");

const { Person, Party } = require("./associations");

const verifyToken = (req, res, next) => {
    const token = req.headers[process.env.AUTH_HEADER];

    if (!token) {
        return res.json({ auth: false, data: "not authorized" });
    }

    let decoded = jwt.verify(token, process.env.SECRET);
    req.id = decoded.id;
    next();
}

const verifyLogin = (req, res, next) => {
    const { document, password } = req.body;
    Person
        .findOne({
            where: { document },
            include: [{ model: Party }]
        })
        .then(data => {
            if (document != password || !data)
                res.json({ auth: false });
            req.person = data;
            next();
        })
        .catch(err => res.json({ auth: false, err }));
}

module.exports = { verifyToken, verifyLogin }