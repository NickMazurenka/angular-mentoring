import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import * as CoursesActions from './store/courses.actions';
import { CoursesFilterPipe } from './courses-filter.pipe';
import { ICourse } from './models/course.model';
import { CoursesService } from './services/courses.service';
import {
  CoursesState, getCoursesList, getCoursesPaginationState, getCoursesTotal, getCoursesPerPage, getCoursesCurrentPage
} from './store/courses.reducer';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses: Observable<ICourse[]>;
  coursesTotal: Observable<number>;
  coursesPerPage: Observable<number>;
  currentPage: Observable<number>;

  pattern: string;

  private coursesState: Observable<CoursesState>;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) {
    this.coursesState = this.store.select(state => state.courses);
    this.courses = this.store.select(getCoursesList);
    this.coursesTotal = this.store.select(getCoursesTotal);
    this.coursesPerPage = this.store.select(getCoursesPerPage);
    this.currentPage = this.store.select(getCoursesCurrentPage);
  }

  ngOnInit() {
    this.store.dispatch(new CoursesActions.GetCourseListRequest());
  }

  onPageChange(value: number) {
  }

  search(pattern: string) {
    this.pattern = pattern;
  }

  deleteCourse(course: ICourse) {
    this.store.dispatch(new CoursesActions.DeleteCourseRequest(course.id));
  }

  ngOnDestroy() {
  }

}
