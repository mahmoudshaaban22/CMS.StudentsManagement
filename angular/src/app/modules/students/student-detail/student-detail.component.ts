import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentDto, StudentService } from '@proxy/students';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent implements OnInit {
  @Input() studentId: number | null = null;
  student: StudentDto | null = null;

  constructor(
    private activeModal: NgbActiveModal,
    private service: StudentService
  ) {}

  ngOnInit(): void {
    if (this.studentId) {
      this.getStudentDetail(this.studentId);
    }
  }

  getStudentDetail(id: number): void {
    this.service.getStudent(id).subscribe(
      (response) => {
        this.student = response;
      },
      (error) => {
        console.error('Error fetching student details', error);
        this.activeModal.close(); // Close modal if error occurs
      }
    );
  }

  closeModal(): void {
    this.activeModal.close(); // Close the modal
  }
}
