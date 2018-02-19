import * as CoursesActions from './courses.actions';
import { CoursesReducer, defaultCoursesState } from './courses.reducer';

describe('courses reducer', () => {
    it('should return the initial state', () => {
        expect(CoursesReducer(undefined, new CoursesActions.Dummy()))
            .toEqual(defaultCoursesState);
    });

    it('should handle GET_COURSE_LIST_REQUEST', () => {
        const newState = { ...defaultCoursesState, loading: true };
        expect(CoursesReducer(undefined, new CoursesActions.GetCourseListRequest()))
            .toEqual(newState);
    });

    it('should handle GET_COURSE_LIST_REQUEST_FAILED', () => {
        const newState = { ...defaultCoursesState, loading: false };
        expect(CoursesReducer(undefined, new CoursesActions.GetCourseListRequestFailed()))
            .toEqual(newState);
    });

    it('should handle GET_COURSE_LIST_REQUEST_SUCCESS', () => {
        const newState = {
            ...defaultCoursesState,
            loading: false,
            courses: [{
                id: 0,
                name: 'A name',
                date: null,
                description: 'A description',
                duration: 1,
                authors: []
            }],
            pagination: {
                ...defaultCoursesState.pagination,
                totalPages: 1
            }
        };
        expect(CoursesReducer(undefined, new CoursesActions.GetCourseListRequestSuccess({
            courses: [{
                id: 0,
                name: 'A name',
                date: null,
                description: 'A description',
                duration: 1,
                authors: []
            }],
            total: 1
        }))).toEqual(newState);
    });

    it('should handle DELETE_COURSE_REQUEST', () => {
        const id = 0;
        const newState = { ...defaultCoursesState, loading: true };
        expect(CoursesReducer(undefined, new CoursesActions.DeleteCourseRequest(id)))
            .toEqual(newState);
    });
});
