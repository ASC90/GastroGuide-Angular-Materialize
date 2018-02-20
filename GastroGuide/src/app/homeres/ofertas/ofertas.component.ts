import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
  miOferta = {
    ofertas: '',
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form3: NgForm) {
    if (!form3.valid) {
      alert("HAY UN CAMPO INCORRECTO!!");
      return;
    } else {
      alert("LOS CAMPOS SON CORRECTOS!!");
      form3.resetForm();
    }

}
