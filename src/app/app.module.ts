import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Servicios
import { PersonService } from './services/person.service';
import { CenterOfAttentionService } from './services/center-of-attention.service';
import { AppointmentService } from './services/appointment.service';
import { DocumentTypesService } from './services/document-types.service';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegisterCenterComponent } from './components/register-center/register-center.component';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';
import { GetPersonsComponent } from './components/queries/get-persons/get-persons.component';
import { GetCenterOfAttentionComponent } from './components/queries/get-center-of-attention/get-center-of-attention.component';
import { GetAppointmentComponent } from './components/queries/get-appointment/get-appointment.component';
import { GetDocumentTypesComponent } from './components/queries/get-document-types/get-document-types.component';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { RegisterPersonComponent } from './components/register-person/register-person.component';
import { GetEmployeeComponent } from './components/queries/get-employee/get-employee.component';
import { GetEmailPhoneComponent } from './components/queries/get-email-phone/get-email-phone.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    RegisterPersonComponent,
    RegisterCenterComponent,
    ScheduleAppointmentComponent,
    GetPersonsComponent,
    GetCenterOfAttentionComponent,
    GetAppointmentComponent,
    GetDocumentTypesComponent,
    RegisterEmployeeComponent,
    GetEmployeeComponent,
    GetEmailPhoneComponent,

  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    PersonService,
    CenterOfAttentionService,
    AppointmentService,
    DocumentTypesService,],
  bootstrap: [AppComponent],
})
export class AppModule { }
