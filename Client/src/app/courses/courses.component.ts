import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime, delay, takeUntil } from 'rxjs/operators';

import * as CoursesActions from './store/courses.actions';
import { CoursesFilterPipe } from './courses-filter.pipe';
import { ICourse } from './models/course.model';
import { CoursesService } from './services/courses.service';
import {
  CoursesState, getCoursesList, getCoursesPaginationState, getCoursesPerPage, getCoursesCurrentPage, getCoursesTotalPages, getLoading
} from './store/courses.reducer';
import { LoadingDialogService } from './loading-dialog/loading-dialog.service';

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
  loading: Observable<boolean>;
  filter: FormControl = new FormControl();

  private loadingTimeoutMilliseconds: number = 300;
  private loadingMinimalTimeoutMilliseconds: number = 200;
  private loadingStart: Subject<void>;
  private loadingFinish: Subject<void>;

  private coursesState: Observable<CoursesState>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private loadingDialogService: LoadingDialogService
  ) {
    this.coursesState = this.store.select(state => state.courses);
    this.courses = this.store.select(getCoursesList);
    this.totalPages = this.store.select(getCoursesTotalPages);
    this.coursesPerPage = this.store.select(getCoursesPerPage);
    this.currentPage = this.store.select(getCoursesCurrentPage);
    this.loading = this.store.select(getLoading);
    this.loadingStart = new Subject<void>();
    this.loadingFinish = new Subject<void>();
  }

  ngOnInit() {
    this.store.dispatch(new CoursesActions.GetCourseListRequest());
    this.filter.valueChanges.pipe(debounceTime(200)).subscribe((filterValue: string) => {
      this.store.dispatch(new CoursesActions.ChangeFilter(filterValue));
    });
    this.loading.subscribe(loading => {
      if (loading) {
        this.loadingStart.pipe(debounceTime(this.loadingTimeoutMilliseconds)).pipe(takeUntil(this.loadingFinish))
          .subscribe(() => this.loadingDialogService.open());
        this.loadingStart.next();
      } else {
        this.loadingFinish.pipe(debounceTime(this.loadingMinimalTimeoutMilliseconds))
          .subscribe(() => this.loadingDialogService.close());
        this.loadingFinish.next();
      }
    });
  }

  onPageChange(value: number) {
    this.store.dispatch(new CoursesActions.ChangePage(value));
  }

  deleteCourse(course: ICourse) {
    this.store.dispatch(new CoursesActions.DeleteCourseRequest(course.id));
  }

}
