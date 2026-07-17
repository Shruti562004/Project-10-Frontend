import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CourierComponent } from './courier/courier.component';
import { VoiceComponent } from './voice/voice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { FooterComponent } from './footer/footer.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './login/signup.component';
import { AuthService } from './auth-service.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CourierListComponent } from './courier/courier-list.component';
import { VoiceListComponent } from './voice/voice-list.component';
import { ForgetPasswordComponent } from './login/forget-password.component';
import { ChangePasswordComponent } from './user/change-password.component';
import { MyprofileComponent } from './user/my-profile.component';
import { MarksheetMeritListComponent } from './marksheet/marksheet-merit-list.component';
import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle/vehicle-list.component';
import { WaterComponent } from './water/water.component';
import { WaterListComponent } from './water/water-list.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherListComponent } from './weather/weather-list.component';
import { DroneComponent } from './drone/drone.component';
import { DroneListComponent } from './drone/drone-list.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    UserComponent,
    CollegeComponent,
    StudentComponent,
    MarksheetComponent,
    CourseComponent,
    SubjectComponent,
    TimetableComponent,
    FacultyComponent,
    CourierComponent,
    VoiceComponent,
    NavbarComponent,
    RoleListComponent,
    UserListComponent,
    CollegeListComponent,
    StudentListComponent,
    CourseListComponent,
    SubjectListComponent,
    TimetableListComponent,
    FacultyListComponent,
    FooterComponent,
    MarksheetListComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    CourierListComponent,
    VoiceListComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
MyprofileComponent,
MarksheetMeritListComponent,
GetMarksheetComponent,
VehicleComponent,
VehicleListComponent,
WaterComponent,
WaterListComponent,
WeatherComponent,
WeatherListComponent,
DroneComponent,
DroneListComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    },

     HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
