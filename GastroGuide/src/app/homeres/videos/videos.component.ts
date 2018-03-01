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
  
    pTitulo =  '';
    pDescripcion =  '';
    pUrl =  '';
    pTexto =  '';

  constructor(private router: Router, private send: LlamadasMockyService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let videos = {};
    let id = localStorage.getItem('logUser');
    if (!form.valid) {
      return;
    } else {
      videos = { tituloVideo: this.pTitulo, DescripcionVideo: this.pDescripcion, urlVideo: this.pUrl, textoVideo: this.pTexto };
      console.log(videos);
      form.resetForm();
    }
    this.send.addRestaurante(videos, id).subscribe(res => { console.log(res) });
  }
}
