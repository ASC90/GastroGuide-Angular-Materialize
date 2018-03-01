import { Component, OnInit } from '@angular/core';
// Rxjs
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { LlamadasMockyService } from "../llamadas-mocky.service";
import { MaterializeDirective } from "angular2-materialize";

import { Router } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LlamadasMockyService]
})
export class HeaderComponent implements OnInit {

  nombreUsuario = "Nombre Usuario";
  emailUsuario = "Email Usuario";
  variableLocal = '';


  constructor(private router: Router, private send: LlamadasMockyService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $(".button-collapse").sideNav();
    });
    localStorage.setItem("logUser", "0");

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
    );

    let self = this;
    let originalSetItem = localStorage.setItem;
    localStorage.setItem = function () {
      document.createEvent('Event').initEvent('itemInserted', true, true);
      originalSetItem.apply(this, arguments);
      
      if (localStorage.getItem("logUser") != "0" && localStorage.getItem("logUser")) {
        self.send.getRestaurante(localStorage.getItem("logUser")).subscribe(res => {
          self.nombreUsuario = res.restaurante;
          self.emailUsuario = res.email;
        });
      }
      else {
        self.nombreUsuario = "Nombre Usuario";
        self.emailUsuario = "Email Usuario";
      }
      self.variableLocal = localStorage.getItem("logUser");
    }
  }
  logOut(){
    localStorage.setItem("logUser", "0");
    this.router.navigateByUrl("/")
  }
}
