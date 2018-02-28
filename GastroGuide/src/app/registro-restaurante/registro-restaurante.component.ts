import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RadioControlValueAccessor } from '@angular/forms';
import { matchOtherValidator } from '../1-match-other-validator'
import { Router } from '@angular/router';
import { LlamadasMockyService } from '../llamadas-mocky.service';
import { Observable } from 'rxjs/Observable';
import { Restaurante } from '../restaurante.model';

@Component({
  selector: 'app-registro-restaurante',
  templateUrl: './registro-restaurante.component.html',
  styleUrls: ['./registro-restaurante.component.css'],
  providers: [LlamadasMockyService]
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
    condiciones: new FormControl(false, Validators.requiredTrue),
    cocina: new FormControl("", Validators.required),
    ambiente: new FormControl("", Validators.required)
  })

  tipoDeCocina = this.service.getTipoCocina();
  ambientes = this.service.getAmbientes();

  restauranteString() {
    let restNum = this.form.get("cocina").value;
    let restStr = [];
    for (let restaurante of restNum) {
      restStr.push(this.tipoDeCocina[parseInt(restaurante)])
    }
    return restStr;
  }

  constructor(private router: Router, private service: LlamadasMockyService) { }

  ngOnInit() {
  }

  onSubmit() {
    // if (this.form.valid) { 
    let gastroChef: Restaurante = {
      restaurante: this.form.get("restaurante").value,
      nombre: this.form.get("nombre").value,
      apellidos: this.form.get("apellidos").value,
      genero: this.form.get("genero").value,
      email: this.form.get("email").value,
      password: this.form.get("password").value,
      telefono: this.form.get("tel").value,
      adresa: this.form.get("calle").value + ", " + this.form.get("numero").value + " " + this.form.get("cp").value + " " + this.form.get("poblacion").value,
      localidad: this.form.get("poblacion").value,
      tipo: this.restauranteString(),
      tipoCocinaID: this.form.get("cocina").value,
      tipoAmbienteID: this.form.get("ambiente").value,
      valoracion: 5
    }
    this.service.addChef(gastroChef).subscribe(res => {
      if (localStorage.getItem('logUser')) {
        localStorage.removeItem('logUser')
      }
      return localStorage.setItem('logUser', res._id)
    });
    // this.router.navigateByUrl("/homeres");
    // }
  }
}
