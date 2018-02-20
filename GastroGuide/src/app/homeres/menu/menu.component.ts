import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  miMenu = {
    entrantes: '',
    primeros: '',
    segundos: '',
    postres: '',
    nmenu: '',
    destacado: ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form2: NgForm) {
    if (!form2.valid) {
      alert("HAY UN CAMPO INCORRECTO!!");
      return;
    } else {
      alert("LOS CAMPOS SON CORRECTOS!!");
      form2.resetForm();
    }
  }

}
