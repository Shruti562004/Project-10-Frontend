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
const routes: Routes = [
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
    path: 'facultylist',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
