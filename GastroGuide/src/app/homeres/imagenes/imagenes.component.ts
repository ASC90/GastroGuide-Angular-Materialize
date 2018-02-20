import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})

export class ImagenesComponent implements OnInit {
  imagen = {
    url:[]
  };

  constructor() { }

  ngOnInit() {
  }

  onFileSelection(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.imagen.url.push(event.target.result);
      }
      reader.readAsDataURL(event.target.files[0]);    
      // let foto = this.imagen.url;
      // this.imagen.url.push(foto);
    }
  }
}
