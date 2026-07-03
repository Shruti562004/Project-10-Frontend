import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
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
import { FacultyListComponent } from './faculty/faculty-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './login/signup.component';
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

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'role',
    component: RoleComponent
  },

   {
    path: 'role/:id',
    component: RoleComponent
  },

  {
    path: 'user',
    component: UserComponent
  },

   {
    path: 'user/:id',
    component: UserComponent
  },

  {
    path: 'college',
    component: CollegeComponent
  },

    {
    path: 'college/:id',
    component: CollegeComponent
  },

   {
    path: 'student',
    component: StudentComponent
  },

   {
    path: 'student/:id',
    component: StudentComponent
  },
   {
    path: 'marksheet',
    component: MarksheetComponent
  },

   {
    path: 'marksheet/:id',
    component: MarksheetComponent
  },

   {
    path: 'course',
    component: CourseComponent
  },

   {
    path: 'course/:id',
    component: CourseComponent
  },

   {
    path: 'subject',
    component: SubjectComponent
  },

    {
    path: 'subject/:id',
    component: SubjectComponent
  },

   {
    path: 'timetable',
    component: TimetableComponent
  },

    {
    path: 'timetable/:id',
    component: TimetableComponent
  },

  {
    path: 'faculty',
    component: FacultyComponent
  },

    {
    path: 'facultyList',
    component: FacultyListComponent
  },

    {
    path: 'faculty/:id',
    component: FacultyComponent
  }, 
  {
    path: 'courier',
    component: CourierComponent
  },
  {
    path: 'voice',
    component: VoiceComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },

   {
    path: 'roleList',
    component: RoleListComponent
  }
  ,

   {
    path: 'userList',
    component: UserListComponent
  }
  ,


   {
    path: 'collegeList',
    component: CollegeListComponent
  },

  
   {
    path: 'studentList',
    component: StudentListComponent
  },

  
  
   {
    path: 'courseList',
    component: CourseListComponent
  },

  
  
   {
    path: 'subjectList',
    component: SubjectListComponent
  },
  {
    path: 'facultyList',
    component: FacultyListComponent
  },
  {
    path: 'timetableList',
    component: TimetableListComponent
  },
  
  {
    path: 'marksheetList',
    component: MarksheetListComponent
  },
  {
    path: 'courierList',
    component: CourierListComponent
  },
    {
    path: 'voiceList',
    component: VoiceListComponent
  },

 {
    path: 'voice/:id',
    component: VoiceComponent
  },

 {
    path: 'courier/:id',
    component: CourierComponent
  },

   {
    path: 'login',
    component: LoginComponent
  },
   {
    path: 'signup',
    component: SignupComponent
  },
   {
    path: 'forgetPassword',
    component: ForgetPasswordComponent
  },
  {
    path: 'changePassword',
    component:ChangePasswordComponent
  },
  {
    path: 'myProfile',
    component:MyprofileComponent
  },
    {
    path: 'marksheetMeritList',
    component:MarksheetMeritListComponent
  },
     {
    path: 'getMarksheet',
    component:GetMarksheetComponent
  },
  {
    path: 'vehicle',
    component:VehicleComponent
  },
    {
    path: 'vehicleList',
    component: VehicleListComponent
  },

    {
    path: 'vehicle/:id',
    component: VehicleComponent
  },

   {
    path: 'water',
    component:WaterComponent
  },
    {
    path: 'waterList',
    component:WaterListComponent
  },

    {
    path: 'water/:id',
    component: WaterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
