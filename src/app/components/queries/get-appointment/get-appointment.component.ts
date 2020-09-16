import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-get-appointment',
  templateUrl: './get-appointment.component.html'
})
export class GetAppointmentComponent implements OnInit {

  appointments: any[] = [];
  persons: any[] = [];

  constructor(private _appointmentService: AppointmentService,
    private _personService: PersonService) {
    this._appointmentService.getAllAppointment().subscribe((data: any) => {
      console.log(data);
      this.appointments = data.response;
    });
  }

  ngOnInit(): void {
    this.getAllPersons();
  }

  getAllPersons() {
    this._personService.getAllPerson().subscribe((data: any) => {
      this.persons = data.response;
    });
  }

  setNamePerson(id) {
    const specificPerson = this.persons.find(p => id === p.id_persona);
    return specificPerson.nombre + ', ' + specificPerson.identificacion;
  }
}
