import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FormControl, RadioControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { LlamadasMockyService } from '../../llamadas-mocky.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
  providers: [LlamadasMockyService]
})
export class OfertasComponent implements OnInit {
  
    pOferta = '';
    pOfertas = '';
  
  constructor(private router: Router, private send: LlamadasMockyService) { }

  ngOnInit() {
  }

  onSubmit(form3: NgForm) {
    let oferta = {};
    let id = localStorage.getItem('logUser');
    if (!form3.valid) {
      return;
    } else {
      oferta = {promociones: { promocion: this.pOferta, descripcion: this.pOfertas }};
      console.log(oferta);
      form3.resetForm();
    }
    this.send.addRestaurante(oferta, id).subscribe(res => { console.log(res) });
  }
}
