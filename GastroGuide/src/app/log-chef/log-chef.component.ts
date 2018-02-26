import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { LlamadasMockyService } from '../llamadas-mocky.service';

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
  constructor(private router: Router, private send: LlamadasMockyService) { }

  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    console.log('Formulario:', form);
    if (form.valid) {
      // Post al usuario le paso el mail y el passsword y me tiene que devolver una id y ponerla en el local storage
      this.send.getLogIn(this.login).subscribe(res => {
        if (localStorage.getItem("logUser"))
          localStorage.removeItem("logUser");
        return localStorage.setItem("logUser", res._id);
      });
      let val = this.login.mailChef;
      if (localStorage.getItem("loginCHEF"))
        localStorage.removeItem("loginCHEF");
      localStorage.setItem("loginCHEF", val);
      this.router.navigateByUrl("/homeres");
    }  
  }
}
