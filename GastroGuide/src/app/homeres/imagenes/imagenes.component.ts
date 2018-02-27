import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FormControl, RadioControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { LlamadasMockyService } from '../../llamadas-mocky.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css'],
  providers: [LlamadasMockyService]
})

export class ImagenesComponent implements OnInit {
  imagen = {
    url:[]
  };

  constructor(private router: Router, private send: LlamadasMockyService) { }

  ngOnInit() {
  }

  onFileSelection(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.imagen.url.push(event.target.result);
      }
      reader.readAsDataURL(event.target.files[0]);    
    }
    this.send.addRestaurante(this.imagen).subscribe(res => {console.log(res)});
  }
}
