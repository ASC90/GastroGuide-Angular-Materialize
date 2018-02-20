import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  miVideo = {
    titulo: '',
    descripcion: '',
    url: '',
    texto: ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert("HAY UN CAMPO INCORRECTO!!");
      return;
    } else {
      alert("LOS CAMPOS SON CORRECTOS!!");
      form.resetForm();
    }
  }

}
