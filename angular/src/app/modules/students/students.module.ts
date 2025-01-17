import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { ValidationErrorModule } from '@abp/ng.theme.lepton-x';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { ChartModule } from "@abp/ng.components/chart.js";
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentStatisticsComponent } from './student-statistics/student-statistics.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  declarations: [AddStudentComponent , UpdateStudentComponent , StudentStatisticsComponent , StudentsListComponent ,StudentDetailComponent],
  imports: [
    SharedModule,
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    ValidationErrorModule,
    NgxDatatableModule,
    NbCardModule,
    NbCardModule,  // Add this to the imports array
    NbLayoutModule, 
    ChartModule,
    NgbModule,
    NbThemeModule.forRoot(), // Add theme module

    
    
  ]
})
export class StudentsModule { }
