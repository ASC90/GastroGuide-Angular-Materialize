import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurante-recetas',
  templateUrl: './restaurante-recetas.component.html',
  styleUrls: ['./restaurante-recetas.component.css']
})
export class RestauranteRecetasComponent implements OnInit {
  @Input() recetas: any;
  constructor() { }

  ngOnInit() {
  }

}
