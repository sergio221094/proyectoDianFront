import { Injectable } from '@angular/core';
import { SendHttpRequestService } from './send-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  complementUrl = 'appointment/';

  constructor(private _sendHttpRequestService: SendHttpRequestService) {

    console.log('Connected service of center of Appointment');

  }

  getAllAppointment() {
    return this._sendHttpRequestService.httpGet(this.complementUrl + 'getAllAppointment');
  }

  saveAppointment(body) {
    return this._sendHttpRequestService.httpPost(this.complementUrl + 'saveAppointment', body);
  }


  getAppoinmentByRangeDates(body) {
    return this._sendHttpRequestService.httpPost(this.complementUrl + "getAppoinmentByRangeDates", body);
  }

  getAppoinmentByRangeDatesAndTypePerson(body) {
    return this._sendHttpRequestService.httpPost(this.complementUrl + "getAppoinmentByRangeDatesAndTypePerson", body);
  }
}
