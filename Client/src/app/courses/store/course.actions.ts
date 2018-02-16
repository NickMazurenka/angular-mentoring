import { Action } from '@ngrx/store';

import { ICourseListRequest } from '../models/course-list-request.model';
import { ICourseList } from '../models/course-list.model';
import { ICourse } from '../models/course.model';

export const GET_COURSE_REQUEST = 'GET_COURSE_REQUEST';
export const GET_COURSE_REQUEST_SUCCESS = 'GET_COURSE_REQUEST_SUCCESS';
export const GET_COURSE_REQUEST_FAILED = 'GET_COURSE_REQUEST_FAILED';

export const ADD_COURSE_REQUEST = 'ADD_COURSE_REQUEST';
export const ADD_COURSE_REQUEST_SUCCESS = 'ADD_COURSE_REQUEST_SUCCESS';
export const ADD_COURSE_REQUEST_FAILED = 'ADD_COURSE_REQUEST_FAILED';

export const EDIT_COURSE_REQUEST = 'EDIT_COURSE_REQUEST';
export const EDIT_COURSE_REQUEST_SUCCESS = 'EDIT_COURSE_REQUEST_SUCCESS';
export const EDIT_COURSE_REQUEST_FAILED = 'EDIT_COURSE_REQUEST_FAILED';

export const DELETE_COURSE_REQUEST = 'DELETE_COURSE_REQUEST';
export const DELETE_COURSE_REQUEST_SUCCESS = 'DELETE_COURSE_REQUEST_SUCCESS';
export const DELETE_COURSE_REQUEST_FAILED = 'DELETE_COURSE_REQUEST_FAILED';

export const CLEAR_STATE = 'CLEAR_STATE';

// Get Course

export class GetCourseRequest implements Action {
  readonly type = GET_COURSE_REQUEST;
  constructor(public id: number) { }
}

export class GetCourseRequestSuccess implements Action {
  readonly type = GET_COURSE_REQUEST_SUCCESS;
  constructor(public course: ICourse) { }
}

export class GetCourseRequestFailed implements Action {
  readonly type = GET_COURSE_REQUEST_FAILED;
  constructor() { }
}

// Add Course

export class AddCourseRequest implements Action {
  readonly type = ADD_COURSE_REQUEST;
  constructor(public course: ICourse) { }
}

export class AddCourseRequestSuccess implements Action {
  readonly type = ADD_COURSE_REQUEST_SUCCESS;
  constructor(public course: ICourse) { }
}

export class AddCourseRequestFailed implements Action {
  readonly type = ADD_COURSE_REQUEST_FAILED;
  constructor() { }
}

// Edit Course

export class EditCourseRequest implements Action {
  readonly type = EDIT_COURSE_REQUEST;
  constructor(public course: ICourse) { }
}

export class EditCourseRequestSuccess implements Action {
  readonly type = EDIT_COURSE_REQUEST_SUCCESS;
  constructor(public course: ICourse) { }
}

export class EditCourseRequestFailed implements Action {
  readonly type = EDIT_COURSE_REQUEST_FAILED;
  constructor() { }
}

// Clear State

export class ClearState implements Action {
  readonly type = CLEAR_STATE;
  constructor() { }
}

export type All =
      ClearState
    | GetCourseRequest
    | GetCourseRequestSuccess
    | GetCourseRequestFailed
    | AddCourseRequest
    | AddCourseRequestSuccess
    | AddCourseRequestFailed
    | EditCourseRequest
    | EditCourseRequestSuccess
    | EditCourseRequestFailed;
