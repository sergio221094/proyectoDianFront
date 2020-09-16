import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CenterOfAttentionService {

  constructor(private http: HttpClient) {

    console.log('Connected service of center of attention');

  }


  sendService(method, body, route: string) {
    const url = `http://localhost:8081/api/centerOfAttention/${route}`;
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

  }

  getAllCenterOfAttention() {
    return this.sendService('GET', null, '');
  }

  getCenterOfAttentionById(id) {
    let body = {
      "id_centro_atencion": id
    }
    return this.sendService('POST', body, 'getCenterOfAttentionById')
  }

  saveCenterOfAttention(body) {
    console.log(body);
    return this.sendService('POST', body, 'saveCenterOfAttention');
  }


}
