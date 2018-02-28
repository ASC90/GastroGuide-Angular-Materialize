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
  providers: [LlamadasMockyService],
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent implements OnInit {
  busquedaObj: Array<any>;
  arrayTipoCocina = [];
  arrayAmbientes = [];
  arrayRestaurantesPintados = [];
  ciudades = [];
  localidad: string;
  // Inputs
  range: number;
  arrayCheckTipoCocina = [];
  arrayCheckAmbientes = [];
  constructor(public arrayRestaurantes: LlamadasMockyService) {
    this.inicializarRestaurantesLocalStorage();
  }

  ngOnInit() {
    // Inicializa collapsable
    $(document).ready(function () {
      $('.collapsible').collapsible();
    });
    this.ciudades = this.arrayRestaurantes.getLocalidades();
    this.pintarRestaurantesFiltrados();
  }

  getFiltrar() {
    this.busquedaObj = [localStorage.getItem("busqueda")];
    if (localStorage.getItem("busqueda"))
      localStorage.removeItem("busqueda");
    this.busquedaObj[0] = [];
    this.busquedaObj[1] = [];
    this.busquedaObj[2] = this.localidad;
    for (let i = 0; i < this.arrayCheckTipoCocina.length; i++) {
      if (this.arrayCheckTipoCocina[i] == true)
        this.busquedaObj[0].push(i);
    }
    if (this.busquedaObj[0].length < 1)
      this.busquedaObj[0] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    for (let i = 0; i < this.arrayCheckAmbientes.length; i++) {
      if (this.arrayCheckAmbientes[i] == true)
        this.busquedaObj[1].push(i);
    }
    if (this.busquedaObj[1].length < 1)
      this.busquedaObj[1] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.busquedaObj[6] = this.range;
    localStorage.setItem("busqueda", JSON.stringify(this.busquedaObj));
    this.inicializarRestaurantesLocalStorage();
    this.pintarRestaurantesFiltrados();
  }

  pintarRestaurantesFiltrados() {
    this.arrayRestaurantes.getBusqueda(this.busquedaObj[0], this.busquedaObj[1], this.busquedaObj[2], this.busquedaObj[6]).subscribe((res: Array<any>) => {
      console.log("esto", res);
      this.arrayRestaurantesPintados = res;
    })
  }

  inicializarRestaurantesLocalStorage() {
    this.arrayCheckTipoCocina = [];
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
