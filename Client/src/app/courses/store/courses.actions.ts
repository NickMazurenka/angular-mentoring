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

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const CLEAR_STATE = 'CLEAR_STATE';
export const DUMMY = 'DUMMY';

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

// Filter

export class ChangeFilter implements Action {
  readonly type = CHANGE_FILTER;
  constructor(public filter: string) { }
}

// Pagination

export class ChangePage implements Action {
  readonly type = CHANGE_PAGE;
  constructor(public page: number) { }
}

// Clear State

export class ClearState implements Action {
  readonly type = CLEAR_STATE;
  constructor() { }
}

export class Dummy implements Action {
  readonly type = DUMMY;
  constructor() { }
}

export type All =
      ClearState
    | GetCourseListRequest
    | GetCourseListRequestSuccess
    | GetCourseListRequestFailed
    | DeleteCourseRequest
    | DeleteCourseRequestSuccess
    | DeleteCourseRequestFailed
    | ChangePage
    | ChangeFilter
    | Dummy;
