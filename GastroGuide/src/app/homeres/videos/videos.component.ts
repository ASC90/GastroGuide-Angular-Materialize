import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FormControl, RadioControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { LlamadasMockyService } from '../../llamadas-mocky.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [LlamadasMockyService]
})
export class VideosComponent implements OnInit {
  miVideo = {
    titulo: '',
    descripcion: '',
    url: '',
    texto: ''
  };
  constructor(private router: Router, private send: LlamadasMockyService) { }

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
    this.send.addRestaurante(this.miVideo).subscribe(res => {console.log(res)});
  }
}
