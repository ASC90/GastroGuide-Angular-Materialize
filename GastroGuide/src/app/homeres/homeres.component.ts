import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';

@Component({
  selector: 'app-homeres',
  templateUrl: './homeres.component.html',
  styleUrls: ['./homeres.component.css']
})
export class HomeresComponent implements OnInit {
  miVideo={
    titulo:'',
    descripcion:'',
    url:'',
    texto:''
  };

  miReceta={
    entrantes:'',
    primeros:'',
    segundos:'',
    postres:'',
    nmenu:'',
    destacado:''
  };

  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm, form2: NgForm) {
    console.log("form:",form,this.miVideo, this.miReceta);
		if (!form.valid && form2.valid) {
      alert("HAY UN CAMPO INCORRECTO!!");
			return;
		}else{
      alert("LOS CAMPOS SON CORRECTOS!!");
		}
	}

}
