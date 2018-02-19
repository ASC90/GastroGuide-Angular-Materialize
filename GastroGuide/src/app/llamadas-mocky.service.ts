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
      "imagen": "img/GastroLover.png",
      "nombre": "Enrique M.",
      "comentario": "El servicio bastante lento. La comida tanto los primeros para compartir como los provolone nada especial, al igual que los canelones que pedimos de segundo plato. La carne nada del otro mundo, muy normal todo. Es caro, calidad, servicio y precio no han estado a la altura de lo esperado.",
      "valoracion": "3,5"
    },
    {
      "imagen": "img/GastroLover.png",
      "nombre": "Mariona V.",
      "comentario": "Muy bueno todo, volveremos.",
      "valoracion": "6"
    },
    {
      "imagen": "img/GastroLover.png",
      "nombre": "Alba C.",
      "comentario": "Todo bueno. Justo lo que esperábamos encontrar de tantas veces que hemos ido a comer.",
      "valoracion": "10"
    },
    {
      "imagen": "img/GastroLover.png",
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
    "imagen": "img/fideua.jpg",
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
      "imagen": "img/GastroLover.png",
      "nombre": "Marc R.",
      "comentario": "Carta extensa y variada, tacos muy buenos! Atencion perfecta, calidad-precio genial. Volveremos!",
      "valoracion": "8"
    },
    {
      "imagen": "img/GastroLover.png",
      "nombre": "Isisdro B.",
      "comentario": "Comida muy buena pero nos hicieron esperar muchísimo y solo había 3 mesas... Y cuando pedimos más tortillas para acompañar la comida nos dijeron que nos las cobrarían como suplemento. Cuando llevas más de media hora entre el 1ero y el 2do, se agradece un gesto de amabilidad. Además es que te dabas cuenta de que eran conscientes que no era normal la espera. En fin, supongo que no saben mucho de hostelería. Eso sí, claramente no fue con mala intención. Y por eso, bueno y porque la comida me encantó, pienso volver. Soy partidario de que a veces necesitamos segundas oportunidades.",
      "valoracion": "7,5"
    },
    {
      "imagen": "img/GastroLover.png",
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

  "videos": [{ "videoUrl": "https://www.youtube.com/embed/6fhAchG-jcw", "titulo": "Como funciona nuestra cocina", "descripcion": "Estuvimos a la hora del almuerzo, en medio de fogones, ollas y cocineros apasionados por lo que hacen. Bladimir Tovar, chef encargado de la cocina, fue el guía." }]

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
@Injectable()
export class LlamadasMockyService {

  constructor() { }
  getArrayRestaurantes() {
    let arrayRestaurantes = [];
    arrayRestaurantes.push(elCellerMocky);
    arrayRestaurantes.push(guzzoMocky);
    return arrayRestaurantes;
  }
  getTipoCocina() {
    return mockyTipoCocina;
  }
  getAmbientes() {
    return mockyAmbientes;
  }
}
