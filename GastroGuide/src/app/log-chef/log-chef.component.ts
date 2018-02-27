import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { LlamadasMockyService } from '../llamadas-mocky.service';

import { FormControl, RadioControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


declare var $: any;

@Component({
  selector: 'app-log-chef',
  templateUrl: './log-chef.component.html',
  styleUrls: ['./log-chef.component.css'],
  providers: [LlamadasMockyService]
})
export class LogChefComponent implements OnInit {
  //VALIDACION
  login = {
    mailChef: '',
    passChef: ''
  };
  isREsOK = true;
  
  constructor(private router: Router, private send: LlamadasMockyService) { }

  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    console.log('Formulario:', form);
    if (form.valid) {
      // Post al usuario le paso el mail y el passsword y me tiene que devolver una id y ponerla en el local storage
      this.send.getLogIn(this.login).subscribe(res => {
        console.log("resFormulario:", res);
        if (res.length > 0) {
          if (localStorage.getItem("logUser"))
            localStorage.removeItem("logUser");
            this.router.navigateByUrl("/homeres");
          return localStorage.setItem("logUser", res[0]._id);
        }
        if (res.length < 1) {
          this.isREsOK = false;
        }
      });
      let val = this.login.mailChef;
      if (localStorage.getItem("loginCHEF"))
        localStorage.removeItem("loginCHEF");
      localStorage.setItem("loginCHEF", val);
     
    }
  }
}
