import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LlamadasMockyService } from "../llamadas-mocky.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [LlamadasMockyService]
})
export class PerfilComponent implements OnInit {

  NombreRestaurante: string;
  DireccionRestarante: string;
  TelefonoRestaurante: string;
  ImgRestaurante: string;

  constructor(private send: LlamadasMockyService) { }

  ngOnInit() {
    let self = this;
    let originalSetItem = localStorage.setItem;
    if (localStorage.getItem("logUser") != "0" && localStorage.getItem("logUser")) {
      self.send.getRestaurante(localStorage.getItem("logUser")).subscribe(res => {
        self.NombreRestaurante = res.restaurante;
        self.DireccionRestarante = res.adresa;
        self.TelefonoRestaurante = res.telefono;
        self.ImgRestaurante = res.imagen;
      });
    }
    else {
      self.NombreRestaurante = "Nombre del Restaurante";
      self.DireccionRestarante = "Dirección del local";
      self.TelefonoRestaurante = "Numero de telefono";
    }
    localStorage.setItem = function () {
      document.createEvent('Event').initEvent('itemInserted', true, true);
      originalSetItem.apply(this, arguments);
      if (localStorage.getItem("logUser") != "0" && localStorage.getItem("logUser")) {
        self.send.getRestaurante(localStorage.getItem("logUser")).subscribe(res => {
          self.NombreRestaurante = res.restaurante;
          self.DireccionRestarante = res.adresa;
          self.TelefonoRestaurante = res.telefono;
          self.ImgRestaurante = res.imagen;
        });
      }
      else {
        self.NombreRestaurante = "Nombre del Restaurante";
        self.DireccionRestarante = "Dirección del local";
        self.TelefonoRestaurante = "Numero de telefono";
      }
    }
  }

}
