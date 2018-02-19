import { Component, OnInit } from '@angular/core';
import { LlamadasMockyService } from '../llamadas-mocky.service';
declare var $: any;

function arrayCompare(pArrA: Array<any>, pArrB: Array<any>) {
  for (let i = 0; i < pArrA.length; i++) {
    if (pArrB.includes(pArrA[i].toString()) == true) {
      return true;
    }
  }
  return false;
}

@Component({
  selector: 'app-filtrar',
  providers: [ LlamadasMockyService ],
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent implements OnInit {
  busquedaObj: Array<any>;
  arrayTipoCocina = [];
  arrayAmbientes = [];
  arrayRestaurantesPintados = [];
  // Inputs
  range: number;
  arrayCheckTipoCocina = [];
  arrayCheckAmbientes = [];
  constructor(public arrayRestaurantes: LlamadasMockyService) {
    this.inicializarRestaurantesLocalStorage();
    this.pintarRestaurantesFiltrados();
  }

  ngOnInit() {
    // Inicializa collapsable
    $(document).ready(function () {
      $('.collapsible').collapsible();
    });
    this.pintarRestaurantesFiltrados();
    console.log();
  }
  getFiltrar() {
    let arr = JSON.parse(localStorage.getItem("busqueda"));
    if (localStorage.getItem("busqueda"))
      localStorage.removeItem("busqueda");
    arr[0] = [];
    arr[1] = [];
    for (let i = 0; i < this.arrayCheckTipoCocina.length; i++) {
      if (this.arrayCheckTipoCocina[i] == true)
        arr[0].push(i);
    }
    for (let i = 0; i < this.arrayCheckAmbientes.length; i++) {
      if (this.arrayCheckAmbientes[i] == true)
          arr[1].push(i);
    }
    //arr[0] = this.arrayCheckTipoCocina;
    //arr[1] = this.arrayCheckAmbientes;
    arr[6] = this.range;
    localStorage.setItem("busqueda", JSON.stringify(arr));
    this.busquedaObj = JSON.parse(localStorage.getItem("busqueda"));
    this.inicializarRestaurantesLocalStorage();
    this.pintarRestaurantesFiltrados();
    
  }
  pintarRestaurantesFiltrados() {
    this.arrayRestaurantesPintados = [];
    for (let i = 0; i < this.arrayRestaurantes.getArrayRestaurantes().length; i++) {
      let arrTipCoc = arrayCompare(this.busquedaObj[0], this.arrayRestaurantes.getArrayRestaurantes()[i].tipoCocinaID);
      let arrAmb = arrayCompare(this.busquedaObj[1], this.arrayRestaurantes.getArrayRestaurantes()[i].tipoAmbienteID);
      if (arrTipCoc && arrAmb && (parseInt(this.busquedaObj[6]) <= parseInt(this.arrayRestaurantes.getArrayRestaurantes()[i].valoracion))) {
        this.arrayRestaurantesPintados.push(this.arrayRestaurantes.getArrayRestaurantes()[i]);
      }
    }
    return this.arrayRestaurantesPintados;
  }
  inicializarRestaurantesLocalStorage() {
    this.busquedaObj = JSON.parse(localStorage.getItem("busqueda"));
    this.arrayTipoCocina = this.arrayRestaurantes.getTipoCocina();
    this.arrayAmbientes = this.arrayRestaurantes.getAmbientes();
    for (let i = 0; i < this.arrayRestaurantes.getTipoCocina().length; i++) {
      if (this.busquedaObj[0].includes(i.toString()))
        this.arrayCheckTipoCocina.push(true);
      else
        this.arrayCheckTipoCocina.push(false);
    }
    for (let i = 0; i < this.arrayRestaurantes.getAmbientes().length; i++) {
      if (this.busquedaObj[1].includes(i.toString()))
        this.arrayCheckAmbientes.push(true);
      else
        this.arrayCheckAmbientes.push(false);
    } 
    this.range = this.busquedaObj[6];
  }
}
