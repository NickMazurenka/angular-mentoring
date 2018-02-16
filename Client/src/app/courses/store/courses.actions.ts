import { Action } from '@ngrx/store';

import { ICourseListRequest } from '../models/course-list-request.model';
import { ICourseList } from '../models/course-list.model';
import { ICourse } from '../models/course.model';

export const GET_COURSE_LIST_REQUEST = 'GET_COURSE_LIST_REQUEST';
export const GET_COURSE_LIST_REQUEST_SUCCESS = 'GET_COURSE_LIST_REQUEST_SUCCESS';
export const GET_COURSE_LIST_REQUEST_FAILED = 'GET_COURSE_LIST_REQUEST_FAILED';

export const DELETE_COURSE_REQUEST = 'DELETE_COURSE_REQUEST';
export const DELETE_COURSE_REQUEST_SUCCESS = 'DELETE_COURSE_REQUEST_SUCCESS';
export const DELETE_COURSE_REQUEST_FAILED = 'DELETE_COURSE_REQUEST_FAILED';

export const CLEAR_STATE = 'CLEAR_STATE';

// Get Course List

export class GetCourseListRequest implements Action {
    readonly type = GET_COURSE_LIST_REQUEST;
    constructor() { }
}

export class GetCourseListRequestSuccess implements Action {
    readonly type = GET_COURSE_LIST_REQUEST_SUCCESS;
    constructor(public courseList: ICourseList) { }
}

export class GetCourseListRequestFailed implements Action {
    readonly type = GET_COURSE_LIST_REQUEST_FAILED;
    constructor() { }
}

// Delete Course

export class DeleteCourseRequest implements Action {
  readonly type = DELETE_COURSE_REQUEST;
  constructor(public id: number) { }
}

export class DeleteCourseRequestSuccess implements Action {
  readonly type = DELETE_COURSE_REQUEST_SUCCESS;
  constructor() { }
}

export class DeleteCourseRequestFailed implements Action {
  readonly type = DELETE_COURSE_REQUEST_FAILED;
  constructor() { }
}

// Clear State

export class ClearState implements Action {
  readonly type = CLEAR_STATE;
  constructor() { }
}

export type All =
      ClearState
    | GetCourseListRequest
    | GetCourseListRequestSuccess
    | GetCourseListRequestFailed
    | DeleteCourseRequest
    | DeleteCourseRequestSuccess
    | DeleteCourseRequestFailed;
