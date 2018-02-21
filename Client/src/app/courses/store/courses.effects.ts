import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as CoursesActions from './courses.actions';
import { CoursesService } from '../services/courses.service';
import { ICourseList } from '../models/course-list.model';
import { ICourse } from '../models/course.model';
import { getCoursesCurrentPage, PaginationState, getCoursesPaginationState, getCoursesSearch } from './courses.reducer';

type Action = CoursesActions.All;

@Injectable()
export class CoursesEffects {
  constructor(
    private coursesService: CoursesService,
    private store: Store<any>,
    private actions: Actions) {
  }

  @Effect()
  getCourseList: Observable<Action> =
    this.actions.ofType(CoursesActions.GET_COURSE_LIST_REQUEST)
      .pipe(
      withLatestFrom(this.store.select(getCoursesPaginationState)),
      withLatestFrom(this.store.select(getCoursesSearch)),
      mergeMap(([[action, pagination], search]) => {
        return this.coursesService.getCourseList(
          (pagination.currentPage - 1) * pagination.coursesPerPage, pagination.coursesPerPage, search)
          .pipe(
          map((response: ICourseList) => new CoursesActions.GetCourseListRequestSuccess(response)),
          catchError(e => of(new CoursesActions.GetCourseListRequestFailed()))
          );
      }));

  @Effect()
  deleteCourse: Observable<Action> =
    this.actions.ofType(CoursesActions.DELETE_COURSE_REQUEST)
      .pipe(mergeMap((action: CoursesActions.DeleteCourseRequest) => {
        return this.coursesService.deleteCourse(action.id)
          .pipe(
          map(() => new CoursesActions.DeleteCourseRequestSuccess()),
          catchError(e => of(new CoursesActions.DeleteCourseRequestFailed()))
          );
      }));

  @Effect()
  deleteCourseSucess: Observable<Action> =
    this.actions.ofType(CoursesActions.DELETE_COURSE_REQUEST_SUCCESS)
      .pipe(mergeMap((action: CoursesActions.DeleteCourseRequestSuccess) => {
        return of(new CoursesActions.GetCourseListRequest());
      }));

  @Effect()
  changeFilter: Observable<Action> =
    this.actions.ofType(CoursesActions.CHANGE_FILTER)
      .pipe(mergeMap((action: CoursesActions.ChangeFilter) => {
          return of(new CoursesActions.GetCourseListRequest());
      }));

  @Effect()
  changePage: Observable<Action> =
    this.actions.ofType(CoursesActions.CHANGE_PAGE)
      .pipe(mergeMap((action: CoursesActions.ChangePage) => {
        return of(new CoursesActions.GetCourseListRequest());
      }));
}

