import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CenterOfAttentionService } from '../../services/center-of-attention.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html'
})
export class RegisterEmployeeComponent implements OnInit {
  employee;
  centerOfAttentions: any[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _centerOfAttentionService: CenterOfAttentionService) {

    this.employee = {
      id_centro_atencion: '',
      nombres: ''
    }

    this._centerOfAttentionService.getAllCenterOfAttention().subscribe((data: any) => {
      console.log(data);
      this.centerOfAttentions = data.response;
    });
  }

  ngOnInit(): void {
  }

  onSubmitEmployee() {
    this._employeeService.saveEmployee(JSON.stringify(this.employee)).subscribe((data: any) => {
      console.log(data);
      alert("Empleado guardado con éxito");
      location.reload();
    });
  }

}
