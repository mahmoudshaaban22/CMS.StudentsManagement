import { Component, OnInit } from '@angular/core';
import { PagedAndSortedResultRequestDto, PermissionService } from '@abp/ng.core';
import { Grade } from '@proxy/enums';
import { StudentDto } from '@proxy/students';
import { StudentService } from '@proxy/students/student.service';
import { Router } from '@angular/router';
import { ToasterService } from '@abp/ng.theme.shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: StudentDto[] = [];
  paginatedStudents: StudentDto[] = [];
  pageSize: number = 10; 
  currentPage: number = 1; 
  totalPages: number = 0;
  canCreateEdit: boolean;
  canDelete: boolean;
  
  input: PagedAndSortedResultRequestDto = { maxResultCount: 0 , skipCount: 0, sorting: '' };

  constructor(
    private service: StudentService, 
    private toaster: ToasterService, 
    private modalService: NgbModal,
    private permissionService: PermissionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchStudents();
    this.canCreateEdit = this.permissionService.getGrantedPolicy('StudentsManagement.Students.CreateEdit');
    this.canDelete = this.permissionService.getGrantedPolicy('StudentsManagement.Students.DeleteStudent');
  }
  viewStudentDetail(student: StudentDto): void {
    const modalRef = this.modalService.open(StudentDetailComponent, { size: 'lg' });
    modalRef.componentInstance.studentId = student.id; // Pass the student ID to the modal
  }

  fetchStudents(): void {
    this.input.skipCount = (this.currentPage - 1) * this.pageSize;
    this.input.maxResultCount = this.pageSize;
    
    this.service.getStudentList(this.input).subscribe((response) => {
      this.students = response.items;
      this.totalPages = Math.ceil(response.totalCount / this.pageSize); // Calculate total pages based on totalCount
      this.paginatedStudents = this.students; // Update the displayed students list
    });
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.fetchStudents(); // Fetch the students for the selected page
  }

  getGradeName(grade: Grade): string {
    return Grade[grade];
  }

  addStudent(): void {
    this.router.navigateByUrl('/students/add');
  }

  editStudent(stu: StudentDto): void {
    this.router.navigateByUrl('/students/update', { state: { model: stu } });
  }

  viewStatistics(): void {
    this.router.navigateByUrl('/students/statistics');
  }

  deleteStudent(stu: StudentDto): void {
    this.service.deleteStudent(stu.id).subscribe((response) => {
      if (response) {
        this.toaster.success('Student deleted successfully!');
        this.fetchStudents(); 
      }
    });
  }
}
