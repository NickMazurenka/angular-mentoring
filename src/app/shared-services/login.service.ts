import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../shared-models/user.model';

@Injectable()
export class LoginService {

  private loggedIn = false;
  private userName: string;
  private userPassword: string;

  constructor() { }

  public LogIn(username: string, password: string): Observable<IUser> {
    this.userName = username;
    this.userPassword = password;
    this.loggedIn = true;

    return new Observable(observer => observer.next({
      name: this.userName,
      password: this.userPassword
    }));
  }

  public LogOut(): Observable<boolean> {
    this.userName = null;
    this.userPassword = null;
    this.loggedIn = false;

    return new Observable(observer => observer.next(true));
  }
}
