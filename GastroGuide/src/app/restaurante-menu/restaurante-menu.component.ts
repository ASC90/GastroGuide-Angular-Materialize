import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurante-menu',
  templateUrl: './restaurante-menu.component.html',
  styleUrls: ['./restaurante-menu.component.css']
})
export class RestauranteMenuComponent implements OnInit {
  @Input() menu: any;
  constructor() { }

  ngOnInit() {
  }

}
