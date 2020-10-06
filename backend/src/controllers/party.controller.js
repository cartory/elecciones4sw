const sequelize = require("../database/sequelize");
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
                name, icon, acronym, pdf
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

    static async byLocation(req, res) {
        const { loc } = req.params;
        try {
            const query = await sequelize.query(`
                select 
                    p.id, p.acronym, p.name, 
                    sum(v.amount) as votes, sum(v.whites) as whites, sum(v.nulls) as nulls
                from
                    public."Parties" 	as p, public."Votes" 		as v, 
                    public."Tables" 	as t, public."Locations" 	as l
                where	p.id 			= v.party_id 
    
                and 	v.table_id 		= t.id
                and		t.location_id 	= l.id
                and     l.name like '%${loc.toLowerCase()}%'
                group by p.id
                order by p.id`,
                {
                    model: Party,
                    mapToModel: true,
                }
            );
            res.json(query);
        } catch (error) {
            res.json([]);   
        }
    }
}

module.exports = { PartyController };