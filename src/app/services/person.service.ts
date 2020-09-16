import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
    console.log('Connected service of center of person');
  }

  sendService(method, body) {
    const url = `http://localhost:8081/api/person`;
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

      case 'DELETE': {
        const httpOptionsDel = {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            'id_persona': `${body}`
          })
        };

        console.log(httpOptionsDel);
        return this.http.delete(url, httpOptionsDel);

      }

    }

  }

  getAllPerson() {
    return this.sendService('GET', null);
  }

  savePerson(body) {
    return this.sendService('POST', body);
  }

  deletePerson(id) {
    return this.sendService('DELETE', id);
  }
}
