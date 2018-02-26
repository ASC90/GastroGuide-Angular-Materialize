import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

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
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token'})
  };

  url = "http://localhost:8080/restaurante";

  constructor(private http: HttpClient) {
    console.log("HTTP:", http)
   }

  addRestaurante (miMenu): Observable<any> {
    return this.http.post(this.url, miMenu, this.httpOptions);
  }

  getArrayRestaurantes() {
    let arrayRestaurantes = [];
    /*arrayRestaurantes.push(elCellerMocky);// id 0
    arrayRestaurantes.push(guzzoMocky);// id 1
    arrayRestaurantes.push(operaMocky);// id 2
    arrayRestaurantes.push(piazzaMocky);// id 3
    arrayRestaurantes.push(rocaBarMocky);// id 4
    return arrayRestaurantes;*/
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
  getLogIn(data): Observable<any> {
    return this.http.post("http://localhost:8080/login", data, this.httpOptions);
  }
}
