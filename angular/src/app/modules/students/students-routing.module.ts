import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { authGuard, permissionGuard } from '@abp/ng.core';
import { StudentStatisticsComponent } from './student-statistics/student-statistics.component';

const routes: Routes = 
[
{
  path:'add',
  pathMatch:'full',
  component:AddStudentComponent,
  canActivate:[authGuard, permissionGuard ],
  data : { requiredPolicy : "StudentsManagement.Students.CreateEdit"}

},
{
  path:'statistics',
  pathMatch:'full',
  component:StudentStatisticsComponent,
  canActivate:[authGuard, permissionGuard ],
  data : { requiredPolicy : "StudentsManagement.Students.StudentsStatistics"}

},
{
  path:'update',
  pathMatch:'full',
  component:UpdateStudentComponent,
  canActivate:[authGuard, permissionGuard ],
  data : { requiredPolicy : "StudentsManagement.Students.CreateEdit"}


},
{
  path:'',
  pathMatch:'full',
  component:StudentsListComponent,
  canActivate:[authGuard, permissionGuard ],
  data : { requiredPolicy : "StudentsManagement.Students.ListStudent"}


}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
