import { Component, OnInit } from '@angular/core';
// Rxjs
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*private onSubject = new Subject<{ key: string, value: any }>();
  public changes = this.onSubject.asObservable().share();*/

  nombreUsuario = "Nombre Usuario";
  emailUsuario = "Email Usuario";





  constructor() {
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

    let self = this;
    let originalSetItem = localStorage.setItem;
    localStorage.setItem = function () {
      document.createEvent('Event').initEvent('itemInserted', true, true);
      originalSetItem.apply(this, arguments);
      alert("Something Changed");
      if (localStorage.getItem("logUser") != "0") {
        self.nombreUsuario = "Undefined";
        self.emailUsuario = "Undefined";
      }
      else {
        self.nombreUsuario = "Nombre Usuario";
        self.emailUsuario = "Email Usuario";
      }
    }

    /*var storageHandler = function () {
      alert("LocalStorage Change!");
    };

    window.addEventListener("storage", storageHandler);*/
  }
}
