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

  miReceta = {
    nombre: '',
    ingredientes: '',
    preparacion: ''
  };
  constructor(private router: Router, private send: LlamadasMockyService) { }

  ngOnInit() {
  }

  onSubmit(form4: NgForm) {
    if (!form4.valid) {
      alert("HAY UN CAMPO INCORRECTO!!");
      return;
    } else {
      alert("LOS CAMPOS SON CORRECTOS!!");
      form4.resetForm();
    }
    this.send.addRestaurante(this.miReceta).subscribe(res => {console.log(res)});
  }

  addIngredientes() {
    let palabra = this.miReceta.ingredientes;
    this.ingredient.push(palabra);
    console.log(this.ingredient);
    this.miReceta.ingredientes = "";
    console.log(this.miReceta.ingredientes);
    this.send.addRestaurante(this.miReceta).subscribe(res => {console.log(res)});
  }
}
