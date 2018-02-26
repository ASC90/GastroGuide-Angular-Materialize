//server.js
var express = require('express');
var mongo = require('mongodb');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var dbo;
// Para el post
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// Trae a los restaurantes
var moduloRestaurantes = require("./RestaurantesPredeterminados");

// Filtrar
app.post("/filtrarRestaurante", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    // let obj = JSON.parse(req.body);
    // let tipoCocinaID = obj[0].tipoCocinaID;
    // let tipoAmbienteID = obj[1].tipoAmbienteID;
    // let localidad = obj[2].localidad;
    // let valoracion = obj[6].valoracion;
    let tipoCocinaID = [0, 1, 2, 3, 8];
    let tipoAmbienteID = [0, 3];
    var query = {$and: [
        { tipoCocinaID: { $elemMatch: { $in: tipoCocinaID } } },
        { tipoAmbienteID: { $elemMatch: { $in: tipoAmbienteID } } }
        ]
    };
    var show = {};
    dbo.collection("Restaurantes").find(query, show).toArray((err, result) => {
        if (err) {
            res.send({ 'error': err });
        } else {
            output = JSON.stringify(result);
            console.log("set cache");
            res.end(output);
        }
    });
});

// Log-in
app.post("/login", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    let _email = req.body.email;
    let _password = req.body.password;
    var query = {
        $and: [
            { email: { $elemMatch: { $in: _email } } },
            { password: { $elemMatch: { $in: _password } } }
        ]
    };
    var show = {};
    dbo.collection("Restaurantes").find(query, show).toArray((err, result) => {
        if (err) {
            res.send({ 'error': err });
        } else {
            output = JSON.stringify(result);
            console.log("set cache");
            res.end(output);
        }
    });
});

// Crear restaurante
app.post("/create", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    let obj = {
        restaurante: req.body.restaurante,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        genero: req.body.genero,
        email: req.body.email,
        password: req.body.password,
        telefono: req.body.telefono,
        localidad: req.body.localidad,
        valoracion: req.body.valoracion
    }
    dbo.collection("Restaurantes").save(obj).toArray((err, result) => {
        if (err) {
            res.send({ 'error': err });
        } else {
            output = JSON.stringify(result);
            console.log("set cache");
            res.end(output);
        }
    });
});

// Generate
app.get("/generate", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    let arrRest = moduloRestaurantes.restaurantesArray;
    dbo.collection("Restaurantes").insertMany(arrRest, function (err, db) {
        if (err) throw err;
        console.log("result", db);
    });
    res.send(arrRest);
});


// Delete
app.get("/del", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    dbo.collection("Restaurantes").drop(function (err, ok) {
        if (err) throw err;
        if (ok) console.log("Restaurantes eliminados");
        //db.close();
    });
});


// Read 
app.get('/read', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    var query = {};
    var show = {};
    var sort = {};
    dbo.collection("Restaurantes").find(query, show).sort(sort).toArray((err, result) => {
        if (err) {
            res.send({ 'error': err });
        } else {
            output = JSON.stringify(result);
            console.log("set cache");
            res.end(output);
        }
    });
});


// RUN 
MongoClient.connect("mongodb://localhost:27017/", (err, client) => {    //mongo OK
    dbo = client.db('GastroGuideDB')
    if (err) throw err;
    app.listen(8080, () => {
        console.log("listening at http://localhost:8080");
    });
});
