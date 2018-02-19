import { createSelector } from '@ngrx/store';

import * as CoursesActions from './courses.actions';
import { ICourseList } from '../models/course-list.model';
import { ICourse } from '../models/course.model';

export type Action = CoursesActions.All;

export interface PaginationState {
  totalPages: number;
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
    totalPages: 1,
    currentPage: 1,
    coursesPerPage: 5
  },
  search: '',
  loading: false,
};

export const getCoursesState = (state: any) => state.courses;
export const getCoursesList = createSelector(getCoursesState, (state: CoursesState) => state.courses);
export const getCoursesSearch = createSelector(getCoursesState, (state: CoursesState) => state.search);
export const getCoursesPaginationState = createSelector(getCoursesState, (state: CoursesState) => state.pagination);
export const getCoursesTotalPages = createSelector(getCoursesPaginationState, (state: PaginationState) => state.totalPages);
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
      const totalPages = Math.ceil(action.courseList.total / state.pagination.coursesPerPage);
      const pagination = newState(state.pagination, { totalPages: totalPages });
      return newState(state, {
        loading: false,
        courses: action.courseList.courses,
        pagination: pagination
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

    // Pagination
    case CoursesActions.PAGINATION_FIRST: {
      const pagination = newState(state.pagination, {
        currentPage: 1
      });
      return newState(state, { pagination: pagination });
    }
    case CoursesActions.PAGINATION_LAST: {
      const pagination = newState(state.pagination, {
        currentPage: state.pagination.totalPages
      });
      return newState(state, { pagination: pagination });
    }
    case CoursesActions.PAGINATION_PREVIOUS: {
      const currentPage = state.pagination.currentPage;
      const pagination = newState(state.pagination, {
        currentPage: currentPage > 1 ? currentPage - 1 : 1
      });
      return newState(state, { pagination: pagination });
    }
    case CoursesActions.PAGINATION_NEXT: {
      const currentPage = state.pagination.currentPage;
      const totalPages = state.pagination.totalPages;
      const pagination = newState(state.pagination, {
        currentPage: currentPage === totalPages ? totalPages : currentPage + 1
      });
      return newState(state, { pagination: pagination });
    }
    case CoursesActions.PAGINATION_CUSTOM: {
      const currentPage = state.pagination.currentPage;
      const totalPages = state.pagination.totalPages;
      let newPage: number;
      if (action.page > totalPages) {
        newPage = totalPages;
      } else if (action.page < 1) {
        newPage = 1;
      } else {
        newPage = action.page;
      }
      const pagination = newState(state.pagination, {
        currentPage: newPage
      });
      return newState(state, { pagination: pagination });
    }

    // Clear State
    case CoursesActions.CLEAR_STATE:
      return newState(state, { ...defaultCoursesState });
    default:
      return state;
  }
}

