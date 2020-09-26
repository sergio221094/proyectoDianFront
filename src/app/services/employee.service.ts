import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SendHttpRequestService } from './send-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  complementUrl = 'employee/';

  constructor(private _sendHttpRequestService: SendHttpRequestService) {

    console.log('Connected service of center of attention');

  }

  getAllEmployee() {
    return this._sendHttpRequestService.httpGet(this.complementUrl + 'getAllEmployee');
  }

  getEmployeeByIdCenter(id) {
    let body = {
      "id_centro_atencion": id
    }
    return this._sendHttpRequestService.httpPost(this.complementUrl + "getEmployeeByIdCenter", body);
  }

  saveEmployee(body) {
    return this._sendHttpRequestService.httpPost(this.complementUrl + "saveEmployee", body);
  }
}
