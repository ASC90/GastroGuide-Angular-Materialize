import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-singup',
  templateUrl: './login-singup.component.html',
  styleUrls: ['./login-singup.component.css']
})
export class LoginSingupComponent implements OnInit {
  //MOCKY
  mail: string;
  pass: string;
  tipoGastro = [{
    gastro: "gastroLover",
    imgsrc: "../../assets/img/GastroLover.png"
  }, {
    gastro: "gastroChef",
    imgsrc: "../../assets/img/GastroChef.png"
  }]
  //CAPTURA DE INFO
  user_gastrochef = "";
  constructor(private router: Router) { }
  //VALIDACIONES
  validarmail = '';
  validarpass = '';
  error = 'email o contrasenya no validos';
  // errorpass = 'campo kdjalskdasd';
  mailgastroChef: string;
  mailgastroLover: string;
  ngOnInit() {

  }
  getLogin() {
    if (this.validarmail == "valid" && this.validarpass == "valid") {
      alert("todo correcto");
      let val = this.mailgastroChef;
      if (localStorage.getItem("login"))
        localStorage.removeItem("login");
      localStorage.setItem("login", val);
      this.router.navigateByUrl("/filtrar");
    }
  }
  getRegistrogastro() {
    let x = document.getElementById("btnReggastroChef")
    if (x)
      this.router.navigateByUrl("/registroChef");
    else
      this.router.navigateByUrl("/enconstruccion");
  }

  getValidarMail() {
    var emailreg = new RegExp(/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/);
    if (emailreg.test(this.mail)) {
      this.validarmail = 'valid';
    } else {
      this.validarmail = 'invalid'
    }
  }

}
