import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FormControl, RadioControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { LlamadasMockyService } from '../../llamadas-mocky.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
  providers: [LlamadasMockyService]
})
export class RecetasComponent implements OnInit {
  ingredient = [];
  pNombreReceta = '';
  pIngredientes = '';
  pPreparacion = '';

  constructor(private router: Router, private send: LlamadasMockyService) { }

  ngOnInit() {
  }

  onSubmit(form4: NgForm) {
    let receta = {};
    let id = localStorage.getItem('logUser');
    if (!form4.valid) {
      return;
    } else {
      receta = {
        recetas: {
          imagen: "/assets/img/fideua.jpg",
          nombre: this.pNombreReceta,
          preparacion: this.pPreparacion,
          ingredientes: this.ingredient
        }
      },
        console.log(this.ingredient);
      console.log(receta);
      form4.resetForm();
      this.ingredient = [];
    }
    this.send.addRestaurante(receta, id).subscribe(res => { console.log(res) });
  }

  addIngredientes() {
    let palabra = this.pIngredientes;
    this.ingredient.push(palabra);
    console.log(this.ingredient);
    this.pIngredientes = "";
    console.log(this.pIngredientes);
  }
}
