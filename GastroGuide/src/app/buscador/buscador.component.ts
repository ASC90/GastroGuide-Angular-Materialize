import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $: any;

// JSON de tipo de cocina
const mockyTipoCocina = [
  "Española", "India", "Japonesa", "China",
  "Italiana", "Mexicana", "Tailandesa", "Coreana",
  "Mediterránea", "Americana", "Marroquí", "Escandinava"
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
  tipoDeCocina = mockyTipoCocina;
  ambientes = mockyAmbientes;
  ciudades = mockyCiudades;
  optionsTipoCocina = [];
  optionsAmbientes = [];
  localidad = "";
  fecha;
  hora;
  comensales = "";
  visivilidad = "invisible collection";
  // Validaciones
  validarTipoCocina = "invalid";
  validarAmbiente = "invalid";
  validarLocalidad = "invalid";
  errorLocalidad = "El campo está vacío";
  constructor() { }

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
  getBuscador() {
    this.getValidarTipoDeCocina();
    console.log("options", this.optionsTipoCocina, this.optionsAmbientes, this.localidad, this.fecha, this.hora, this.comensales);
    if (this.optionsTipoCocina && this.optionsAmbientes && this.localidad && this.fecha && this.hora && this.comensales) {
      alert("todo correcto");
      let arr = [this.optionsTipoCocina, this.optionsAmbientes, this.localidad, this.fecha, this.hora, this.comensales];
      localStorage.clear();
      localStorage.setItem("busqueda", JSON.stringify(arr));
    }
  }
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
    let str = this.localidad;
    this.ciudades = mockyCiudades;
    this.ciudades = this.ciudades.filter(function (arr) {
      if (arr.toUpperCase().includes(str.toUpperCase()))
        return arr;
    });
    /*for (let i = 0; i < this.ciudades.length; i++) {
      if (this.ciudades[i].toUpperCase().includes(this.localidad))
        this.validarLocalidad = "valid";
    }*/
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
  }
  selectCity(ciudad: string) {
    console.log(ciudad);
    this.localidad = ciudad;
    this.visivilidad = "invisible collection";
    if (mockyCiudades.includes(this.localidad))
      this.validarLocalidad = "valid";
  }
}
