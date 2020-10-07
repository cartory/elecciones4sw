const exceljs = require("exceljs");

const sequelize = require("../database/sequelize");
const { Person, Party } = require("../database/associations");

const getDate = () => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    return `${year}/${month}/${day}`;
}

class ExcelGenerator {
    static voters_xlsx(req, res) {
        Person.findAll({
            attributes: [
                "document", "lastname1", "lastname2", "names", "birthdate", "gender"
            ],
            order: [
                ["lastname1", "ASC"],
                ["lastname2", "ASC"]
            ]
        }).then(voters => {
            let workbook = new exceljs.Workbook();
            let worksheet = workbook.addWorksheet("votantes");
            worksheet.pageSetup.verticalCentered = true;
            worksheet.pageSetup.horizontalCentered = true;
            // EXCEL COLUMNS
            worksheet.columns = [
                { header: "Cédula", key: "document", width: 10 },
                { header: "Primer Apellido", key: "lastname1", width: 20 },
                { header: "Segundo Apellido", key: "lastname2", width: 20 },
                { header: "Nombre(s)", key: "names", width: 30 },
                { header: "Fecha de Nacimiento", key: "birthdate", width: 20 },
                { header: "Género", key: "gender", width: 10 },
            ];
            worksheet.addRows(voters);
            res.setHeader(
                "Content-Type",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            );
            res.setHeader(
                "Content-Disposition",
                "attachment; filename=votantes.xlsx"
            );

            return workbook.xlsx
                .write(res)
                .then(() => res.status(200).end())
                .catch(e => res.json(e));
        }).catch(e => res.json(e));
    }

    static async recount_xlsx(req, res) {
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

            const rows = [];
            let _whites = 0;
            let _nulls = 0;
            let _total = 0;
            query.forEach(e => {
                const { id, acronym, name, votes, whites, nulls } = e.dataValues;
                _total += parseInt(votes);
                _nulls += parseInt(nulls);
                _whites += parseInt(whites);
                rows.push({
                    id: id,
                    acronym: acronym.split(",")[0],
                    name: name,
                    votes: parseInt(votes)
                });
            });


            // CREATING THE EXCEL
            let workbook = new exceljs.Workbook();
            let worksheet = workbook.addWorksheet("votantes");
            worksheet.pageSetup.verticalCentered = true;
            worksheet.pageSetup.horizontalCentered = true;
            // EXCEL COLUMNS
            worksheet.columns = [
                {
                    header: "NRO", key: "id", width: 7, alignment: {
                        horizontal: "center",
                        readingOrder: "ltr",
                        vertical: "middle",
                        wrapText: true
                    }
                },
                {
                    header: "ACRÓNIMO", key: "acronym", width: 12, alignment: {
                        horizontal: "center",
                        readingOrder: "ltr",
                        vertical: "middle",
                        wrapText: true
                    },
                },
                {
                    header: "NOMBRE COMPLETO PARTIDO", key: "name", width: 80, alignment: {
                        horizontal: "center",
                        readingOrder: "ltr",
                        vertical: "middle",
                        wrapText: true
                    }
                },
                {
                    header: "#VOTOS", key: "votes", width: 20, alignment: {
                        horizontal: "center",
                        readingOrder: "ltr",
                        vertical: "middle",
                        wrapText: true
                    }
                },
            ];

            rows.push({}, {
                acronym: "BLANCO",
                name: "VOTOS EN BLANCO",
                votes: _whites,
            }, {
                acronym: "NULOS",
                name: "VOTOS NO VÁLIDOS Ó ANULADOS",
                votes: _nulls
            }, {}, {
                acronym: "TOTAL",
                name: "CANTIDAD DE VOTOS POR LOCALIDAD",
                votes: _total + _whites + _nulls,
            });

            worksheet.addRows(rows);

            res.setHeader(
                "Content-Type",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            );
            res.setHeader(
                "Content-Disposition",
                `attachment; filename=votos_${loc}-${getDate()}.xlsx`
            );

            return workbook.xlsx
                .write(res)
                .then(() => res.status(200).end())
                .catch(e => res.json(e));
        } catch (error) {
            res.json([]);
        }
    }
}

module.exports = { ExcelGenerator };