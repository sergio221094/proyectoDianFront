import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';
import { PersonService } from '../../../services/person.service';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-get-appointment',
  templateUrl: './get-appointment.component.html'
})
export class GetAppointmentComponent implements OnInit {

  appointments: any[] = [];
  persons: any[] = [];
  employee: any[] = [];

  constructor(private _appointmentService: AppointmentService,
    private _personService: PersonService,
    private _employeeService: EmployeeService) {
    this._appointmentService.getAllAppointment().subscribe((data: any) => {
      console.log(data);
      this.appointments = data.response;
    });
  }

  ngOnInit(): void {
    this.getAllPersons();
    this.getAllEmployee();
  }

  getAllPersons() {
    this._personService.getAllPerson().subscribe((data: any) => {
      this.persons = data.response;
    });
  }

  getAllEmployee() {
    this._employeeService.getAllEmployee().subscribe((data: any) => {
      this.employee = data.response;
    });
  }
  setNamePerson(id) {
    const specificPerson = this.persons.find(p => id === p.id_persona);
    return specificPerson.nombre + ', ' + specificPerson.identificacion;
  }

  setNameEmployee(id) {
    const employer = this.employee.find(e => id === e.id_trabajador);
    return employer.nombres;
  }
}
