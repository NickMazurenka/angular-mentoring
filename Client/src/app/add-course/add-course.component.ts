import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CourseAuthorsRequired } from './course-authors-selector/course-authors-required.validator';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  addCourseForm: FormGroup;

  authors: string[] = [
    'Kim Kuan',
    'Vasya',
    'Petya',
    'Rjevskiy',
    'Rojonskiy',
    'Rogojonskiy',
  ];

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.addCourseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      date: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      authors: ['', [CourseAuthorsRequired]]
    });
  }

  onSubmit() {
    this.validateAllFormFields(this.addCourseForm);
    if (!this.addCourseForm.valid) {
      return;
    }
    alert(new JsonPipe().transform(this.addCourseForm.value));
  }

  onCancelClick() {
    this.router.navigate(['courses']);
  }

  showControlError(controlName: string): boolean {
    const control = this.addCourseForm.get(controlName);
    return control.invalid && control.touched;
  }

  getControlError(controlName: string): string {
    const control = this.addCourseForm.get(controlName);
    if (control.errors.required) {
      return `Please specify ${controlName}`;
    }
    if (control.errors.maxLength) {
      return `${controlName} length should not exceed ${control.errors.maxLength.requiredLength} symbols`;
    }
    if (control.errors.authorRequired) {
      return `Please specify one or more authors`;
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
