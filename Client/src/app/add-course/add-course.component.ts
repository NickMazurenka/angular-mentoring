import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe, DatePipe } from '@angular/common';
import { CourseAuthorsRequired } from './course-authors-selector/course-authors-required.validator';
import { Subscription } from 'rxjs/Subscription';
import { CoursesService } from '../shared-services/courses.service';
import { ICourseDto } from '../shared-models/course-dto.model';
import { ICourseDetails } from '../shared-models/course-details.model';
import { IAuthor } from '../shared-models/author.model';
import { AuthorsService } from '../shared-services/authors.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  addCourseForm: FormGroup;
  authors: IAuthor[];
  editMode: boolean = false;

  private courseId: number;

  private _paramsSubscription: Subscription;
  private _getCourseSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private authorsService: AuthorsService,
    private formBuilder: FormBuilder) {
    this.authorsService.getAuthors().subscribe(authors => {
      this.authors = authors;
      this._paramsSubscription = this.route.params.subscribe(params => {
        if (params['id'] != null) {
          this.loadCourse(params['id']);
        }
      });
    });
    this.addCourseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      date: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      authors: [[], [CourseAuthorsRequired]]
    });
  }

  private loadCourse(id: number) {
    this._getCourseSubscription = this.coursesService.getCourse(id).subscribe((course: ICourseDetails) => {
      this.courseId = id;
      this.editMode = true;
      this.addCourseForm.get('title').setValue(course.name);
      this.addCourseForm.get('description').setValue(course.description);
      this.addCourseForm.get('date').setValue(course.date);
      this.addCourseForm.get('duration').setValue(course.duration);
      const selectedAuthors = this.authors.filter((author: IAuthor) => {
        return course.authors.filter(a => a.id === author.id).length > 0;
      });
      this.addCourseForm.get('authors').setValue(selectedAuthors);
    });
  }

  private gatherCourseFromForm(id?: number): ICourseDetails {
    return {
      id: id,
      name: this.addCourseForm.get('title').value,
      description: this.addCourseForm.get('description').value,
      duration: this.addCourseForm.get('duration').value,
      date: this.addCourseForm.get('date').value,
      starred: false,
      authors: this.addCourseForm.get('authors').value,
    };
  }

  private submit() {
    this.validateAllFormFields(this.addCourseForm);
    if (!this.addCourseForm.valid) {
      return;
    }
    if (this.editMode) {
      this.coursesService.updateCourse(this.gatherCourseFromForm(this.courseId)).subscribe((course: ICourseDetails) => {
        this.navigateToCoursesList();
      });
    } else {
      this.coursesService.addCourse(this.gatherCourseFromForm()).subscribe((course: ICourseDetails) => {
        this.navigateToCoursesList();
      });
    }
  }

  private navigateToCoursesList() {
    this.router.navigate(['courses']);
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
    this.navigateToCoursesList();
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
