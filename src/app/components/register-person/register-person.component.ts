import { Component, OnInit } from '@angular/core';
import { DocumentTypesService } from '../../services/document-types.service';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-register-person',
  templateUrl: './register-person.component.html'
})
export class RegisterPersonComponent implements OnInit {

  tipoDocs: any[] = [];
  person;

  typeRegisters = [
    {
      id: 1,
      descp: 'Persona natural'
    },
    {
      id: 2,
      descp: 'Persona juridica',
    },
  ];

  mostrar = 0;

  constructor(
    private _documentTypesService: DocumentTypesService,
    private _personService: PersonService) {

    this.person = {
      id_tipo_identificacion: '0',
      identificacion: '',
      nombre: '',
      email: '',
      clave: '',
      telefono: '',
      fecha_registro: this.getCurrentDate(),
      razon_social: '',
      nit: ''
    };

    this._documentTypesService.getAllDocumentTypes().subscribe((data: any) => {
      console.log(data);
      this.tipoDocs = data.response;
    });
  }

  ngOnInit(): void { }

  funcmiMetodo(id) {
    this.mostrar = id;
  }

  onSubmitPerson() {

    this._personService.savePerson(JSON.stringify(this.person)).subscribe((data: any) => {
      alert("Usuario guardado con éxito");
      location.reload();
    });

  }

  getCurrentDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  }
}
