import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' }),
  };

  url = "http://localhost:8080/restaurante";

  constructor(private http: HttpClient) {
    console.log("HTTP:", http)
  }

  addRestaurante(miNuevoRestaurante, id): Observable<any> {
    return this.http.post(this.url + '/' + id, miNuevoRestaurante, this.httpOptions);
  }

  addChef(gastroChef): Observable<any> {
    return this.http.post(this.url, gastroChef, this.httpOptions);
  }
/* 
  getArrayRestaurantes() {
    return this.http.get("http://localhost:8080/restaurantes", this.httpOptions);
  } */
  getTipoCocina() {
    return mockyTipoCocina;
  }
  getAmbientes() {
    return mockyAmbientes;
  }
  getLocalidades() {
    return mockyCiudades;
  }
  getLogIn(data): Observable<any> {
    return this.http.post("http://localhost:8080/login", data, this.httpOptions);
  }
  getRestaurante(urlid): Observable<any> {
    return this.http.get("http://localhost:8080/getRestaurante/" + urlid, this.httpOptions);
  }
  getBusqueda(Tcocina, Tambiente, Loc, valor): Observable<any> {
    let params = new HttpParams()
      .set('cocina', Tcocina)
      .set('ambiente', Tambiente)
      .set('localidad', Loc)
      .set('valoracion', valor)
    return this.http.get("http://localhost:8080/restaurantes/",{headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' }),params})
  }
}
