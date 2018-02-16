import { createSelector } from '@ngrx/store';

import * as CourseActions from './course.actions';
import { ICourseList } from '../models/course-list.model';
import { ICourse } from '../models/course.model';

export type Action = CourseActions.All;

export interface CourseState {
  course: ICourse;
  loading: boolean;
}

export const defaultCourseState: CourseState = {
  course: null,
  loading: false,
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export const getCourseState = (state: any) => state.course;
export const getCourse = createSelector(getCourseState, (state: CourseState) => state.course);

export function CourseReducer(state: CourseState = defaultCourseState, action: Action) {
  switch (action.type) {

    // Get Course
    case CourseActions.GET_COURSE_REQUEST: {
      return newState(state, { loading: true });
    }
    case CourseActions.GET_COURSE_REQUEST_SUCCESS: {
      return newState(state, { loading: false, course: action.course });
    }
    case CourseActions.GET_COURSE_REQUEST_FAILED: {
      return newState(state, { loading: false, course: null });
    }

    // Add Course
    case CourseActions.ADD_COURSE_REQUEST: {
      return newState(state, { loading: true });
    }
    case CourseActions.ADD_COURSE_REQUEST_SUCCESS: {
      return newState(state, { loading: false });
    }
    case CourseActions.ADD_COURSE_REQUEST_FAILED: {
      return newState(state, { loading: false });
    }

    // Edit Course
    case CourseActions.EDIT_COURSE_REQUEST: {
      return newState(state, { loading: true });
    }
    case CourseActions.EDIT_COURSE_REQUEST_SUCCESS: {
      return newState(state, { loading: false });
    }
    case CourseActions.EDIT_COURSE_REQUEST_FAILED: {
      return newState(state, { loading: false });
    }

    // Clear State
    case CourseActions.CLEAR_STATE:
      return newState(state, { ...defaultCourseState });
    default:
      return state;
  }
}

