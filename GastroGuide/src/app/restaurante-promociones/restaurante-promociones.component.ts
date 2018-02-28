import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurante-promociones',
  templateUrl: './restaurante-promociones.component.html',
  styleUrls: ['./restaurante-promociones.component.css']
})
export class RestaurantePromocionesComponent implements OnInit {
  @Input() promociones: any;
  constructor() { 
  }

  ngOnInit() {
  }

}
