const { Party } = require("../../src/database/associations");

class PartySeeder {
    // seed parties
    static async seed() {
        const names = [
            "Comunidad Ciudadana",
            "Frente Para La Victoria",
            "Movimiento Tercer Sistema",
            
            "Unidad Cívica Solidaridad",
            "Movimiento Al Socialismo Instrumento Político Por La Soberanía De Los Pueblos",
            "Bolivia dijo No #21F",
            
            "Partido Demócrata Cristiano",
            "Movimiento Nacionalista Revolucionario",
            "Partido de Acción Nacional Boliviano",
        ];

        const icons = [
            "https://upload.wikimedia.org/wikipedia/commons/6/6b/ALIANZA_COMUNIDAD_CIUDADANA.jpg",
            "data:image/png;base64,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",
            "https://scontent.fvvi1-2.fna.fbcdn.net/v/t1.0-9/23905749_440461823018331_7633752960893456010_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=rZhoKpUWTyYAX8BVBAV&_nc_ht=scontent.fvvi1-2.fna&oh=31facca595e5b936ad47d278fc73455d&oe=5FA30055",

            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/UCS_LOGO.png/800px-UCS_LOGO.png",
            "data:image/png;base64,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",
            "https://scontent.fvvi1-1.fna.fbcdn.net/v/t1.0-9/68751329_3175276902513155_8194694276739760128_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=p8IDxdY1u8MAX9YM-A4&_nc_ht=scontent.fvvi1-1.fna&oh=f29930459b90cbd42287bcc0cd5eee1b&oe=5FA37D74",
            
            "https://upload.wikimedia.org/wikipedia/commons/0/02/PARTIDO_DEMOCRATA_CRISTIANO.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/9/91/MOVIMIENTO_NACIONALISTA_REVOLUCIONARIO.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/b3/Partido_de_Acci%C3%B3n_Nacional_Boliviano_%28PAN-BOL%29.jpg",
        ];

        const acros = [
            "CC,C.C.",
            "FPV",
            "MTS",

            "UCS",
            "MAS-IPSP,MAS IPSP",
            "21F,21 F",

            "PDC",
            "MNR",
            "PAN-BOL,PAN-BOOL"
        ];

        const pdfs = [
            "https://firebasestorage.googleapis.com/v0/b/eleccion4sw.appspot.com/o/CC_candidatos_2019.pdf?alt=media&token=6e64f6ea-bf57-43c6-8bd1-e25d2811df17",
            "https://firebasestorage.googleapis.com/v0/b/eleccion4sw.appspot.com/o/FPV_candidatos_2019.pdf?alt=media&token=0f6e3d65-9d4d-41ad-98fc-6593e99ecc22",
            "https://firebasestorage.googleapis.com/v0/b/eleccion4sw.appspot.com/o/MTS_candidatos_2019.pdf?alt=media&token=7fa3e124-228d-4ff0-9917-e502651e604b",

            "https://firebasestorage.googleapis.com/v0/b/eleccion4sw.appspot.com/o/UCS_candidatos_2019.pdf?alt=media&token=29d37c6b-6734-4372-9c94-a0b1ad77758d",
            "https://firebasestorage.googleapis.com/v0/b/eleccion4sw.appspot.com/o/MAS_candidatos_2019.pdf?alt=media&token=b544142e-7fe3-4a28-87d7-809315efbe4b",
            "https://firebasestorage.googleapis.com/v0/b/eleccion4sw.appspot.com/o/21F_candidatos_2019.pdf?alt=media&token=1b1bd832-00e6-449c-baa7-0e4fa00644b2",

            "https://firebasestorage.googleapis.com/v0/b/eleccion4sw.appspot.com/o/PDC_candidatos_2019.pdf?alt=media&token=5102eb11-8e12-4c97-8245-8cd7ffe01951",
            "https://firebasestorage.googleapis.com/v0/b/eleccion4sw.appspot.com/o/MNR_candidatos_2019.pdf?alt=media&token=1ec0bfa1-cf22-413a-9966-8728409b69ee",
            "https://firebasestorage.googleapis.com/v0/b/eleccion4sw.appspot.com/o/PANBOL_candidatos_2019.pdf?alt=media&token=f5fb5d60-8e40-4820-a7af-a0bb75e32af7",
        ];

        for (let i = 0; i < names.length; i++) {
            await Party.create({
                name: names[i],
                icon: icons[i],
                acronym: acros[i],
                pdf: pdfs[i],
            }, {
                fields: ["name", "icon", "acronym", "pdf"],
                isNewRecord: true,
            });
        }
    }
}

module.exports = { PartySeeder };