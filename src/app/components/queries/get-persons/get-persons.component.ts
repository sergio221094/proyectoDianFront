import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-get-persons',
  templateUrl: './get-persons.component.html'
})
export class GetPersonsComponent implements OnInit {

  persons: any[] = [];
  edit = 1;

  constructor(private _personService: PersonService) {

  }

  getAllPersons() {
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

  changeEdit(id) {
    this.edit = id;
  }

  ngOnInit(): void {
    this.getAllPersons();
  }
}
