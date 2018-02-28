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

  pEntrantes = '';
  pPrimeros = '';
  pSegundos = '';
  pPostres = '';
  pNmenu = '';
  pDestacado = '';

  constructor(private router: Router, private send: LlamadasMockyService) { }

  ngOnInit() {
  }

  onSubmit(form2: NgForm) {
    let menu = {};
    let id = localStorage.getItem('logUser');

    if (!form2.valid) {
      alert("HAY UN CAMPO INCORRECTO!!");
      return;
    } else {
      alert("LOS CAMPOS SON CORRECTOS!!");
      menu = {
        menu: [{ titol: "Entrantes", platos: this.pEntrantes },
        { titol: "Primeros", platos: this.pPrimeros },
        { titol: "Segundos", platos: this.pSegundos },
        { titol: "Postres", platos: this.pPostres }]
      };
      console.log(menu);
      form2.resetForm();
    }
    this.send.addRestaurante(menu, id).subscribe(res => { console.log(res) });
  }
}
