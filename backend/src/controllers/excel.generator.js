const exceljs = require("exceljs");
const { Person } = require("../database/associations");

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
}

module.exports = { ExcelGenerator };