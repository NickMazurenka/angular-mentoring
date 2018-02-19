import * as AuthorsActions from './authors.actions';
import { AuthorsReducer, defaultAuthorsState } from './authors.reducer';

describe('authors reducer', () => {
    it('should return the initial state', () => {
        expect(AuthorsReducer(undefined, new AuthorsActions.Dummy()))
            .toEqual(defaultAuthorsState);
    });

    it('should handle GET_AUTHOR_LIST_REQUEST', () => {
        const newState = { ...defaultAuthorsState, loading: true };
        expect(AuthorsReducer(undefined, new AuthorsActions.GetAuthorListRequest()))
            .toEqual(newState);
    });

    it('should handle GET_AUTHOR_LIST_REQUEST_FAILED', () => {
        const newState = { ...defaultAuthorsState, loading: false };
        expect(AuthorsReducer(undefined, new AuthorsActions.GetAuthorListRequestFailed()))
            .toEqual(newState);
    });

    it('should handle GET_AUTHOR_LIST_REQUEST_SUCCESS', () => {
        const newState = {
            ...defaultAuthorsState,
            authors: [{
                id: 0,
                firstName: 'Wat',
                lastName: 'Dat'
            }]
        };
        expect(AuthorsReducer(undefined, new AuthorsActions.GetAuthorListRequestSuccess([{
            id: 0,
            firstName: 'Wat',
            lastName: 'Dat'
        }]))).toEqual(newState);
    });
});
