import { Component, OnInit } from '@angular/core';
import { PatternValidator,FormGroup,FormControl,Validators} from '@angular/forms';




@Component({
  selector: 'app-registro-restaurante',
  templateUrl: './registro-restaurante.component.html',
  styleUrls: ['./registro-restaurante.component.css']
})
export class RegistroRestauranteComponent implements OnInit {
  
  // restaurante:string="";
  // nombre:string="";
  // apellidos:string="";
  // genero:string="";
  // email:string="";
  // passwordText:string="";
  // password2Text:string="";
  // tel:number;
  // cp:number;
  // poblacion:string="";
  // calle:string="";
  // numer:string="";

  // errornombre:string="Su nombre no puede contener números o caracteres especiales";
  // errorapellidos:string="Su apellido no puede contener números o caracteres especiales";
  // erroremail:string="Por favor introduzca su correo electrónico en formato correcto";
  // errorcontrasena:string="Su contraseña debe contener por lo menos 8 caracteres y contener una letra mayúscula, una minúscula y un número";
  // errortel:string="Por favor introduzca su teléfono en formato correcto";
  // errorcp:string="Por favor introduzca su código postal en formato correcto";
 
  form = new FormGroup({
    restaurante: new FormControl("",Validators.required),
    nombre: new FormControl("",[Validators.required,Validators.pattern("[\s a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]*")]),
    apellidos: new FormControl("",[Validators.required,Validators.pattern("[\s a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]*")]),
    genero: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required]),
    password2: new FormControl("",Validators.required),
    tel: new FormControl("",[Validators.required,Validators.pattern("[0-9]{9}")]),
    cp: new FormControl("",[Validators.required,Validators.pattern("[0-9]{5}")]),
    poblacion: new FormControl("",Validators.required),
    calle: new FormControl("",Validators.required),
    numero: new FormControl("",Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }

}
