import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe, DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import * as AuthorsActions from '../store/authors.actions';
import * as CourseActions from '../store/course.actions';
import { CourseAuthorsRequired } from './course-authors-selector/course-authors-required.validator';
import { IAuthor } from '../models/author.model';
import { ICourse } from '../models/course.model';
import { CourseState, getCourse } from '../store/course.reducer';
import { AuthorsState, getAuthorsList } from '../store/authors.reducer';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  authors: IAuthor[];
  addCourseForm: FormGroup;
  editMode: boolean = false;

  private courseId: number = null;
  private courseInitialized: boolean = false;
  private courseState: Observable<CourseState>;
  private authorsInitialized: boolean = false;
  private authorsState: Observable<AuthorsState>;

  private _paramsSubscription: Subscription;

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    this.addCourseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      date: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      authors: [[], [CourseAuthorsRequired]]
    });
    this.store.select(getAuthorsList).subscribe((authors: IAuthor[]) => {
      this.authors = authors;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new AuthorsActions.GetAuthorListRequest());

    this._paramsSubscription = this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.editMode = true;
        this.courseId = params['id'];
        this.store.dispatch(new CourseActions.GetCourseRequest(this.courseId));

        this.store.select(getCourse).subscribe((course: ICourse) => {
          if (course != null) {
            this.loadCourse(course);
          }
        });
      }
    });
  }

  private loadCourse(course: ICourse) {
    this.addCourseForm.get('title').setValue(course.name);
    this.addCourseForm.get('description').setValue(course.description);
    this.addCourseForm.get('date').setValue(course.date);
    this.addCourseForm.get('duration').setValue(course.duration);
    const selectedAuthors = this.authors.filter((author: IAuthor) => {
      return course.authors.filter(a => a.id === author.id).length > 0;
    });
    this.addCourseForm.get('authors').setValue(selectedAuthors);
  }

  private gatherCourseFromForm(): ICourse {
    return {
      id: this.courseId,
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
    // if (this.editMode) {
    //   this.coursesService.updateCourse(this.gatherCourseFromForm(this.courseId)).subscribe((course: ICourse) => {
    //     this.navigateToCoursesList();
    //   });
    // } else {
    //   this.coursesService.addCourse(this.gatherCourseFromForm()).subscribe((course: ICourse) => {
    //     this.navigateToCoursesList();
    //   });
    // }
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
