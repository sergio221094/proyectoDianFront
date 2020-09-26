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
  appointmentsByDate: any[] = [];
  persons: any[] = [];
  employee: any[] = [];
  mostrar = 0;
  queryDates;

  typeQueries = [
    {
      id: 0,
      descp: 'Consultar todas las citas'
    },
    {
      id: 1,
      descp: 'Consultar citas entre fechas',
    },
    {
      id: 2,
      descp: 'Consultar citas entre fechas y tipo persona',
    },
  ];

  typeRegisters = [
    {
      id: 1,
      descp: 'Natural'
    },
    {
      id: 2,
      descp: 'Juridica',
    },
  ];

  constructor(private _appointmentService: AppointmentService,
    private _personService: PersonService,
    private _employeeService: EmployeeService) {

    this.queryDates = {
      fechaInicial: '',
      fechaFinal: '',
      tipoPersona: ''
    }

  }

  ngOnInit(): void {
    this.getAllApoinment();
    this.getAllPersons();
    this.getAllEmployee();
  }

  parseDate(dateString) {
    let d = Date.parse(dateString);

    const ye = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('es', { month: 'long' }).format(d);
    const da = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(d);

    return `${da}-${mo}-${ye}`;

  }

  onSubmitAppoinmentByDate() {

    if (this.mostrar == 1) {
      this._appointmentService.getAppoinmentByRangeDates(JSON.stringify(this.queryDates)).subscribe((data: any) => {
        this.appointmentsByDate = data.response;
      });
    } else if (this.mostrar == 2) {
      this._appointmentService.getAppoinmentByRangeDates(JSON.stringify(this.queryDates)).subscribe((data: any) => {
        this.appointmentsByDate = data.response;
      });
    }

  }

  funcMostrar(id) {
    this.mostrar = id;
  }

  getAllApoinment() {
    this._appointmentService.getAllAppointment().subscribe((data: any) => {
      this.appointments = data.response;
    });
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
    let response = '';
    const specificPerson = this.persons.find(p => id === p.id_persona);
    try {
      response = specificPerson.nombre + ', ' + specificPerson.identificacion;
    } catch (e) {
    }
    return response;
  }

  setNameEmployee(id) {
    let response = '';
    const employer = this.employee.find(e => id === e.id_trabajador);
    try {
      response = employer.nombres;
    } catch (e) {
    }
    return response;
  }
}
