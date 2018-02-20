import { Injectable } from '@angular/core';

const elCellerMocky = JSON.parse(JSON.stringify({
  "nombre": "El Celler",
  "idRest": "0",
  "valoracion": "5",
  "tipoCocinaID": ["8"],
  "tipoAmbienteID": ["0", "3"],
  "localidad": "Barcelona",
  "adresa": "Avinguda Diagonal, 423 08036 Barcelona",
  "tipo": ["Mediterránea", "Con Amigos", "Moderno"],
  "imagen": "/assets/img/celler.jpg",
  "menu": [
    {
      "titol": "Entrantes",
      "platos": "Duo de provolone (Trufa y virutas de jamón ibérico de bellota (5j) y sobrasada de menorca y miel) Carpaccio de ternera y escamas de parmesano y Ensalada Vino Tinto: Verde, salmón, ventresca de atún Ortiz, tomate de temporada, aguacate y queso de cabra con balsámico de higos",
      "tipus": "0"
    },
    {
      "titol": "Primeros",
      "platos": "Tagliata de entrecot con rúcula y parma, Morro de Bacalao con salsa de miel pasas y piñones y Steak tartar clásico",
      "tipus": "1"
    },
    {
      "titol": "Segundos",
      "platos": "Duo de canelones rellenos de foie y trufa, Solomillo de cerdo a la mostaza, Bacalao a la muselina de ajo con chips de verdura y Sashimi de salmón ahumado con un toque de miel, sésamo y salsa de eneldo.",
      "tipus": "2"
    },
    {
      "titol": "Postres",
      "platos": "Tarta tatín de manzana,Queso manchego curado con membrillo y Brownie de 3 chocolates con helado de vainilla.",
      "tipus": "3"
    },

    {
      "titol": "Menú semanal de 40 €",
      "platos": "Precio por persona (IVA incluido) y bebidas no incluidas. Se te solicitará una señal de 20 € directamente desde el restaurante para confirmar tu reserva.",
      "tipus": "4"
    }
  ],
  "opiniones": [
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Enrique M.",
      "comentario": "El servicio bastante lento. La comida tanto los primeros para compartir como los provolone nada especial, al igual que los canelones que pedimos de segundo plato. La carne nada del otro mundo, muy normal todo. Es caro, calidad, servicio y precio no han estado a la altura de lo esperado.",
      "valoracion": "3,5"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Mariona V.",
      "comentario": "Muy bueno todo, volveremos.",
      "valoracion": "6"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Alba C.",
      "comentario": "Todo bueno. Justo lo que esperábamos encontrar de tantas veces que hemos ido a comer.",
      "valoracion": "10"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Antonio P.",
      "comentario": "Lo mejor la ensalada de vino tinto y la Tagliata.",
      "valoracion": "7,3"
    }
  ],
  "promociones":
  {
    "promocion": "-35% en Cuenta final",
    "descripcion": "Bebidas incluidas, menús no incluidos.Esta promoción se aplica sin consumo mínimo, ni restricciones de platos, para que comas y bebas lo que te apetezca y solamente prestes atención a disfrutar."
  },

  "recetas":
  {
    "imagen": "/assets/img/fideua.jpg",
    "nombre": "Fideua con gambas al estilo celler",
    "preparacion": [{ "titulo": "Paso 1/5", "descripcion": "Pelar las gambas reservando cabezas y cáscaras. Limpiar los calamares y cortarlos en anillas. Pelar y picar los ajos. Lavar, retirar las semillas, el tallo y los nervios de los pimientos. Picar en daditos pequeños. Pelar, lavar y picar en daditos pequeños la cebolla. Majar el azafrán en el mortero con un poco de sal. Cocer juntos los ingredientes para el caldo de pescado 15 minutos y colar." },
    { "titulo": "Paso 2/5", "descripcion": "Colocar una paella con el aceite al fuego a calentar. Cuando está caliente rehogar el ajo, antes de que tome color, incorporar el pimiento y la cebolla muy picados. Seguir rehogando a fuego lento hasta que estén bien blandos. Añadir ahora el calamar y continuar rehogando 6 minutos más." },
    { "titulo": "Paso 3/5", "descripcion": "Fuera del fuego poner el pimentón y de nuevo en el fuego incorporar el tomate. Seguir rehogando 8 minutos más." },
    { "titulo": "Paso 4/5", "descripcion": "Bañar con el caldo de pescado y cuando esté hirviendo incorporar los fideos y las gambas. Cocer 5 minutos en el fuego y 5 minutos más en el horno." },
    { "titulo": "Paso 5/5", "descripcion": "Servir en la misma paella, adornando las asas con servilletas. Se puede acompañar de salsa alioli elaborada con aceite de oliva." }
    ],
    "ingredientes": ["200g gambas", "300g calamar", "2 dientes de ajo", "1 pimiento verde", "150g cebolla", "1tsp pimentón", "10 ramitas azafrán", "1tbsp aceite de oliva", "150ml de pescado", "350g fideos nº3"]
  }
}));

const guzzoMocky = JSON.parse(JSON.stringify({
  "nombre": "Guzzo",
  "idRest": "1",
  "valoracion": "7",
  "tipoCocinaID": ["5", "12"],
  "tipoAmbienteID": ["1", "6"],
  "localidad": "Barcelona",
  "adresa": "Carrer dels Arcs, 5 08002 Barcelona",
  "tipo": ["Mexicano", "Fusión", "Romántico", "Para grupos"],
  "imagen": "/assets/img/rest3.jpg",
  "menu": [
    {
      "titol": "Entrantes",
      "platos": "Nachos especiales con carne, guacamole, queso con chorizo",
      "tipus": "0"
    },
    {
      "titol": "Primeros",
      "platos": "Ceviche de pescado, rajas con queso, cóctel de camarón",
      "tipus": "1"
    },
    {
      "titol": "Segundos",
      "platos": "Cochinita pibil, tacos de arrachera, tacos gobernador",
      "tipus": "2"
    },
    {
      "titol": "Postres",
      "platos": "Cheesecake de mango o fresa o maracuyá con helados artesanos",
      "tipus": "3"
    },
    {
      "titol": "Menú grupos 25€",
      "platos": "Los platos arriba mencionados podrán cambiar en función del mercado y aparecen indicados a modo de ejemplo.",
      "tipus": "4"
    }
  ],
  "opiniones": [
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Marc R.",
      "comentario": "Carta extensa y variada, tacos muy buenos! Atencion perfecta, calidad-precio genial. Volveremos!",
      "valoracion": "8"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Isisdro B.",
      "comentario": "Comida muy buena pero nos hicieron esperar muchísimo y solo había 3 mesas... Y cuando pedimos más tortillas para acompañar la comida nos dijeron que nos las cobrarían como suplemento. Cuando llevas más de media hora entre el 1ero y el 2do, se agradece un gesto de amabilidad. Además es que te dabas cuenta de que eran conscientes que no era normal la espera. En fin, supongo que no saben mucho de hostelería. Eso sí, claramente no fue con mala intención. Y por eso, bueno y porque la comida me encantó, pienso volver. Soy partidario de que a veces necesitamos segundas oportunidades.",
      "valoracion": "7,5"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "David C.",
      "comentario": "Servicio muy atento. Con el descuento una excelente calidad/precio.",
      "valoracion": "8"
    }
  ],
  "promociones":
  {
    "promocion": "-40% en Carta",
    "descripcion": "Menús y bebidas no incluidos. Esta promoción se aplica sin consumo mínimo, ni restricciones de platos, para que comas lo que te apetezca y solamente prestes atención a disfrutar. Válida en la franja horaria seleccionada."
  },
}));
const operaMocky = JSON.parse(JSON.stringify({
  "nombre": "Opera",
  "idRest": "2",
  "valoracion": "6",
  "tipoCocinaID": ["8", "12"],
  "tipoAmbienteID": ["5", "6"],
  "localidad": "Barcelona",
  "adresa": "Plaza Molina, 2 08006 Barcelona",
  "tipo": ["Mediterranea", "Fusión", "De negocios", "Para grupos"],
  "imagen": "/assets/img/rest2.jpg",
  "menu": [
    {
      "titol": "Entrantes",
      "platos": "Nachos OPERA, hummus casero con crudites de verduras",
      "tipus": "0"
    },
    {
      "titol": "Primeros",
      "platos": "Tartar de salmon, pulpo a la parmentier, tataki de ternara",
      "tipus": "1"
    },
    {
      "titol": "Segundos",
      "platos": "Bruschette de salmon marinado y mozzarella, arroz caldoso de pescado, parmiggiana vegetal (de berenjena, tomate y quesos)",
      "tipus": "2"
    },
    {
      "titol": "Postres",
      "platos": "Coulant de chocolate con helado de vainilla, New York cheese cake",
      "tipus": "3"
    },

    {
      "titol": "Menú diario 13€",
      "platos": "Precio por persona (IVA incluido). Bebidas no incluidas.",
      "tipus": "4"
    }
  ],
  "opiniones": [
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Ester P.",
      "comentario": "TLocal agradable. Buena comida. Volveremos.",
      "valoracion": "8"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Isidro B.",
      "comentario": "Muy recomendable! La atención del servicio es inmejorable, te hacen sentir muy a gusto. La comida rica y a buen precio.",
      "valoracion": "7"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Lluisa G.",
      "comentario": "Larga espera y en los 2 platos d carne, no solo la racion era muy justa si no que era todo grasa y tendones por lo que no quedaba nada que comer. Eso si, los postres exquisitos!",
      "valoracion": "5"
    }
  ],
  "promociones":
  {
    "promocion": "-20% en la cuenta final",
    "descripcion": "Esta promoción se aplica sin consumo mínimo, ni restricciones de platos, para que comas y bebas lo que te apetezca y solamente prestes atención a disfrutar. Válida en la franja horaria seleccionada."
  },
}));

const piazzaMocky = JSON.parse(JSON.stringify({
  "nombre": "Piazza Navona",
  "idRest": "3",
  "valoracion": "8",
  "tipoCocinaID": ["4", "12"],
  "tipoAmbienteID": ["0", "3", "6"],
  "localidad": "Barcelona",
  "adresa": "Plaça de Sant Bernat Calbó, 6 08005 Barcelona España",
  "tipo": ["Italiana", "Con Amigos", "Moderno", "Para grupos"],
  "imagen": "/assets/img/rest1.jpg",
  "menu": [
    {
      "titol": "Entrantes",
      "platos": "Misto de verduras y mozzarella fritas, surtido de embutidos y quesos italianos",
      "tipus": "0"
    },
    {
      "titol": "Primeros",
      "platos": "Agnolotti in Brodo (pasta casera rellena de carne de ternera en su proprio caldo) Ravioli ricotta e spinaci (pasta casera rellena de ricotta y espinacas con un toque de mantequilla y salvia)",
      "tipus": "1"
    },
    {
      "titol": "Segundos",
      "platos": "Cosciotto di agnello al forno con patate alla duchessa e verdurine al vapore (Pierna de cordero al horno con patatas a la duquesa y verduritas al vapor) Parmigiana di patate, scamorza e zucchine (Parmigiana de patatas, queso scamorza y calabacin)",
      "tipus": "2"
    },
    {
      "titol": "Postres",
      "platos": "Tiramisu al Pandoro, pasticceria mista fruta seca, cafe' y limoncello",
      "tipus": "3"
    },

    {
      "titol": "Menú de Navidad 45 €",
      "platos": "Precio por persona (IVA incluido). Bebidas no incluidas. El 25/12 en comida y cena. Se te solicitará una señal de 25 € directamente desde el restaurante para confirmar tu reserva.",
      "tipus": "4"
    }
  ],
  "opiniones": [
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Laia S.",
      "comentario": "Todo muuy rico en un italiano diferente! y muuy buen de precio!",
      "valoracion": "8"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "L.O.",
      "comentario": "Excelente !!!!",
      "valoracion": "9"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Raquel G.",
      "comentario": "Excelente atención del personal muy amables y mucha simpatía en todo momento, el entrante que tenían en sugerencias nos sorprendió, las pizzas muy buenas, masa fina, crujiente y la calidad en los ingredientes se notaba. Los postres el broche final a una velada perfecta. Sin duda repetiremos.",
      "valoracion": "10"
    }
  ],
  "promociones":
  {
    "promocion": "-40% en Carta",
    "descripcion": "Menu y bebida no incluida. Esta promoción se aplica sin consumo mínimo, ni restricciones de platos, para que comas lo que te apetezca y solamente prestes atención a disfrutar. No aplicable en terraza"
  },

  "recetas":
  {
    "imagen": "img/sardesaor.jpg",
    "nombre": "Sarde in saor",
    "preparacion": [{ "titulo": "Paso 1/4", "descripcion": "Limpiar las sardinas y abrirlas quitándoles la espina central. Pasarlas por harina, sacudiéndolas para quitar el exceso. Freirlas y reservarlas." },
    { "titulo": "Paso 2/4", "descripcion": "Cortar las cebollas en tiras y freirlas a fuego lento durante unos 15 minutos hasta que estén transparentes y bien pochadas. Pasado este tiempo, subir el fuego y añadir el azúcar, el vinagre y un poco de sal, dejar cocer durante un par de minutos más." },
    { "titulo": "Paso 3/4", "descripcion": "Poner una capa de sardinas en una fuente honda, cubrirlas con una capa de cebolla y un puñado de pasas y piñones. Seguir poniendo capas en el mismo orden y terminar con una capa de cebollas cubriendolo todo. Dejar reposar en el frigorífico hasta el día siguiente." },
    { "titulo": "Paso 4/4", "descripcion": "Como todos los escabeches, es aconsejable dejar reposar estas sardinas durante al menos 24 horas antes de comerlas, y se conservan sin problema en el frigorífico durante varios días." }
    ],
    "ingredientes": ["600g sardinas", "40g pasas", "40g piñones", "1 pizca de sal", "2 cebollas", "1tsp azucar", "aceite de oliva", "2tbsp harina", "200ml viangre de vino blanco"]
  },
}));

const rocaBarMocky = JSON.parse(JSON.stringify({
  "nombre": "Roca Bar",
  "idRest": "4",
  "valoracion": "9",
  "tipoCocinaID": ["5"],
  "tipoAmbienteID": ["1", "4"],
  "localidad": "Barcelona",
  "adresa": "Carrer del Roselló,148 08036 Barcelona",
  "tipo": ["Mexicana", "Romántico", "Tradicional"],
  "imagen": "/assets/img/mexicana.jpg",
  "menu": [
    {
      "titol": "Entrantes",
      "platos": "Nachos (de maíz mexicano, frijoles, guacamole, crema, queso, jalapeños y taquera roja)",
      "tipus": "0"
    },
    {
      "titol": "Primeros",
      "platos": "Quesadillas (Queso, champiñones, cochinita pibil, chorizo, papa con chorizo, tinga de pollo, tinga de zanahoria o calabacin a la plancha) Temales (Queso, masa de maíz envuelta en hoja de plátano, cocida al vapor y rellena de diversos guisos)",
      "tipus": "1"
    },
    {
      "titol": "Segundos",
      "platos": "Tacos de cochinita pibil (Guiso de cerdo a la Yucateca adobado con achiote) o Al pastor de olla (Lomo de cerdo marinado en chiles secos, achiote y especias) Tostadas (Tortilla crujiente de maiz, con frijoles refrtos, lechuga, crema, queso en polvo, tomate, aguacate y chile con carne)",
      "tipus": "2"
    },
    {
      "titol": "Postres",
      "platos": "Tarta imposible, tarta tres leches y sorbete de limón al Mezcal.",
      "tipus": "3"
    },

    {
      "titol": "Menú especial parejas de 50€",
      "platos": "Precio por persona (IVA incluido) y bebidas incluidas. Se te solicitará una señal de 25€ directamente desde el restaurante para confirmar tu reserva.",
      "tipus": "4"
    }
  ],
  "opiniones": [
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Mathew A.",
      "comentario": "Comida muy rica! Probamos varios tacos y todos estaban deliciosos. El tamal estaba buenísimo. Para repetir!",
      "valoracion": "9,8"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Karla V.",
      "comentario": "Muy muy bien, muy amables y la comida fantástica. Los tacos estan buenísimos!",
      "valoracion": "10"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Amanda M.",
      "comentario": "Buen ambiente, buena comida, ideal para los amantes de la comida mexicana!",
      "valoracion": "8,5"
    },
    {
      "imagen": "/assets/img/GastroLover.png",
      "nombre": "Maria P.",
      "comentario": "Un sitio para recomendar. La comida estaba buenísima, buenas cantidades y el trato que nos dieron fue excelente. Sin duda repetiremos.",
      "valoracion": "9,8"
    }
  ],
  "promociones":
  {
    "promocion": "-30% en Carta",
    "descripcion": "Bebidas incluidas, menús no incluidos.Esta promoción se aplica sin consumo mínimo, ni restricciones de platos, para que comas y bebas lo que te apetezca y solamente prestes atención a disfrutar. No aplicable en terraza."
  },

  "recetas":
  {
    "imagen": "img/tacos.jpg",
    "nombre": "Tacos Roca Bar",
    "preparacion": [{ "titulo": "Paso 1/5", "descripcion": "Picamos los ajos y los cocinamos a fuego muy suave durante 1 minuto. Que no coja color" },
    { "titulo": "Paso 2/5", "descripcion": "Añadimos el medio kilo de tomates, ya pelados y troceados y subimos la potencia del fuego. Salpimentamos y cocinamos durante un rato. El tomate soltará agua, debe evaporarse toda que, puede tartar un rato. Una vez evaporada dejamos cocinar a fuego suave mientras removemos constantemente, durante 5 minutos más, para que coja buen sabor." },
    { "titulo": "Paso 3/5", "descripcion": "Mientras se evapora el agua de los tomates, preparamos el pico de gallo. En un bol echamos toda la verdura de esta salsa bien picada. Añadimos el zumo de 1/2 lima o de medio limón y removemos bien. Dejamos reposar." },
    { "titulo": "Paso 4/5", "descripcion": "Cuando se haya cocinado un poco el tomate, añadimos la carne picada que hayamos elegido. Echamos su parte de sal y pimienta y cocinamos a fuego fuerte. Con una cuchara de madera, vamos removiendo todo y desmenuzando la carne picada, para que no que queden trozos grandes. De hecho, cuanto más finos queden mejor. Así que mezclamos con el tomate y el ajo, mientras la desmenuzamos y cocinamos la carne" },
    { "titulo": "Paso 5/5", "descripcion": "Una vez se haya cocinado, ¡ya está lista! Calentamos una a una las tortillas por sus dos caras en una sartén a fuego medio. Después ponemos encima unas cucharadas de la carne, aderezamos con un poco de pico de gallo, lo envolvemos dándole la forma característica de taco ¡Y ya está listo!. Opcionalmente puedes espolvorear también queso rallado por encima." }
    ],
    "ingredientes": ["6 tortillas de trigo o de maíz", "350g de carne picada de ternera o de pollo", "4 dientes de ajo", "500g de tomates", "sal y pimienta", "aceite", "queso rallado", "1 cebolleta pequeña", "1 jalapeño", "Unas hojas de cilantro", "1/2 lima o 1/2 limón"]
  }
}));
// JSON de tipo de cocina
const mockyTipoCocina = [
  "Española", "India", "Japonesa", "China",
  "Italiana", "Mexicana", "Tailandesa", "Coreana",
  "Mediterránea", "Americana", "Marroquí", "Escandinava",
  "Fusión"
];
// JSON de ambientes
const mockyAmbientes = [
  "Con amigos", "Romántico", "De fiesta", "Moderno",
  "Tradicional", "De negocios", "Para grupos", "Família",
  "Tranquilo", "Ecológico"
];
// JSON de localidades
const mockyCiudades = [
  "Albacete", "Alicante", "Almería", "Ávila", "Badajoz", "Barcelona",
  "Bilbao", "Burgos", "Cáceres", "Cádiz", "Castellón de la Plana",
  "Ceuta", "Ciudad Real", "Córdoba", "Cuenca", "Gerona", "Granada", "Guadalajara",
  "Huelva", "Huesca", "Jaén", "La Coruña", "Las Palmas de Gran Canaria", "León",
  "Lérida", "Logroño", "Lugo", "Madrid", "Málaga", "Melilla", "Mérida", "Murcia",
  "Orense", "Oviedo", "Palencia", "Palma", "Pamplona", "Pontevedra", "Salamanca",
  "San Sebastián", "Santa Cruz de Tenerife", "Santander", "Santiago de Compostela",
  "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid",
  "Vitoria-Gasteiz", "Zamora", "Zaragoza"
];
@Injectable()
export class LlamadasMockyService {

  constructor() { }
  getArrayRestaurantes() {
    let arrayRestaurantes = [];
    arrayRestaurantes.push(elCellerMocky);// id 0
    arrayRestaurantes.push(guzzoMocky);// id 1
    arrayRestaurantes.push(operaMocky);// id 2
    arrayRestaurantes.push(piazzaMocky);// id 3
    arrayRestaurantes.push(rocaBarMocky);// id 4
    return arrayRestaurantes;
  }
  getTipoCocina() {
    return mockyTipoCocina;
  }
  getAmbientes() {
    return mockyAmbientes;
  }
  getLocalidades(){
    return mockyCiudades;
  }
}
