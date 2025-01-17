import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Grade } from '@proxy/enums';
import { StudentService, CreateUpdateStudentDto } from '@proxy/students';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.scss'
})
export class UpdateStudentComponent implements OnInit{

  studentForm: FormGroup;
  stuId:number;
  grade = Grade;  // The enum itself
  gradeOptions: { key: string, value: number }[] = [];
  constructor(private studentService: StudentService,
    private router: Router, private toaster: ToasterService,
    private fb: FormBuilder) {
    this.gradeOptions = Object.entries(this.grade)
      .filter(([key, value]) => !isNaN(Number(value))) // Filter out the string keys
      .map(([key, value]) => ({
        key: key,      // Key name (e.g., 'Grade1')
        value: +value // Cast the value to a number (using unary +)
      }));
  }
  
  ngOnInit(): void {
    debugger;
    this.buildForm(history.state.model)

  }
  get f() {
    return this.studentForm.controls;
  }
  buildForm( model : any) {
    if(model == null)
      this.back();
    this.studentForm = this.fb.group({
      name: new FormControl(model.name, [Validators.required, Validators.maxLength(150)]),
      age: new FormControl(model.age, [Validators.required , Validators.min(5), Validators.max(18)]),
      grade: new FormControl(model.grade, [Validators.required]),
    });
    this.stuId =model.id;
  }

  onSubmit() {
    debugger;

    if (!this.studentForm.valid) {
      const errorMessages = this.getFormValidationErrors(this.studentForm);
    
      errorMessages.forEach((errorMessage) => {
        this.toaster.error(errorMessage, 'Validation Error');
      });
    
      return;
    }
    debugger;
    let StudentDto = this.studentForm.value as CreateUpdateStudentDto;
    StudentDto.id =this.stuId;
    this.studentService.updateStudent(StudentDto).subscribe(res => {
      if (res) {
        this.router.navigateByUrl('/students');
      }
    });
  }

  private getFormValidationErrors(form: FormGroup): string[] {
    const messages: string[] = [];
    Object.keys(form.controls).forEach((key) => {
      const controlErrors = form.get(key)?.errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach((errorKey) => {
          let message = '';
          switch (errorKey) {
            case 'required':
              message = `${key} is required.`;
              break;
            case 'minlength':
              message = `${key} must be at least ${controlErrors['minlength'].requiredLength} characters long.`;
              break;
            case 'maxlength':
              message = `${key} cannot exceed ${controlErrors['maxlength'].requiredLength} characters.`;
              break;
            case 'email':
              message = `${key} must be a valid email address.`;
              break;
            default:
              message = `${key} is invalid.`;
          }
          messages.push(message);
        });
      }
    });
    return messages;
  }
  
  back() {
    this.router.navigateByUrl('/students');
  }
}

