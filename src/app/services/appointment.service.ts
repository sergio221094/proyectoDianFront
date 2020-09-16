import { Injectable } from '@angular/core';
import { SendHttpRequestService } from './send-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  complementUrl = 'appointment';

  constructor(private _sendHttpRequestService: SendHttpRequestService) {

    console.log('Connected service of center of Appointment');

  }

  /*sendService(method, body) {
    const url = this.url + `appointment`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    switch (method) {
      case 'GET': {
        return this.http.get(url, httpOptions);
      }

      case 'POST': {
        return this.http.post(url, body, httpOptions);

      }

    }

  }*/


  getAllAppointment() {
    return this._sendHttpRequestService.httpGet(this.complementUrl);
  }

  /*saveAppointment(body) {
    return this.sendService('POST', body);
  }*/

}
