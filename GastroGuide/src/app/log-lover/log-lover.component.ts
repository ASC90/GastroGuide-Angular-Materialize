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

  constructor(private router: Router) { }
  
  ngOnInit() {

  }
  onSubmit(form: NgForm) {
		console.log('Formulario:',form);
		if (form.valid) {
      let val = this.login.mailLover;
      if (localStorage.getItem("loginLOVER"))
        localStorage.removeItem("loginLOVER");
      localStorage.setItem("loginLOVER", val);
      // this.router.navigateByUrl("/filtrar");
		}
	}

}
