import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  upload(formData, options, id) {
    let headers = this.tokenService.currentAuthHeaders;
    headers.delete('Content-Type');
    let options = new RequestOptions({ headers: headers });

    return this.tokenService.request({
      method: 'post',
      url: `http://localhost:3000/api/projects/${id}/upload`,
      body: formData,
      headers: options.headers
    }).map(res => res.json());
  }
}
