import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurante-opiniones',
  templateUrl: './restaurante-opiniones.component.html',
  styleUrls: ['./restaurante-opiniones.component.css']
})
export class RestauranteOpinionesComponent implements OnInit {
  @Input() opiniones: any;
  constructor() { }

  ngOnInit() {
  }

}
