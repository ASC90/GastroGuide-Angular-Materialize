import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeres',
  templateUrl: './homeres.component.html',
  styleUrls: ['./homeres.component.css']
})
export class HomeresComponent implements OnInit {
  // readUrl(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.onload = (event: any) => {
  //       this.url = event.target.result;
  //     }

  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }
  constructor() { }

  ngOnInit() {
  }

}
