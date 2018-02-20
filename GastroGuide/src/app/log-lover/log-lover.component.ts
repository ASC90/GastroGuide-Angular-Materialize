import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, PatternValidator  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-lover',
  templateUrl: './log-lover.component.html',
  styleUrls: ['./log-lover.component.css']
})
export class LogLoverComponent implements OnInit {
  login={
    mailLover:'',
    passLover:''
  };

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
    this.router.navigateByUrl("/enconstruccion");
  }

  /* getValidarMail() {
    var emailreg = new RegExp(/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/);
    if (emailreg.test(this.mailChef)) {
      this.validarmail = 'valid';
    } else {
      this.validarmail = 'invalid'
    }
  } */
  onSubmit(form: NgForm) {
		console.log('Formulario:',form);
		if (form.valid) {
      alert("Todo correcto!");
      let val = this.login.mailLover;
      if (localStorage.getItem("loginLOVER"))
        localStorage.removeItem("loginLOVER");
      localStorage.setItem("loginLOVER", val);
      this.router.navigateByUrl("/filtrar");
		}
	}

}
