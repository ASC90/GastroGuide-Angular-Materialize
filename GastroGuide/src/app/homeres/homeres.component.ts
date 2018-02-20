import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-homeres',
  templateUrl: './homeres.component.html',
  styleUrls: ['./homeres.component.css']
})
export class HomeresComponent implements OnInit {
  // ingredient = [];

  // miVideo = {
  //   titulo: '',
  //   descripcion: '',
  //   url: '',
  //   texto: ''
  // };

  // miMenu = {
  //   entrantes: '',
  //   primeros: '',
  //   segundos: '',
  //   postres: '',
  //   nmenu: '',
  //   destacado: ''
  // };

  // miOferta = {
  //   ofertas: '',
  // };

  // miReceta = {
  //   nombre: '',
  //   ingredientes: '',
  //   preparacion: ''
  // };

  constructor() { }

  ngOnInit() {
  }

  // onSubmit(form: NgForm, form2: NgForm, form3: NgForm, form4: NgForm) {
  //   console.log("form:", form, this.miVideo, this.miReceta);
  //   if (!form.valid && form2.valid && form3.valid && form4.valid) {
  //     alert("HAY UN CAMPO INCORRECTO!!");
  //     return;
  //   } else {
  //     alert("LOS CAMPOS SON CORRECTOS!!");

  //     form.resetForm();
  //     form2.resetForm();
  //     form3.resetForm();
  //     form4.resetForm();

  //   }
  // }
  // addIngredientes() {
  //   let palabra = this.miReceta.ingredientes;
  //   this.ingredient.push(palabra);
  //   console.log(this.ingredient);
  //   this.miReceta.ingredientes = "";
  //   console.log(this.miReceta.ingredientes);

  // }
}
