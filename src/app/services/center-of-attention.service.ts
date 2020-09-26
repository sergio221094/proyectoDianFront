import { Injectable } from '@angular/core';
import { SendHttpRequestService } from './send-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class CenterOfAttentionService {

  complementUrl = 'centerOfAttention/';

  constructor(private _sendHttpRequestService: SendHttpRequestService) {

    console.log('Connected service of center of attention');

  }

  getAllCenterOfAttention() {
    return this._sendHttpRequestService.httpGet(this.complementUrl + 'getAllCenterOfAttention');
  }

  getCenterOfAttentionById(id) {
    let body = {
      "id_centro_atencion": id
    }
    return this._sendHttpRequestService.httpPost(this.complementUrl + 'getCenterOfAttentionById', body);
  }

  saveCenterOfAttention(body) {
    return this._sendHttpRequestService.httpPost(this.complementUrl + 'saveCenterOfAttention', body);
  }


}
