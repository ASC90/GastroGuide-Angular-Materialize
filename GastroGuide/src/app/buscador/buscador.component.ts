import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LlamadasMockyService } from "../llamadas-mocky.service";

declare var $: any;

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  providers: [LlamadasMockyService]
})

export class BuscadorComponent implements OnInit {
  // Listas
  tipoDeCocina = [];
  ambientes = [];
  ciudades = [];
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
  constructor(private router: Router, public arrayRestaurantes: LlamadasMockyService) { }

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
    this.tipoDeCocina = this.arrayRestaurantes.getTipoCocina();
    this.ambientes = this.arrayRestaurantes.getAmbientes();
    this.ciudades = this.arrayRestaurantes.getLocalidades();
  }
  // Cuando hago click para buscar (button)
  getBuscador() {
    this.getValidarTipoDeCocina();
    this.getValidarAmbiente();
    this.getValidarLocalidad();
    this.getValidarFecha();
    this.getValidarHora();
    this.getValidarComensales();
    console.log("options", this.optionsTipoCocina, this.optionsAmbientes, this.localidad, this.fecha, this.hora, this.comensales);
    if (this.validarLocalidad == "valid") {
      let arr = [this.optionsTipoCocina, this.optionsAmbientes, this.localidad, this.fecha, this.hora, this.comensales, "5"];
      if (localStorage.getItem("busqueda"))
        localStorage.removeItem("busqueda");
      localStorage.setItem("busqueda", JSON.stringify(arr));
      this.arrayRestaurantes.getBusqueda(this.optionsTipoCocina,this.optionsAmbientes, this.localidad, "5").subscribe(res=>{
        console.log(res);
      })
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

}
