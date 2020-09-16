import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendHttpRequestService {

  private baseUrl = environment.urlEndPoint;

  private httpOptions = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  constructor(private http: HttpClient) { }


  httpGet(complementUrl: string, optionalHeaders?: any): any {
    return this.http.get(this.baseUrl + complementUrl, { headers: optionalHeaders ? optionalHeaders : this.httpOptions });
  }

}
