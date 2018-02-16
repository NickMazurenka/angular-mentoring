import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as CourseActions from './course.actions';
import { CoursesService } from '../services/courses.service';
import { ICourseList } from '../models/course-list.model';
import { ICourse } from '../models/course.model';

type Action = CourseActions.All;

@Injectable()
export class CourseEffects {
  constructor(
    private coursesService: CoursesService,
    private store: Store<any>,
    private actions: Actions) {
  }

  @Effect()
  getCourse: Observable<Action> =
    this.actions.ofType(CourseActions.GET_COURSE_REQUEST)
      .pipe(mergeMap((action: CourseActions.GetCourseRequest) => {
        return this.coursesService.getCourse(action.id)
          .pipe(
          map((response: ICourse) => new CourseActions.GetCourseRequestSuccess(response)),
          catchError(e => of(new CourseActions.GetCourseRequestFailed()))
          );
      }));

  @Effect()
  addCourse: Observable<Action> =
    this.actions.ofType(CourseActions.ADD_COURSE_REQUEST)
      .pipe(mergeMap((action: CourseActions.AddCourseRequest) => {
        return this.coursesService.addCourse(action.course)
          .pipe(
          map((response: ICourse) => new CourseActions.AddCourseRequestSuccess(response)),
          catchError(e => of(new CourseActions.AddCourseRequestFailed()))
          );
      }));

  @Effect()
  editCourse: Observable<Action> =
    this.actions.ofType(CourseActions.EDIT_COURSE_REQUEST)
      .pipe(mergeMap((action: CourseActions.EditCourseRequest) => {
        return this.coursesService.editCourse(action.course)
          .pipe(
          map((response: ICourse) => new CourseActions.EditCourseRequestSuccess(response)),
          catchError(e => of(new CourseActions.EditCourseRequestFailed()))
          );
      }));
}

