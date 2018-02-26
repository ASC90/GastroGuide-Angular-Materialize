import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FormControl, RadioControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { LlamadasMockyService } from '../../llamadas-mocky.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [LlamadasMockyService]
})
export class MenuComponent implements OnInit {
  miMenu = {
    entrantes: '',
    primeros: '',
    segundos: '',
    postres: '',
    nmenu: '',
    destacado: ''
  };
  constructor(private router: Router, private send: LlamadasMockyService) { }

  ngOnInit() {
  }

  onSubmit(form2: NgForm) {
    if (!form2.valid) {
      alert("HAY UN CAMPO INCORRECTO!!");
      return;
    } else {
      alert("LOS CAMPOS SON CORRECTOS!!");
      form2.resetForm();
    }
    this.send.addRestaurante(this.miMenu).subscribe(res => {console.log(res)});
  }
}
