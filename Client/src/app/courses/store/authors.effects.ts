import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as AuthorsActions from './authors.actions';
import { AuthorsService } from '../services/authors.service';
import { IAuthor } from '../models/author.model';

type Action = AuthorsActions.All;

@Injectable()
export class AuthorsEffects {
  constructor(
    private authorsService: AuthorsService,
    private store: Store<any>,
    private actions: Actions) {
  }

  @Effect()
  getAuthorList: Observable<Action> =
    this.actions.ofType(AuthorsActions.GET_AUTHOR_LIST_REQUEST)
      .pipe(mergeMap((action: AuthorsActions.GetAuthorListRequest) => {
        return this.authorsService.getAuthors()
          .pipe(
          map((response: IAuthor[]) => new AuthorsActions.GetAuthorListRequestSuccess(response)),
          catchError(e => of(new AuthorsActions.GetAuthorListRequestFailed()))
          );
      }));

  getTest: Observable<Action> =
    this.actions.ofType(AuthorsActions.GET_AUTHOR_LIST_REQUEST_FAILED)
      .pipe(mergeMap((action: AuthorsActions.GetAuthorListRequestFailed) => {
        return of(new AuthorsActions.GetAuthorListRequestSuccess([]));
      }));
}

