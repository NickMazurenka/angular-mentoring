import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as AuthActions from './auth.actions';
import { AuthService } from '../../shared-services/auth.service';
import { IUserInfo } from '../../shared-models/user-info.model';

type Action = AuthActions.All;

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private store: Store<any>,
    private actions: Actions) {
  }

  @Effect()
  logIn: Observable<Action> =
    this.actions.ofType(AuthActions.LOG_IN_REQUEST)
      .pipe(mergeMap((action: AuthActions.LogInRequest) => {
        return this.authService.logIn(action.credentials)
          .pipe(
            map((response: IUserInfo) => new AuthActions.LogInRequestSuccess(response)),
            catchError(e => of(new AuthActions.LogInRequestFailed()))
          );
      }));

  @Effect()
  logOut: Observable<Action> =
    this.actions.ofType(AuthActions.LOG_OUT_REQUEST)
      .pipe(mergeMap((action: AuthActions.LogOutRequest) => {
        return this.authService.logOut().pipe(
          map(() => new AuthActions.LogOutRequestSuccess()),
          catchError(e => of(new AuthActions.LogOutRequestFailed()))
        );
      }));
}

