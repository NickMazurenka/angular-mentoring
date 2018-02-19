import { Action } from '@ngrx/store';

import { IAuthor } from '../models/author.model';

export const GET_AUTHOR_LIST_REQUEST = 'GET_AUTHOR_LIST_REQUEST';
export const GET_AUTHOR_LIST_REQUEST_SUCCESS = 'GET_AUTHOR_LIST_REQUEST_SUCCESS';
export const GET_AUTHOR_LIST_REQUEST_FAILED = 'GET_AUTHOR_LIST_REQUEST_FAILED';
export const CLEAR_STATE = 'CLEAR_STATE';
export const DUMMY = 'DUMMY';

export class GetAuthorListRequest implements Action {
    readonly type = GET_AUTHOR_LIST_REQUEST;
    constructor() { }
}

export class GetAuthorListRequestSuccess implements Action {
    readonly type = GET_AUTHOR_LIST_REQUEST_SUCCESS;
    constructor(public authors: IAuthor[]) { }
}

export class GetAuthorListRequestFailed implements Action {
    readonly type = GET_AUTHOR_LIST_REQUEST_FAILED;
    constructor() { }
}

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
    | GetAuthorListRequest
    | GetAuthorListRequestSuccess
    | GetAuthorListRequestFailed
    | Dummy;
