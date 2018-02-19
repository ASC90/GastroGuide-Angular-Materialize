import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-singup',
  templateUrl: './login-singup.component.html',
  styleUrls: ['./login-singup.component.css']
})
export class LoginSingupComponent implements OnInit {
  //CAPTURA DE INFO
  user_gastrochef = "";
  constructor(private router: Router) { }
  //VALIDACIONES
  validarmail = 'campo invalido';
  validarpass = 'campo invalido';
  ngOnInit() {
    
  }

}
