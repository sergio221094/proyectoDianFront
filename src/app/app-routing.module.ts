import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterPersonComponent } from './components/register-person/register-person.component';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { RegisterCenterComponent } from './components/register-center/register-center.component';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';
import { GetPersonsComponent } from './components/queries/get-persons/get-persons.component';
import { GetCenterOfAttentionComponent } from './components/queries/get-center-of-attention/get-center-of-attention.component';
import { GetAppointmentComponent } from './components/queries/get-appointment/get-appointment.component';
import { GetDocumentTypesComponent } from './components/queries/get-document-types/get-document-types.component';
import { GetEmployeeComponent } from './components/queries/get-employee/get-employee.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registerPerson', component: RegisterPersonComponent },
  { path: 'registerEmployee', component: RegisterEmployeeComponent },
  { path: 'registerCenter', component: RegisterCenterComponent },
  { path: 'scheduleAppointment', component: ScheduleAppointmentComponent },
  { path: 'getPersons', component: GetPersonsComponent },
  { path: 'getCenterOfAttention', component: GetCenterOfAttentionComponent },
  { path: 'getAppointment', component: GetAppointmentComponent },
  { path: 'getDocumentTypes', component: GetDocumentTypesComponent },
  { path: 'getEmployee', component: GetEmployeeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
