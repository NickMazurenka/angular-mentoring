import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { map } from 'rxjs/operators/map';
import { of } from 'rxjs/observable/of';

import { IUserCredentialsDto } from '../shared-models/user-credentials-dto.model';
import { IUserInfoDto } from '../shared-models/user-info-dto.model';
import { IUserInfo } from '../shared-models/user-info.model';
import { IUserTokenDto } from '../header/user-login/user-token-dto.model';
import { environment } from '../../environments/environment';
import { IUserCredentials } from '../shared-models/user-credentials.model';

@Injectable()
export class AuthService {

  public loginEvent: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(private http: HttpClient) { }

  public logIn(credentials: IUserCredentials): Observable<IUserInfo> {
    const creds: IUserCredentialsDto = {
      username: credentials.name,
      password: credentials.password
    };
    return this.http.post<IUserInfo>(`${environment.apiEndpoint}/auth/login`, creds)
      .pipe(map((response: IUserInfoDto) => {
        return {
          firstName: response.firstName,
          lastName: response.lastName,
          token: response.token
        };
      }));
  }

  public logOut(): Observable<Object> {
    // TODO: Implement server tokens handling
    return of(new Object());
  }

}
