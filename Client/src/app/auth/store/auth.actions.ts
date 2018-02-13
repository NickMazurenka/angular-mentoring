import { Action } from '@ngrx/store';

import { IUserCredentials } from '../../shared-models/user-credentials.model';
import { IUserInfo } from '../../shared-models/user-info.model';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_REQUEST_SUCCESS = 'LOG_IN_REQUEST_SUCCESS';
export const LOG_IN_REQUEST_FAILED = 'LOG_IN_REQUEST_FAILED';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_REQUEST_SUCCESS = 'LOG_OUT_REQUEST_SUCCESS';
export const LOG_OUT_REQUEST_FAILED = 'LOG_OUT_REQUEST_FAILED';
export const CLEAR_STATE = 'CLEAR_STATE';

export class LogInRequest implements Action {
    readonly type = LOG_IN_REQUEST;

    constructor(public credentials: IUserCredentials) { }
}

export class LogInRequestSuccess implements Action {
    readonly type = LOG_IN_REQUEST_SUCCESS;

    constructor(public userInfo: IUserInfo) { }
}

export class LogInRequestFailed implements Action {
    readonly type = LOG_IN_REQUEST_FAILED;

    constructor() { }
}

export class LogOutRequest implements Action {
  readonly type = LOG_OUT_REQUEST;

  constructor() { }
}

export class LogOutRequestSuccess implements Action {
  readonly type = LOG_OUT_REQUEST_SUCCESS;

  constructor() { }
}

export class LogOutRequestFailed implements Action {
  readonly type = LOG_OUT_REQUEST_FAILED;

  constructor() { }
}

export class ClearState implements Action {
  readonly type = CLEAR_STATE;

  constructor() { }
}

export type All =
      ClearState
    | LogInRequest
    | LogInRequestSuccess
    | LogInRequestFailed
    | LogOutRequest
    | LogOutRequestSuccess
    | LogOutRequestFailed;
