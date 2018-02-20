import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  ingredient = [];

  miReceta = {
    nombre: '',
    ingredientes: '',
    preparacion: ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm, form2: NgForm, form3: NgForm, form4: NgForm) {
    if (!form4.valid) {
      alert("HAY UN CAMPO INCORRECTO!!");
      return;
    } else {
      alert("LOS CAMPOS SON CORRECTOS!!");
      form4.resetForm();
    }
  }

  addIngredientes() {
    let palabra = this.miReceta.ingredientes;
    this.ingredient.push(palabra);
    console.log(this.ingredient);
    this.miReceta.ingredientes = "";
    console.log(this.miReceta.ingredientes);
  }
}
