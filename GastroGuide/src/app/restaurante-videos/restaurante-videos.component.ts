import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-restaurante-videos',
  templateUrl: './restaurante-videos.component.html',
  styleUrls: ['./restaurante-videos.component.css']
})
export class RestauranteVideosComponent implements OnInit {
  @Input() video: any;
  videoUrl: string;
  safeURL;
  constructor(public _sanitize: DomSanitizer) {
    
  }

  ngOnInit() {
    console.log("Video", this.video);

    this.videoUrl = this.video[0].videoUrl;
    this.safeURL = this._sanitize.bypassSecurityTrustResourceUrl(this.videoUrl);
    console.log(this.safeURL.changingThisBreaksApplicationSecurity);
  }
}
