import { Injectable } from '@angular/core';
import { SendHttpRequestService } from './send-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypesService {

  complementUrl = 'documentTypes/';

  constructor(private _sendHttpRequestService: SendHttpRequestService) {
    console.log('Connected service of center of document types');
  }


  getAllDocumentTypes() {
    return this._sendHttpRequestService.httpGet(this.complementUrl + 'getAllDocumentTypes');
  }
}
