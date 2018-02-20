import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-condiciones-legales',
  templateUrl: './condiciones-legales.component.html',
  styleUrls: ['./condiciones-legales.component.css']
})

export class CondicionesLegalesComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() {   }

  ngOnInit() {
  }
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

}
