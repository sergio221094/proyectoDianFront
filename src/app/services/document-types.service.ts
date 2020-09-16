import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypesService {

  constructor(private http: HttpClient) {
    console.log('Connected service of center of document types');
  }

  sendService(query: string) {
    const url = `http://localhost:8081/api/${query}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, { headers })
  }

  getAllDocumentTypes() {
    return this.sendService('documentTypes');
  }
}
