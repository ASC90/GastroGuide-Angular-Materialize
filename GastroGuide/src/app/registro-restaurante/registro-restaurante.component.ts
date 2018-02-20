import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RadioControlValueAccessor } from '@angular/forms';
import { matchOtherValidator } from '../1-match-other-validator'
import { Router } from '@angular/router';





@Component({
  selector: 'app-registro-restaurante',
  templateUrl: './registro-restaurante.component.html',
  styleUrls: ['./registro-restaurante.component.css']
})
export class RegistroRestauranteComponent implements OnInit {

  passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
  form = new FormGroup({
    restaurante: new FormControl("", Validators.required),
    nombre: new FormControl("", [Validators.required, Validators.pattern("[\s a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]*")]),
    apellidos: new FormControl("", [Validators.required, Validators.pattern("[\s a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]*")]),
    genero: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(this.passRegex)]),
    password2: new FormControl("", [Validators.required, matchOtherValidator("password")]),
    tel: new FormControl("", [Validators.required, Validators.pattern("[0-9]{9}")]),
    cp: new FormControl("", [Validators.required, Validators.pattern("[0-9]{5}")]),
    poblacion: new FormControl("", Validators.required),
    calle: new FormControl("", Validators.required),
    numero: new FormControl("", Validators.required),
    condiciones: new FormControl(false, Validators.requiredTrue)
  })

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let gastroChef = {
      restaurante: this.form.get("restaurante").value,
      nombre: this.form.get("nombre").value,
      apellidos: this.form.get("apellidos").value,
      genero: this.form.get("genero").value,
      email: this.form.get("email").value,
      password: this.form.get("password").value,
      tel: this.form.get("tel").value,
      cp: this.form.get("cp").value,
      poblacion: this.form.get("poblacion").value,
      calle: this.form.get("calle").value,
      numero: this.form.get("numero").value
    }

    this.router.navigateByUrl("/homeres");
  }

}
