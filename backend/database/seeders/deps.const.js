const beni = [
    [
        "Cercado",
        [
            ["Trinidad", ["Trinidad"]],
            ["San Javier", ["San Javier", "San Pedro"]]
        ]
    ],
    [
        "Antonio Vaca Diez",
        [
            ["Riberalta", ["Concepción", "Florida", "Ivon", "Riberalta"]],
            ["Guayaramerín", ["Guayaramerín", "Yata", "Cachuela Esperanza", "Villa Bella"]]
        ]
    ],
    [
        "General José Ballivián Segurola",
        [
            ["Santos Reyes", ["Cavinas", "Santos Reyes"]],
            ["San Borja", ["San Borja"]],
            ["Santa Rosa", ["Santa Rosa"]],
            ["Rurrenabaque", ["Rurrenabaque"]]
        ]
    ],
    [
        "Yacuma",
        [
            ["Santa Ana del Yacuma", ["Santa Ana del Yacuma", "Jose A. de Palacios"]],
            ["Exaltación", ["Exaltación"]]
        ]
    ],
    [
        "Mojos",
        [
            ["San Ignacio de Moxos", ["San Ignacio de Moxos", "San Lorenzo", "San Francisco"]],
        ]
    ],
    [
        "Marbán",
        [
            ["Nuestra Señora de Loreto", ["Limoque", "San Antonio", "Nuestra Señora de Loreto", "Sachoreje"]],
            ["San Andrés", ["Peroto", "San Andrés", "San Lorenzo"]],
        ]
    ],
    [
        "Mamoré",
        [
            ["San Joaquín", ["San Joaquín", "More"]],
            ["San Ramón", ["San Ramón", "Las Pampitas"]],
            ["Puerto Siles", ["Puerto Siles", "Alejandría", "Vigo"]]
        ]
    ],
    [
        "Iténez",
        [
            ["Nuestra Señora de Magdalena", ["Nuestra Señora de Magdalena", "Orobayaya", "Versalles"]],
            ["Baures", ["Baures", "Motegua"]],
            ["Huacaraje", ["Huacaraje", "El Carmen"]]
        ]
    ]
];

const chuquisaca = [
    ["Oropeza", ["Sucre", "Yotala", "Poroma"]],
    ["Juana Azurduy", ["Azurduy", "Tarvita"]],
    ["Jaime Zuáñez", ["Villa Zudáñez", "Presto", "Villa de Mojocoya", "Icla"]],
    ["Tomina", ["Padilla", "Tomina", "Sopachuy", "Villa Alcalá", "El Villar"]],
    ["Hernando Siles", ["Monteagudo", "Huacareta"]],
    ["Yamparáez", ["Tarabuco", "Yamaparáez"]],
    ["Nor Cinti", ["Camargo", "San Lucas", "Incahuasi", "Villa Charcas"]],
    ["Sud Cinti", ["Villa Abecia", "Culpina", "Las Carreras"]],
    ["Belisario Boeto", ["Villa Serrano"]],
    ["Luis Calvo", ["Villa Vaca Guzmán", "Huacaya", "Macaharetpi"]]
];

const cochabamba = [
    ["Arani", ["Arani", "Vacas"]],
    ["Arque", ["Arque", "Tacopaya"]],
    ["Ayopaya", ["Independencia", "Morochata", "Cocapata"]],
    ["Bolívar", ["Bolívar"]],
    ["Campero", ["Aiquile", "Omereque", "Pasorapa"]],
    ["Capinota", ["Capinota", "Santiváñez", "Sicaya"]],
    ["Carrasco", ["Totora", "Chimoré", "Entre Ríos", "Pocona", "Pojo", "Puerto Villarroel"]],
    ["Cercado", ["Cochabamba"]],
    ["Chapare", ["Sacaba", "Colomi", "Villa Tunari"]],
    ["Arce", ["Tarata", "Anzaldo", "Arbieto", "Sacabamba"]],
    ["Germán Jordán", ["Cliza", "Toco", "Tolata"]],
    ["Mizque", ["Mizque", "Alalay", "Vila Vila"]],
    ["Punata", ["Cuchumuela", "Cuchumuela", "San Benito", "Tacachi", "Villa Rivero"]],
    ["Quillacollo", ["Quillacollo", "Colcapirhua", "Sipe Sipe", "Tiquipaya", "Vinto"]],
    ["Tapacarí", ["Tapacarí"]],
    ["Tiraque", ["Tiraque", "Shinahota"]]
];

const lapaz = [
    ["Abel Itrurralde", ["Ixiamas", "San Buenaventura"]],
    ["Aroma", ["Sica Sica", "Ayo Ayo", "Calamarca", "Collana", "Colquencha", "Patacamaya", "Umala"]],
    ["Bautista Saavedra", ["General Juan José Pérez(Charazani)", "Curva"]],
    ["Camacho", ["Puerto Acosta", "Mocomoco", "Puerto Carabuco", "Escoma", "Humanata"]],
    ["Caranavi", ["Caranavi", "Alto Beni"]],
    ["Franz Tamayo", ["Apolo", "Pelechuco"]],
    ["Gualberto Villarroel", ["San Pedro de Curahuara", "Chacarilla", "Papel Pampa"]],
    ["Ingavi", ["Viacha", "Desaguadero", "Guaqui", "Jesús de Machaca", "San Andrés de Machaca", "Taraco", "Tiahuanaco"]],
    ["Inquisivi", ["Inquisivi", "Cajuata", "Colquiri", "Ichoca", "Licoma Pampa", "Quime"]],
    ["José Manuel Pando", ["Santiago de Machaca", "Catacora"]],
    ["Larecaja", ["Sorata", "Combaya", "Guanay", "Mapiri", "Quibaya", "Tacacoma", "Teoponte", "Tipuani"]],
    ["Loayza", ["Luribay", "Cairoma", "Malla", "Sapahaqui", "Yaco"]],
    ["Los Andes", ["Pucarani", "Batallas", "Laja", "Puerto Pérez"]],
    ["Manco Kapac", ["Copacabana", "San Pedro de Tiquina", "Tito Yupanqui"]],
    ["Muñecas", ["Chuma", "Aucapata", "Ayata"]],
    ["Murillo", ["Palca", "Achocalla", "El Alto", "La Paz", "Mecapaca"]],
    ["Nor Yungas", ["Coroico", "Coripata"]],
    ["Omasuyos", ["Achacachi", "Ancoraimes", "Chua Cocani", "Huarina", "Huatajata", "Santiago de Huata"]],
    ["Pacajes", ["Coro Coro", "Calacoto", "Caquiaviri", "Charaña", "Comanche", "Nazacara de Pacajes", "Santiago de Callapa", "Waldo Ballivián"]],
    ["Sud Yungas", ["Chulumani", "Irupana", "La Asunta", "Palos Blancos", "Yanacachi"]]
];

const oruro = [
    ["Sabaya", ["Sabaya", "Chipaya", "Coipasa"]],
    ["Carangas", ["Corque", "Choquecota"]],
    ["Cercado", ["Oruro", "Caracollo", "El Choro", "Soracachi"]],
    ["Eduardo Abaroa", ["Challapata", "Santuario de Quillacas"]],
    ["Ladislao Cabrera", ["Salinas de Garci Mendoza", "Pampa Aullagas"]],
    ["Litoral", ["Huachacalla", "Cruz de Machacamarca", "Escara", "Esmeralda", "Yunguyo del Litoral"]],
    ["Mejillones", ["La Rivera", "Carangas", "Todos Santos"]],
    ["Nor Carangas", ["Santiago de Huayllamarca"]],
    ["Pantaleón Dalence", ["Villa Huanuni", "Machacamarca"]],
    ["Poopó", ["Villa Poopó", "Antequera", "Pazña"]],
    ["Sajama", ["Curahuara de Carangas", "Turco"]],
    ["San Pedro de Totora", ["Totora"]],
    ["Saucarí", ["Toledo"]],
    ["Sebastián Pagador", ["Santiago de Huarí"]],
    ["Sud Carangas", ["Santiago de Andamarca", "Belén de Andamarca"]],
    ["Tomás Barrón", ["Eucaliptus"]]
];

const pando = [
    ["Abuná", ["Santa Rosa del Abuná", "Ingavi"]],
    ["Federico Román", ["Nueva Esperanza", "Villa Nueva", "Santos Mercado"]],
    ["Madre de Dios", ["Puerto Gonzalo Moreno", "San Lorenzo", "Sena"]],
    ["Manuripi", ["Puero Rico", "San Pedro", "Filadelfia"]],
    ["Nicolás Suárez", ["Cobija", "Porvenir", "Bolpebra", "Bella Flor"]]
];

const potosi = [
    ["Alonso de Ibáñez", ["Sacaca", "Caripuyo"]]
    ["Antonio Quijarro", ["Tomave", "Porco"]],
    ["Bernardino Bilbao", ["Arampampa", "Acasio"]],
    ["Charcas", ["San Pedro de Buena Vista", "Toro toro", "Colquechaca", "Ravelo"]],
    ["Chayanta", ["Pocoata", "Ocurí", "San Pedro de Macha", "Betanzos"]],
    ["Cornelio Saavedra", ["Chaqui", "Tacobamba"]],
    ["Daniel Campos", ["Llica", "Talhua"]],
    ["Enrique Baldivieso", ["San Agustín", "Puna"]],
    ["Jose María Linares", ["Caiza D", "Ckochas"]],
    ["Modesto Omiste", ["Villazón"]],
    ["Nor Chichas", ["Cotagaita", "Vitichi", "Colcha K"]],
    ["Nor Lípez", ["San Pedro de Quemes", "Uncía", "Chayanta"]],
    ["Rafael Bustillo", ["Llallagua", "Chuquiuta Ayllu Jucumani"]],
    ["Sur Chichas", ["Tupiza", "Atocha", "San Pablo de Lípez"]],
    ["Sur Lípez", ["San Antonio de Esmoruco", "Mojinete", "Potosí"]],
    ["Tomás Frías", ["Tinguipaya", "Yocalla", "Urmiri"]]
];

const santacruz = [
    ["Andrés Ibañez", ["Santa Cruz de la Sierra", "Cotoca", "Porongo/Ayacucho", "La Guardia", "El Torno"]],
    ["Ángel Sandoval", ["San Matías"]],
    ["Caballero", ["Comarapa", "Saipina"]],
    ["Chiquitos", ["San José de Chiquitos", "Pailón", "Roboré"]],
    ["Cordillera", ["Lagunillas", "Charagua", "Cabezas", "Cuevo", "Gutiérrez", "Camiri", "Boyuibe"]],
    ["Florida", ["Samaipata", "Pampagrande", "Mairana", "Quirusillas"]],
    ["Germán Busch", ["Puerto Suárez", "Puerto Quijarro", "El Carmen Rivero Tórrez"]],
    ["Guarayos", ["Ascensión de Guarayos", "Urubichá", "El Puente"]],
    ["Ichilo", ["Buena Vista", "San Carlos", "Yapacaní", "San Juan de Yapacaní"]],
    ["Ñuflo de Chaves", ["Concepción", "San Javier", "San Ramón", "San Julián", "San Antonio de Lomerío", "Cuatro Cañadas"]],
    ["Obispo Santistevan", ["Montero", "General Saavedra", "Mineros", "Fernández Alonso", "San Pedro"]],
    ["Sara", ["Portachuelo", "Santa Rosa del Sara", "Colpa Bélgica"]],
    ["Vallegrande", ["Vallegrande", "El Trigal", "Moro Moro", "Postrervalle"]],
    ["Velasco", ["San Ignacio de Velasco", "San Miguel de Velasco", "San Rafael de Velasco"]],
    ["Warnes", ["Warnes", "Okinawa I"]]
];

const tarija = [
    ["Ariceto Arce", ["Bermejo", "Padcaya"]],
    ["Burdet O'Connor", ["Entre Ríos"]],
    ["Cercado", ["Tarija"]],
    ["Eustaquio Méndez", ["San Lorenzo", "El Puente"]],
    ["Gran Chaco", ["Caraparí", "Villamontes", "Yacuiba"]],
    ["José María Avilés", ["Uriondo", "Yunchará"]]
];

const bolivia = [
    ["Beni", beni],
    ["Chuquisaca", chuquisaca],
    ["Cochabamba", cochabamba],
    ["La Paz", lapaz],
    ["Oruro", oruro],
    ["Pando", pando],
    ["Potosi", potosi],
    ["Santa Cruz", santacruz],
    ["Tarija", tarija]
]

module.exports = {
    bolivia,
    beni
};