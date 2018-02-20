import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-chef',
  templateUrl: './log-chef.component.html',
  styleUrls: ['./log-chef.component.css']
})
export class LogChefComponent implements OnInit {
  //VALIDACION
  login = {
    mailChef: '',
    passChef: ''
  };
  constructor(private router: Router) { }

  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    console.log('Formulario:', form);
    if (form.valid) {
      alert("Todo correcto!");
      let val = this.login.mailChef;
      if (localStorage.getItem("loginCHEF"))
        localStorage.removeItem("loginCHEF");
      localStorage.setItem("loginCHEF", val);
      this.router.navigateByUrl("/homeres");
    }
  }

}
