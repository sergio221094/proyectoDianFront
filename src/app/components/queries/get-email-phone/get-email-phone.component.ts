import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-get-email-phone',
  templateUrl: './get-email-phone.component.html'
})
export class GetEmailPhoneComponent implements OnInit {

  arrayData: any[] = [];

  constructor(private _personService: PersonService) { }


  getEmailAndPhone() {
    this._personService.getEmailPhone().subscribe((data: any) => {
      console.log(data);
      console.log('Hello');
      this.arrayData = data.response;
    });
  }

  ngOnInit(): void {
    this.getEmailAndPhone()
  }

}
