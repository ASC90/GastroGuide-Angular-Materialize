import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-restaurante-videos',
  templateUrl: './restaurante-videos.component.html',
  styleUrls: ['./restaurante-videos.component.css']
})
export class RestauranteVideosComponent implements OnInit {
  @Input() video: any;
  safeURL;
  constructor(public videoUrl: string, private _sanitize: DomSanitizer) {
    this.videoUrl = this.video[0].videoUrl;
    this.safeURL = this._sanitize.bypassSecurityTrustResourceUrl(videoUrl);
  }

  ngOnInit() {
    console.log("Video", this.video);
  }

}
