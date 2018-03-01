// import { read } from 'fs';

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
// Cors
const cors = require("cors")

app.use(cors({
    methods: ["POST"]
}));

// Filtrar con get
app.get("/restaurantes", function (req, res) {
    // console.log(req.query);//cocina, ambiente, localidad, valoracion
    let tCocina = req.query.cocina.split(',').map(x=>parseInt(x));
    let tAmbiente = req.query.ambiente.split(',').map(x=>parseInt(x));
    let valor = parseInt(req.query.valoracion);
    let query = {
        $and: [
            { tipoCocinaID: { $elemMatch: { $in: tCocina } } },
            { tipoAmbienteID: { $elemMatch: { $in: tAmbiente } } },
            { localidad: req.query.localidad},
            { valoracion: {$gte: valor}}
        ]
    };
    dbo.collection("Restaurantes").find(query).toArray((err, result) => {
        if (err) {
            res.send({ 'error': err });
        } else {
            output = JSON.stringify(result);
            // console.log("s",result);
            res.end(output);
        }
    });
});
// Get Restaurante
app.get("/getRestaurante/:id", function (req, res) {
    console.log("este de qui",req.params.id);
    let pid = new mongo.ObjectId(req.params.id);
    let query = { _id: pid };
    dbo.collection("Restaurantes").find(query).toArray((err, result) => {
        if (err) {
            res.send({ 'error': err });
        } else {
            output = JSON.stringify(result[0]);
            console.log("Resultado:", result);
            res.send(output);
        }
    });
});

// Log-in
app.post("/login", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let _email = req.body.mailChef;
    let _password = req.body.passChef;
    console.log("PASS", _email, _password);
    let query = {
        $and: [
            { email: _email },
            { password: _password }
        ]
    };
    let show = {};
    dbo.collection("Restaurantes").find(query, show).toArray((err, result) => {
        if (err) {
            res.send({ 'error': err });
        } else {
            output = JSON.stringify(result[0]);
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
    });
    res.send(arrRest);
});
///////////////////POST REGISTRO RESTAURANTE////////////////////////
app.post("/restaurante", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    dbo.collection("Restaurantes").insert(req.body, function (err, db) {
        if (err) throw err;
        else
            res.send({ok: "Ok"});
    });
    res.json(req.body);
});

////////////////POST HOME RESTAURANTE/////////////////////////////
app.post("/restaurante/:id", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    let pid = new mongo.ObjectId(req.params.id);
    let query = { _id: pid };
    let obj = {};

    dbo.collection("Restaurantes").find(query).toArray((err, result) => {
        if (err) {
            res.send({ 'error': err });
        }
        else {
            obj = result[0];
            let completo = Object.assign(obj, req.body);
            console.log('ESTO ES UNA BAINA: ', completo);
            dbo.collection("Restaurantes").update(query, completo, function (err, result) {
                output = JSON.stringify(result);
                res.end(output);
            });
        }
    });


});

// Delete
app.delete("/del", function (req, res) {
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
    let query = {};
    let show = {};
    let sort = {};
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
