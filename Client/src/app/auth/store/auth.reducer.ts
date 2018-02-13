import * as AuthActions from './auth.actions';
import { IUserInfo } from '../../shared-models/user-info.model';

export type Action = AuthActions.All;

export interface AuthorizationState {
  userInfo: IUserInfo;
  loading: boolean;
}

export const defaultAuthorizationState: AuthorizationState = {
  userInfo: null,
  loading: false,
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function AuthReducer(state: AuthorizationState = defaultAuthorizationState, action: Action) {
  switch (action.type) {
    case AuthActions.LOG_IN_REQUEST: {
      return newState(state, { loading: true });
    }
    case AuthActions.LOG_IN_REQUEST_SUCCESS: {
      return newState(state, { loading: false, userInfo: (<AuthActions.LogInRequestSuccess>action).userInfo });
    }
    case AuthActions.LOG_IN_REQUEST_FAILED: {
      return newState(state, { loading: false, userInfo: null });
    }
    case AuthActions.LOG_OUT_REQUEST: {
      return newState(state, { loading: true });
    }
    case AuthActions.LOG_OUT_REQUEST_SUCCESS: {
      return newState(state, { loading: false, userInfo: null });
    }
    case AuthActions.LOG_OUT_REQUEST_FAILED: {
      return newState(state, { loading: false });
    }
    case AuthActions.CLEAR_STATE:
      return newState(state, { ...defaultAuthorizationState });
    default:
      return state;
  }
}

