import { Injectable } from '@angular/core';
import { SendHttpRequestService } from './send-http-request.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  complementUrl = 'person';
  httpOptions;

  constructor(private _sendHttpRequestService: SendHttpRequestService) {
    console.log('Connected service of center of person');
  }

  getAllPerson() {
    return this._sendHttpRequestService.httpGet(this.complementUrl);
  }

  savePerson(body) {
    return this._sendHttpRequestService.httpPost(this.complementUrl, body);
  }

  deletePerson(id) {

    let httpOptionsDel = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      'id_persona': `${id}`
    })


    console.log(httpOptionsDel);

    return this._sendHttpRequestService.httpDelete(this.complementUrl, httpOptionsDel);
  }
}
