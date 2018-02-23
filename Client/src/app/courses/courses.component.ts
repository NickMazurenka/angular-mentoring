import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators';

import * as CoursesActions from './store/courses.actions';
import { CoursesFilterPipe } from './courses-filter.pipe';
import { ICourse } from './models/course.model';
import { CoursesService } from './services/courses.service';
import {
  CoursesState, getCoursesList, getCoursesPaginationState, getCoursesPerPage, getCoursesCurrentPage, getCoursesTotalPages
} from './store/courses.reducer';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Observable<ICourse[]>;
  totalPages: Observable<number>;
  coursesPerPage: Observable<number>;
  currentPage: Observable<number>;
  filter: FormControl = new FormControl();

  private coursesState: Observable<CoursesState>;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) {
    this.coursesState = this.store.select(state => state.courses);
    this.courses = this.store.select(getCoursesList);
    this.totalPages = this.store.select(getCoursesTotalPages);
    this.coursesPerPage = this.store.select(getCoursesPerPage);
    this.currentPage = this.store.select(getCoursesCurrentPage);
  }

  ngOnInit() {
    this.store.dispatch(new CoursesActions.GetCourseListRequest());
    this.filter.valueChanges.pipe(debounceTime(200)).subscribe((filterValue: string) => {
      this.store.dispatch(new CoursesActions.ChangeFilter(filterValue));
    });
  }

  onPageChange(value: number) {
    this.store.dispatch(new CoursesActions.ChangePage(value));
  }

  deleteCourse(course: ICourse) {
    this.store.dispatch(new CoursesActions.DeleteCourseRequest(course.id));
  }

}
