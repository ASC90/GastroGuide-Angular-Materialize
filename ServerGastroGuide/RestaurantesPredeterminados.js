var restaurantesArray = [{
    restaurante: "El Celler",
    _id: "0",
    nombre:"",
    apellidos:'',
    genero:'',
    email:'',
    password:'',
    telefono:678907654,
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
            platos: "Duo de provolone (Trufa y virutas de jam�n ib�rico de bellota (5j) y sobrasada de menorca y miel) Carpaccio de ternera y escamas de parmesano y Ensalada Vino Tinto: Verde, salm�n, ventresca de at�n Ortiz, tomate de temporada, aguacate y queso de cabra con bals�mico de higos"
        },
        {
            titol: "Primeros",
            "platos": "Tagliata de entrecot con r�cula y parma, Morro de Bacalao con salsa de miel pasas y pi�ones y Steak tartar cl�sico"
        },
        {
            titol: "Segundos",
            platos: "Duo de canelones rellenos de foie y trufa, Solomillo de cerdo a la mostaza, Bacalao a la muselina de ajo con chips de verdura y Sashimi de salm�n ahumado con un toque de miel, s�samo y salsa de eneldo."
        },
        {
            titol: "Postres",
            platos: "Tarta tat�n de manzana,Queso manchego curado con membrillo y Brownie de 3 chocolates con helado de vainilla."
        },

        {
            titol: "Men� semanal de 40 �",
            platos: "Precio por persona (IVA incluido) y bebidas no incluidas. Se te solicitar� una se�al de 20 � directamente desde el restaurante para confirmar tu reserva."
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
            comentario: "Todo bueno. Justo lo que esper�bamos encontrar de tantas veces que hemos ido a comer.",
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
        descripcion: "Bebidas incluidas, men�s no incluidos.Esta promoci�n se aplica sin consumo m�nimo, ni restricciones de platos, para que comas y bebas lo que te apetezca y solamente prestes atenci�n a disfrutar."
    },

    recetas:
    {
        imagen: "/assets/img/fideua.jpg",
        nombre: "Fideua con gambas al estilo celler",
        preparacion: [{ titulo: "Paso 1/5", descripcion: "Pelar las gambas reservando cabezas y c�scaras. Limpiar los calamares y cortarlos en anillas. Pelar y picar los ajos. Lavar, retirar las semillas, el tallo y los nervios de los pimientos. Picar en daditos peque�os. Pelar, lavar y picar en daditos peque�os la cebolla. Majar el azafr�n en el mortero con un poco de sal. Cocer juntos los ingredientes para el caldo de pescado 15 minutos y colar." },
        { titulo: "Paso 2/5", descripcion: "Colocar una paella con el aceite al fuego a calentar. Cuando est� caliente rehogar el ajo, antes de que tome color, incorporar el pimiento y la cebolla muy picados. Seguir rehogando a fuego lento hasta que est�n bien blandos. A�adir ahora el calamar y continuar rehogando 6 minutos m�s." },
        { titulo: "Paso 3/5", descripcion: "Fuera del fuego poner el piment�n y de nuevo en el fuego incorporar el tomate. Seguir rehogando 8 minutos m�s." },
        { titulo: "Paso 4/5", descripcion: "Ba�ar con el caldo de pescado y cuando est� hirviendo incorporar los fideos y las gambas. Cocer 5 minutos en el fuego y 5 minutos m�s en el horno." },
        { titulo: "Paso 5/5", descripcion: "Servir en la misma paella, adornando las asas con servilletas. Se puede acompa�ar de salsa alioli elaborada con aceite de oliva." }
        ],
        ingredientes: ["200g gambas", "300g calamar", "2 dientes de ajo", "1 pimiento verde", "150g cebolla", "1tsp piment�n", "10 ramitas azafr�n", "1tbsp aceite de oliva", "150ml de pescado", "350g fideos n�3"]
    }
}];

exports.restaurantesArray = restaurantesArray;