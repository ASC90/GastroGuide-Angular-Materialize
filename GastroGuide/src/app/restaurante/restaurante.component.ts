import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LlamadasMockyService } from '../llamadas-mocky.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MaterializeDirective } from "angular2-materialize";
declare var $: any;

@Component({
  selector: 'app-restaurante',
  providers: [LlamadasMockyService],
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit, AfterViewInit{
  restaurantObj = {};
  
  constructor(public arrayRestaurantes: LlamadasMockyService, private router: ActivatedRoute) {
    // this.restaurantObj = this.arrayRestaurantes.getArrayRestaurantes()[+this.router.snapshot.paramMap.get('id')];
  }

  ngOnInit() {
    $(document).ready(function () {
      $('ul.tabs').tabs({
        swipeable: true,
        responsiveThreshold: 1920
      });
    });
    console.log(this.restaurantObj);
  }
  ngAfterViewInit() {
    $(document).ready(function () {
      $('ul.tabs').tabs({
        swipeable: true,
        responsiveThreshold: 1920
      });
    });
  }


}
