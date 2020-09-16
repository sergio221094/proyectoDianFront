import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { CenterOfAttentionService } from '../../../services/center-of-attention.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html'
})
export class GetEmployeeComponent implements OnInit {

  employees: any[] = [];
  centers: any[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _centerOfAttentionService: CenterOfAttentionService) {
  }

  ngOnInit(): void {
    this.getCenterNameById();
    this.getAllEmployee();
  }

  getAllEmployee() {

    this._employeeService.getAllEmployee().subscribe((data: any) => {
      this.employees = data.response;
    });

  }

  getCenterNameById() {

    this._centerOfAttentionService.getAllCenterOfAttention().subscribe((data: any) => {
      this.centers = data.response;
    });

  }

  setNameCenter(id) {
    const center = this.centers.find(c => id === c.id_centro_atencion);
    return center.nombre + ', ' + center.direccion;
  }

}
