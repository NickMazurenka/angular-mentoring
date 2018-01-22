import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class AuthService {

  private authUrl: string = 'http://localhost:3004/auth/login';

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
    return this.http.post<string>(this.authUrl, { username, password }).pipe(map((token: string) => {
      this.storeToken(token);
      this.loginEvent.next(true);
      return true;
    }));
  }

  public logOut(): void {
    this.removeToken();
    this.loginEvent.next(false);
  }

}
