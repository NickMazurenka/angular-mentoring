import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { IUserCredentialsDto } from '../shared-models/user-credentials-dto.model';
import { IUserInfoDto } from '../shared-models/user-info-dto.model';
import { IUserInfo } from '../shared-models/user-info.model';
import { IUserTokenDto } from '../header/user-login/user-token-dto.model';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private tokenKey = 'access_token';

  public loginEvent: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  public getToken(): string {
    return this.localStorageService.getItem(this.tokenKey);
  }

  private storeToken(token: string): void {
    this.localStorageService.setItem(this.tokenKey, token);
  }

  private removeToken(): void {
    this.localStorageService.removeItem(this.tokenKey);
  }

  public loggedIn(): boolean {
    const token: string = this.getToken();
    return token != null && token !== '';
  }

  public logIn(username: string, password: string): Observable<boolean> {
    const creds: IUserCredentialsDto = {
      username: username,
      password: password
    };
    return this.http.post<IUserTokenDto>(`${environment.apiEndpoint}/auth/login`, creds).pipe(map((response: IUserTokenDto) => {
      this.storeToken(response.token);
      this.loginEvent.next(true);
      return true;
    }));
  }

  public logOut(): void {
    this.removeToken();
    this.loginEvent.next(false);
  }

  public getUserInfo(): Observable<IUserInfo> {
    const token = this.getToken();
    if (token == null || token === '') {
      return null;
    }
    return this.http.get<IUserInfoDto>(`${environment.apiEndpoint}/auth/userinfo`).pipe(map((info: IUserInfoDto) => {
      return {
        firstName: info.first,
        lastName: info.last
      };
    }));
  }

}
