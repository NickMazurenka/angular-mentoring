import { createSelector, createFeatureSelector, State } from '@ngrx/store';

import * as AuthorsActions from './authors.actions';
import { IAuthor } from '../models/author.model';

export type Action = AuthorsActions.All;

export interface AuthorsState {
  authors: IAuthor[];
  loading: boolean;
}

export const defaultAuthorsState: AuthorsState = {
  authors: [],
  loading: false,
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export const getAuthorsState = (state: any) => state.authors;
export const getAuthorsList = createSelector(getAuthorsState, (state: AuthorsState) => state.authors);

export function AuthorsReducer(state: AuthorsState = defaultAuthorsState, action: Action) {
  switch (action.type) {
    case AuthorsActions.GET_AUTHOR_LIST_REQUEST: {
      return newState(state, { loading: true });
    }
    case AuthorsActions.GET_AUTHOR_LIST_REQUEST_SUCCESS: {
      return newState(state, { loading: false, authors: action.authors });
    }
    case AuthorsActions.GET_AUTHOR_LIST_REQUEST_FAILED: {
      return newState(state, { loading: false, authors: [] });
    }
    case AuthorsActions.CLEAR_STATE:
      return newState(state, { ...defaultAuthorsState });
    default:
      return state;
  }
}

