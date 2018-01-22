import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class AuthService {

  private authUrl: string;

  private tokenKey = 'access_token';

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  public getToken(): string {
    return this.localStorageService.getItem(this.tokenKey);
  }

  private storeToken(token: string): void {
    this.localStorageService.setItem(this.tokenKey, token);
  }

  public loggedIn(): boolean {
    const token: string = this.getToken();
    return token != null && token !== '';
  }

  public logIn() {
    this.http.get<string>(this.authUrl).pipe(map((token: string) => {
      this.storeToken(token);
      return true;
    }));
  }

}
