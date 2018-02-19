import { Component, OnInit } from '@angular/core';
import { LlamadasMockyService } from '../llamadas-mocky.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-restaurante',
  providers: [LlamadasMockyService],
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {
  restaurantObj = {};
  constructor(public arrayRestaurantes: LlamadasMockyService, private router: ActivatedRoute) {
    this.restaurantObj = this.arrayRestaurantes.getArrayRestaurantes()[+this.router.snapshot.paramMap.get('id')]; 
  }

  ngOnInit() {
  }

}
