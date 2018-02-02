import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe, DatePipe } from '@angular/common';
import { CourseAuthorsRequired } from './course-authors-selector/course-authors-required.validator';
import { Subscription } from 'rxjs/Subscription';
import { CoursesService } from '../shared-services/courses.service';
import { ICourseDto } from '../shared-models/course-dto.model';
import { ICourseDetails } from '../shared-models/course-details.model';

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

  private editMode: boolean = false;

  private _paramsSubscription: Subscription;
  private _getCourseSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private formBuilder: FormBuilder) {
    this._paramsSubscription = this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.loadCourse(params['id']);
      }
    });
    this.addCourseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      date: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      authors: ['', [CourseAuthorsRequired]]
    });
  }

  private loadCourse(id: number) {
    this._getCourseSubscription = this.coursesService.getCourse(id).subscribe((course: ICourseDetails) => {
      this.editMode = true;
      this.addCourseForm.get('title').setValue(course.name);
      this.addCourseForm.get('description').setValue(course.description);
      this.addCourseForm.get('date').setValue(course.date);
      this.addCourseForm.get('duration').setValue(course.duration);
      this.addCourseForm.get('authors').setValue(course.authors);
    });
  }

  private submit() {
    this.validateAllFormFields(this.addCourseForm);
    if (!this.addCourseForm.valid) {
      return;
    }
    alert(new JsonPipe().transform(this.addCourseForm.value));
  }

  onSubmit() {
    this.submit();
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.submit();
    }
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
    if (control.errors.maxlength) {
      return `${controlName} length should not exceed ${control.errors.maxlength.requiredLength} symbols`;
    }
    if (control.errors.authorRequired) {
      return `Please specify one or more authors`;
    }
    console.log(Object.getOwnPropertyNames(control.errors));
    if (Object.getOwnPropertyNames(control.errors).length > 0) {
      return `${controlName} has incorrect value`;
    }
    return null;
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
