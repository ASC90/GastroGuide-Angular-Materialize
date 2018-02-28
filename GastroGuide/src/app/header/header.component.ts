import { Component, OnInit } from '@angular/core';
// Rxjs
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { LlamadasMockyService } from "../llamadas-mocky.service";
import { MaterializeDirective } from "angular2-materialize";
// import { link } from 'fs';
import { Router } from '@angular/router';


declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LlamadasMockyService]
})
export class HeaderComponent implements OnInit {
  /*private onSubject = new Subject<{ key: string, value: any }>();
  public changes = this.onSubject.asObservable().share();*/

  nombreUsuario = "Nombre Usuario";
  emailUsuario = "Email Usuario";
  variableLocal = '';


  constructor(private router: Router, private send: LlamadasMockyService) {
    //this.start();
  }

  /*private start(): void {
    window.addEventListener("storage", this.storageEventListener.bind(this));
  }
  private storageEventListener(event: StorageEvent) {
    if (event.storageArea == localStorage) {
      let v;
      try { v = JSON.parse(event.newValue); }
      catch (e) { v = event.newValue; }
      this.onSubject.next({ key: event.key, value: v });
      console.log("EVENT: ", event);
      alert("Change");
      if (event.newValue != "0") {
        this.nombreUsuario = "Undefined";
        this.emailUsuario = "Undefined";
      }
      else {
        this.nombreUsuario = "Nombre Usuario";
        this.emailUsuario = "Email Usuario";
      }
    }
  }*/

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
      alert("Something Changed");
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
    
    /*var storageHandler = function () {
      alert("LocalStorage Change!");
    };
    window.addEventListener("storage", storageHandler);*/
  }
  logOut(){
    localStorage.setItem("logUser", "0");
    this.router.navigateByUrl("/")
  }
}
