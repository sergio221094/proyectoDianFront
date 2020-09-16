import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { CenterOfAttentionService } from '../../services/center-of-attention.service';
import { EmployeeService } from '../../services/employee.service';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html'
})
export class ScheduleAppointmentComponent implements OnInit {

  availableTimes = [
    { time: '08:00' },
    { time: '08:15' },
    { time: '08:30' },
    { time: '08:45' },
    { time: '09:00' },
    { time: '09:15' },
    { time: '09:30' },
    { time: '09:45' },
    { time: '10:00' },
    { time: '10:15' },
    { time: '10:30' },
    { time: '10:45' },
    { time: '11:00' },
    { time: '11:15' },
    { time: '11:30' },
    { time: '11:45' },
    { time: '12:00' },
    { time: '12:15' },
    { time: '12:30' },
    { time: '12:45' },
    { time: '01:00' },
    { time: '01:15' },
    { time: '01:30' },
    { time: '01:45' },
    { time: '02:00' },
    { time: '02:15' },
    { time: '02:30' },
    { time: '02:45' },
    { time: '03:00' },
    { time: '03:15' },
    { time: '03:30' },
    { time: '03:45' },
    { time: '04:00' },
    { time: '08:15' },
    { time: '04:30' },
    { time: '04:45' },
    { time: '05:00' }];

  persons: any[] = [];
  centerOfAttentions: any[] = [];
  employees: any[] = [];
  schedule;

  constructor(
    private _personService: PersonService,
    private _centerOfAttentionService: CenterOfAttentionService,
    private _employeeService: EmployeeService,
    private _appointmentService: AppointmentService) {

    this.schedule = {
      id_persona: 0,
      id_trabajador: 0,
      horario: '',
      fecha: '',
    }
  }

  refreshEmployee(idCenter) {
    console.log(idCenter);
    this._employeeService.getEmployeeByIdCenter(idCenter).subscribe((data: any) => {
      this.employees = data.response;
    });
  }

  getAllPersons() {
    this._personService.getAllPerson().subscribe((data: any) => {
      console.log(data);
      this.persons = data.response;
    });
  }

  getAllCenterOfAttention() {
    this._centerOfAttentionService.getAllCenterOfAttention().subscribe((data: any) => {
      console.log(data);
      this.centerOfAttentions = data.response;
    });
  }

  onSubmitSchedule() {

    this._appointmentService.saveAppointment(JSON.stringify(this.schedule)).subscribe((data: any) => {
      alert("Cita agendada con éxito");
      location.reload();
    });

  }

  ngOnInit(): void {
    this.getAllPersons();
    this.getAllCenterOfAttention();
  }

}
