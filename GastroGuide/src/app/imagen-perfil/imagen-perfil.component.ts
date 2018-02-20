import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-perfil',
  templateUrl: './imagen-perfil.component.html',
  styleUrls: ['./imagen-perfil.component.css']
})
export class ImagenPerfilComponent implements OnInit {
 
  url = "/assets/img/GastroChef.png";
 
  constructor() { }

  ngOnInit() {
  }

  onFileSelection(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);    
    }
  }
}



