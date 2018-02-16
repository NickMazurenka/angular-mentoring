import { createSelector } from '@ngrx/store';

import * as CoursesActions from './courses.actions';
import { ICourseList } from '../models/course-list.model';
import { ICourse } from '../models/course.model';

export type Action = CoursesActions.All;

export interface PaginationState {
  totalCount: number;
  currentPage: number;
  coursesPerPage: number;
}

export interface CoursesState {
  courses: ICourse[];
  pagination: PaginationState;
  search: string;
  loading: boolean;
}

export const defaultCoursesState: CoursesState = {
  courses: [],
  pagination: {
    totalCount: 40,
    currentPage: 1,
    coursesPerPage: 20
  },
  search: '',
  loading: false,
};

export const getCoursesState = (state: any) => state.courses;
export const getCoursesList = createSelector(getCoursesState, (state: CoursesState) => state.courses);
export const getCoursesSearch = createSelector(getCoursesState, (state: CoursesState) => state.search);
export const getCoursesPaginationState = createSelector(getCoursesState, (state: CoursesState) => state.pagination);
export const getCoursesTotal = createSelector(getCoursesPaginationState, (state: PaginationState) => state.totalCount);
export const getCoursesCurrentPage = createSelector(getCoursesPaginationState, (state: PaginationState) => state.currentPage);
export const getCoursesPerPage = createSelector(getCoursesPaginationState, (state: PaginationState) => state.coursesPerPage);

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function CoursesReducer(state: CoursesState = defaultCoursesState, action: Action) {
  switch (action.type) {

    // Get Course List
    case CoursesActions.GET_COURSE_LIST_REQUEST: {
      return newState(state, { loading: true });
    }
    case CoursesActions.GET_COURSE_LIST_REQUEST_SUCCESS: {
      return newState(state, {
        loading: false,
        courses: action.courseList.courses,
        pagination: {
          totalCount: action.courseList.total
        }
      });
    }
    case CoursesActions.GET_COURSE_LIST_REQUEST_FAILED: {
      return newState(state, { loading: false, courses: null });
    }

    // Delete Course
    case CoursesActions.DELETE_COURSE_REQUEST: {
      return newState(state, { loading: true });
    }
    case CoursesActions.DELETE_COURSE_REQUEST_SUCCESS: {
      return newState(state, { loading: false });
    }
    case CoursesActions.DELETE_COURSE_REQUEST_FAILED: {
      return newState(state, { loading: false });
    }

    // Clear State
    case CoursesActions.CLEAR_STATE:
      return newState(state, { ...defaultCoursesState });
    default:
      return state;
  }
}

