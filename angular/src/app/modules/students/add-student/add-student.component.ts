import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Grade } from '@proxy/enums';
import { CreateUpdateStudentDto, StudentService } from '@proxy/students';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterService } from '@abp/ng.theme.shared';
import { LocalizationService } from '@abp/ng.core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent implements OnInit{

  studentForm: FormGroup;
  grade = Grade;  // The enum itself
  gradeOptions: { key: string, value: number }[] = [];
  constructor(private studentService: StudentService,
    private router: Router, private toaster: ToasterService,private localizationService: LocalizationService,
    private fb: FormBuilder) {
      
    this.buildForm();
    this.gradeOptions = Object.entries(this.grade)
      .filter(([key, value]) => !isNaN(Number(value))) // Filter out the string keys
      .map(([key, value]) => ({
        key: this.getLocalizedValue(key),      
        value: +value 
      }));
  }
  
  ngOnInit(): void {

  }
  get f() {
    return this.studentForm.controls;
  }
  buildForm() {
    this.studentForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      age: new FormControl('', [Validators.required , Validators.min(5), Validators.max(18)]),
      grade: new FormControl(null, [Validators.required]),
    });
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
    this.studentService.createStudent(StudentDto).subscribe(res => {
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
  getLocalizedValue(key: string, args?: any): string {
    debugger;
    key= 'StudentsManagement::'+key;
    return this.localizationService.instant(key, args);
  }
  back() {
    this.router.navigateByUrl('/students');
  }
}
