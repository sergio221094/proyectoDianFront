import { Component, OnInit } from '@angular/core';
import { DocumentTypesService } from '../../../services/document-types.service';

@Component({
  selector: 'app-get-document-types',
  templateUrl: './get-document-types.component.html'
})
export class GetDocumentTypesComponent implements OnInit {

  documentTypes: any[] = [];

  constructor(private _documentTypesService: DocumentTypesService) {
    this._documentTypesService.getAllDocumentTypes().subscribe((data: any) => {
      console.log(data);
      this.documentTypes = data.response;
    });
  }

  ngOnInit(): void { }

}
