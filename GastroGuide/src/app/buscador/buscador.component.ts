import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $: any;

const mockyTipoCocina = [
  "Española", "India", "Japonesa", "China",
  "Italiana", "Mexicana", "Tailandesa", "Coreana",
  "Mediterránea", "Americana", "Marroquí", "Escandinava"
];

const mockyAmbientes = [
  "Con amigos", "Romántico", "De fiesta", "Moderno",
  "Tradicional", "De negocios", "Para grupos", "Família",
  "Tranquilo","Ecológico"
];

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  tipoDeCocina = mockyTipoCocina;
  ambientes = mockyAmbientes;
  optionsTipoCocina = [];
  optionsAmbientes = [];
  localidad = "";
  fecha = new Date();
  hora;
  comensales = "";
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
    console.log("options", this.optionsTipoCocina, this.optionsAmbientes, this.localidad, this.fecha, this.hora, this.comensales);
    if (this.optionsTipoCocina && this.optionsAmbientes && this.localidad && this.fecha && this.hora && this.comensales)
      alert("todo correcto");
  }
}
