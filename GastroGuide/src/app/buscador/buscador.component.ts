import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;

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
  "Tranquilo","Ecológico"
];
// JSON ciudades
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

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent implements OnInit {
  // Listas
  tipoDeCocina = mockyTipoCocina;
  ambientes = mockyAmbientes;
  ciudades = mockyCiudades;
  // Captura de formulario
  optionsTipoCocina = [];
  optionsAmbientes = [];
  localidad = [];
  fecha;
  hora;
  comensales = "";
  visivilidad = "invisible collection";
  // Validaciones
  validarTipoCocina = "";
  validarAmbiente = "";
  validarLocalidad = "";
  validarFecha = "datepicker";
  errorLocalidad = "El campo está vacío";
  errorFecha = "El campo está vacío";
  validarHora = "timepicker";
  errorHora = "El campo está vacío";
  validarComensales = "";
  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready(function () {
      $('select').material_select();
    });
    // Inicializa el DatePicker
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
    // Inicializa el Time Picker
    $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function () { } //Function for after opening timepicker
    });
  }
  // Cuando hago click para buscar (button)
  getBuscador() {
 /*    if (this.optionsTipoCocina.length < 1 && this.optionsAmbientes.length < 1 && !this.fecha && !this.hora && !this.comensales) {
      this.optionsTipoCocina = ["0"];
      this.optionsAmbientes = ["0"];
      this.fecha = "30 December, 2018";
      this.hora = "10:00PM";
      this.comensales = "2";
    } */
    this.getValidarTipoDeCocina();
    this.getValidarAmbiente();
    this.getValidarLocalidad();
    this.getValidarFecha();
    this.getValidarHora();
    this.getValidarComensales();
    console.log("options", this.optionsTipoCocina, this.optionsAmbientes, this.localidad, this.fecha, this.hora, this.comensales);
    if (this.validarLocalidad == "valid") {
      alert("todo correcto");
      let arr = [this.optionsTipoCocina, this.optionsAmbientes, this.localidad, this.fecha, this.hora, this.comensales, "5"];
      if (localStorage.getItem("busqueda"))
        localStorage.removeItem("busqueda");
      localStorage.setItem("busqueda", JSON.stringify(arr));
      this.router.navigateByUrl("/filtrar");
    }
  }
  // Valida todos los inputs del formulario
  getValidarTipoDeCocina() {
    if (this.optionsTipoCocina.length == 0 || !this.optionsTipoCocina) {
      this.validarTipoCocina = "invalid";
    }
    else
      this.validarTipoCocina = "valid";
  }
  getValidarAmbiente() {
    if (this.optionsAmbientes.length == 0 || !this.optionsAmbientes) {
      this.validarAmbiente = "invalid";
    }
    else
      this.validarAmbiente = "valid";
  }
  getValidarLocalidad() {
    if (this.localidad.length == 0 || !this.localidad) {
      this.validarLocalidad  = "invalid";
    }
    else
      this.validarLocalidad  = "valid";
  }
/*   getValidarLocalidad() {
    let str = this.localidad;
    this.ciudades = mockyCiudades;
    this.ciudades = this.ciudades.filter(function (arr) {
      if (arr.toUpperCase().includes(str.toUpperCase()))
        return arr;
    });
    if (mockyCiudades.includes(this.localidad)) {
      this.validarLocalidad = "valid";
    }
    else if (this.localidad == "") {
      this.errorLocalidad = "El campo está vacío";
      this.validarLocalidad = "invalid";
    }
    else {
      this.errorLocalidad = "Esta localidad no existe";
      this.validarLocalidad = "invalid";
    }
      
    console.log("ciudades", this.ciudades);
    if (this.ciudades.length < 1 || this.localidad == "") {
      this.visivilidad = "invisible collection";
    }
    else {
      this.visivilidad = "visible collection";
    }
  } */
  getValidarFecha() {
    let parseadoFecha = Date.parse(this.fecha);
    let now = Date.now();
    if (!this.fecha) {
      this.errorFecha = "El campo está vacío";
      this.validarFecha = "datepicker invalid";
    }
    else if (parseadoFecha < now) {
      this.errorFecha = "Fecha pasada";
      this.validarFecha = "datepicker invalid";
    }
    else {
      this.validarFecha = "datepicker valid";
    }
  }
  getValidarHora() {
    if (!this.hora) {
      this.errorHora = "El campo está vacío";
      this.validarHora = "timepicker invalid";
    }
    else {
      this.validarHora = "timepicker valid";
    }
  }
  getValidarComensales() {
    if (!this.comensales) {
      this.validarComensales = "invalid";
    }
    else {
      this.validarComensales = "valid";
    }
    
  }
  // Selecciona la ciudad para autocompletarla
  /* selectCity(ciudad: string) {
    console.log(ciudad);
    this.localidad = ciudad;
    console.log(this.fecha);
    this.visivilidad = "invisible collection";
    if (mockyCiudades.includes(this.localidad))
      this.validarLocalidad = "valid";
  } */
}
