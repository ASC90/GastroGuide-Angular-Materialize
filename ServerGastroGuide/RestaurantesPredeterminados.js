var restaurantesArray = [{
    restaurante: "El Celler",
    nombre: "",
    apellidos: '',
    genero: '',
    email: 'celler@gastro.es',
    password: '1234',
    telefono: 678907654,
    localidad: "Barcelona",
    valoracion: 5,
    tipoCocinaID: [8],
    tipoAmbienteID: [0, 3],
    adresa: "Avinguda Diagonal, 423 08036 Barcelona",
    tipo: ["Mediterránea", "Con Amigos", "Moderno"],
    imagen: "/assets/img/celler.jpg",
    menu: [
        {
            titol: "Entrantes",
            platos: "Duo de provolone (Trufa y virutas de jamón ibérico de bellota (5j) y sobrasada de menorca y miel) Carpaccio de ternera y escamas de parmesano y Ensalada Vino Tinto: Verde, salmón, ventresca de atún Ortiz, tomate de temporada, aguacate y queso de cabra con balsámico de higos"
        },
        {
            titol: "Primeros",
            platos: "Tagliata de entrecot con rúcula y parma, Morro de Bacalao con salsa de miel pasas y piñones y Steak tartar clásico"
        },
        {
            titol: "Segundos",
            platos: "Duo de canelones rellenos de foie y trufa, Solomillo de cerdo a la mostaza, Bacalao a la muselina de ajo con chips de verdura y Sashimi de salmón ahumado con un toque de miel, sésamo y salsa de eneldo."
        },
        {
            titol: "Postres",
            platos: "Tarta tatín de manzana,Queso manchego curado con membrillo y Brownie de 3 chocolates con helado de vainilla."
        },

        {
            titol: "Menú semanal de 40 €",
            platos: "Precio por persona (IVA incluido) y bebidas no incluidas. Se te solicitar una señal de 20 € directamente desde el restaurante para confirmar tu reserva."
        }
    ],
    opiniones: [
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Enrique M.",
            comentario: "El servicio bastante lento. La comida tanto los primeros para compartir como los provolone nada especial, al igual que los canelones que pedimos de segundo plato. La carne nada del otro mundo, muy normal todo. Es caro, calidad, servicio y precio no han estado a la altura de lo esperado.",
            valoracion: "3,5"
        },
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Mariona V.",
            comentario: "Muy bueno todo, volveremos.",
            valoracion: "6"
        },
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Alba C.",
            comentario: "Todo bueno. Justo lo que esperábamos encontrar de tantas veces que hemos ido a comer.",
            valoracion: "10"
        },
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Antonio P.",
            comentario: "Lo mejor la ensalada de vino tinto y la Tagliata.",
            valoracion: "7,3"
        }
    ],
    promociones:
        {
            promocion: "-35% en Cuenta final",
            descripcion: "Bebidas incluidas, menús no incluidos.Esta promoción se aplica sin consumo mínimo, ni restricciones de platos, para que comas y bebas lo que te apetezca y solamente prestes atención a disfrutar."
        },

    recetas:
        {
            imagen: "/assets/img/fideua.jpg",
            nombre: "Fideua con gambas al estilo celler",
            preparacion: "Descripción",
            ingredientes: ["200g gambas", "300g calamar", "2 dientes de ajo", "1 pimiento verde", "150g cebolla", "1tsp pimentón", "10 ramitas azafrán", "1tbsp aceite de oliva", "150ml de pescado", "350g fideos nº3"]
        }
},
{
    restaurante: "Guzzo",
    nombre: '',
    apellidos: '',
    genero: '',
    email: 'guzzo@gastro.es',
    password: '1234',
    telefono: 619876543,
    localidad: "Barcelona",
    valoracion: 7,
    tipoCocinaID: [5, 12],
    tipoAmbienteID: [1, 6],
    adresa: "Carrer dels Arcs, 5 08002 Barcelona",
    tipo: ["Mexicano", "Fusión", "Romántico", "Para grupos"],
    imagen: "/assets/img/rest3.jpg",
    menu: [
        {
            titol: "Entrantes",
            platos: "Nachos especiales con carne, guacamole, queso con chorizo"
        },
        {
            titol: "Primeros",
            platos: "Ceviche de pescado, rajas con queso, cóctel de camarón"
        },
        {
            titol: "Segundos",
            platos: "Cochinita pibil, tacos de arrachera, tacos gobernador"
        },
        {
            titol: "Postres",
            platos: "Cheesecake de mango o fresa o maracuyá con helados artesanos"
        },
        {
            titol: "Menú grupos 25€",
            platos: "Los platos arriba mencionados podrán cambiar en función del mercado y aparecen indicados a modo de ejemplo."
        }
    ], opiniones: [
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Marc R.",
            comentario: "Carta extensa y variada, tacos muy buenos! Atencion perfecta, calidad-precio genial. Volveremos!",
            valoracion: "8"
        },
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Mariona V.",
            comentario: "Muy bueno todo, volveremos.",
            valoracion: "6"
        },
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Isidro B.",
            comentario: "Comida muy buena pero nos hicieron esperar muchísimo y solo había 3 mesas... Y cuando pedimos más tortillas para acompañar la comida nos dijeron que nos las cobrarían como suplemento. Cuando llevas más de media hora entre el 1ero y el 2do, se agradece un gesto de amabilidad. Además es que te dabas cuenta de que eran conscientes que no era normal la espera. En fin, supongo que no saben mucho de hostelería. Eso sí, claramente no fue con mala intención. Y por eso, bueno y porque la comida me encantó, pienso volver. Soy partidario de que a veces necesitamos segundas oportunidades.",
            valoracion: "7,5"
        },
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "David C.",
            comentario: "Servicio muy atento. Con el descuento una excelente calidad/precio.",
            valoracion: "8"
        }
    ],
    promociones:
        {
            promocion: "-40% en Carta",
            descripcion: "Menús y bebidas no incluidos. Esta promoción se aplica sin consumo mínimo, ni restricciones de platos, para que comas lo que te apetezca y solamente prestes atención a disfrutar. Válida en la franja horaria seleccionada."
        }
}, {
    restaurante: "Opera",
    nombre: "",
    apellidos: '',
    genero: '',
    email: 'opera@gastro.es',
    password: '1234',
    telefono: 622657875,
    localidad: "Barcelona",
    valoracion: 6,
    tipoCocinaID: [8, 12],
    tipoAmbienteID: [5, 6],
    adresa: "Plaza Molina, 2 08006 Barcelona",
    tipo: ["Mediterranea", "Fusión", "De negocios", "Para grupos"],
    imagen: "/assets/img/rest2.jpg",
    menu: [
        {
            titol: "Entrantes",
            platos: "Nachos OPERA, hummus casero con crudites de verduras"
        },
        {
            titol: "Primeros",
            platos: "Tartar de salmon, pulpo a la parmentier, tataki de ternara"
        },
        {
            titol: "Segundos",
            platos: "Bruschette de salmon marinado y mozzarella, arroz caldoso de pescado, parmiggiana vegetal (de berenjena, tomate y quesos)"
        },
        {
            titol: "Postres",
            platos: "Coulant de chocolate con helado de vainilla, New York cheese cake"
        },

        {
            titol: "Menú diario 13€",
            platos: "Precio por persona (IVA incluido). Bebidas no incluidas."
        }
    ],
    opiniones: [
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Isidro B.",
            comentario: "Muy recomendable! La atención del servicio es inmejorable, te hacen sentir muy a gusto. La comida rica y a buen precio.",
            valoracion: "7"
        },
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Ester P.",
            comentario: "TLocal agradable. Buena comida. Volveremos.",
            valoracion: "8"
        },
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Isidro B..",
            comentario: "Muy recomendable! La atención del servicio es inmejorable, te hacen sentir muy a gusto. La comida rica y a buen precio.",
            valoracion: "7"
        },
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Lluisa G.",
            comentario: "Larga espera y en los 2 platos d carne, no solo la racion era muy justa si no que era todo grasa y tendones por lo que no quedaba nada que comer. Eso si, los postres exquisitos!",
            valoracion: "5"
        }
    ],
    promociones:
        {
            promocion: "-20% en la cuenta final",
            descripcion: "Esta promoción se aplica sin consumo mínimo, ni restricciones de platos, para que comas y bebas lo que te apetezca y solamente prestes atención a disfrutar. Válida en la franja horaria seleccionada."
        }
},
{
    restaurante: "Piazza Navona",
    nombre: "",
    apellidos: '',
    genero: '',
    email: 'piazza@gastro.es',
    password: '1234',
    telefono: 689654321,
    localidad: "Barcelona",
    valoracion: 8,
    tipoCocinaID: [4, 12],
    tipoAmbienteID: [0, 3, 6],
    adresa: "Plaça de Sant Bernat Calbó, 6 08005 Barcelona España",
    tipo: ["Italiana", "Con Amigos", "Moderno", "Para grupos"],
    imagen: "/assets/img/rest1.jpg",
    menu: [
        {
            titol: "Entrantes",
            platos: "Misto de verduras y mozzarella fritas, surtido de embutidos y quesos italianos"
        },
        {
            titol: "Primeros",
            platos: "Agnolotti in Brodo (pasta casera rellena de carne de ternera en su proprio caldo) Ravioli ricotta e spinaci (pasta casera rellena de ricotta y espinacas con un toque de mantequilla y salvia)"
        },
        {
            titol: "Segundos",
            platos: "Cosciotto di agnello al forno con patate alla duchessa e verdurine al vapore (Pierna de cordero al horno con patatas a la duquesa y verduritas al vapor) Parmigiana di patate, scamorza e zucchine (Parmigiana de patatas, queso scamorza y calabacin)"
        },
        {
            titol: "Postres",
            platos: "Tiramisu al Pandoro, pasticceria mista fruta seca, cafe' y limoncello"
        },

        {
            titol: "Menú de Navidad 45 €",
            platos: "Precio por persona (IVA incluido). Bebidas no incluidas. El 25/12 en comida y cena. Se te solicitará una señal de 25 € directamente desde el restaurante para confirmar tu reserva."
        }
    ],
    opiniones: [
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Laia S.",
            comentario: "Todo muuy rico en un italiano diferente! y muuy buen de precio!",
            valoracion: "8"
        },
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "L.O.",
            comentario: "Excelente !!!!",
            valoracion: "9"
        },
        {
            imagen: "/assets/img/GastroLover.png",
            nombre: "Raquel G.",
            comentario: "Excelente atención del personal muy amables y mucha simpatía en todo momento, el entrante que tenían en sugerencias nos sorprendió, las pizzas muy buenas, masa fina, crujiente y la calidad en los ingredientes se notaba. Los postres el broche final a una velada perfecta. Sin duda repetiremos.",
            valoracion: "10"
        },
    ],
    promociones:
        {
            promocion: "-40% en Carta",
            descripcion: "Menu y bebida no incluida. Esta promoción se aplica sin consumo mínimo, ni restricciones de platos, para que comas lo que te apetezca y solamente prestes atención a disfrutar. No aplicable en terraza"
        },
    recetas:
        {
            imagen: "/assets/img/sardesaor.jpg",
            nombre: "Sarde in saor",
            preparacion: "Descripción",
            ingredientes: ["600g sardinas", "40g pasas", "40g piñones", "1 pizca de sal", "2 cebollas", "1tsp azucar", "aceite de oliva", "2tbsp harina", "200ml viangre de vino blanco"]
        }
}


];

exports.restaurantesArray = restaurantesArray;