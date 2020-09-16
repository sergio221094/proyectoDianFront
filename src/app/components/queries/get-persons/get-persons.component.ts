import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-get-persons',
  templateUrl: './get-persons.component.html'
})
export class GetPersonsComponent implements OnInit {

  persons: any[] = [];

  constructor(private _personService: PersonService) {
    this._personService.getAllPerson().subscribe((data: any) => {
      console.log(data);
      this.persons = data.response;
    });
  }

  deletePerson(personId) {
    this._personService.deletePerson(personId).subscribe((data: any) => {
      console.log(data);
      location.reload();
    });
  }

  ngOnInit(): void { }
}
