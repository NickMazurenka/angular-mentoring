import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../shared-models/user.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  public loginEvent: Subject<boolean> = new Subject<boolean>();
  public logoutEvent: Subject<boolean> = new Subject<boolean>();

  private loggedIn = false;
  private userName: string;
  private userPassword: string;

  constructor() { }

  public LogIn(username: string, password: string): Observable<boolean> {
    this.userName = username;
    this.userPassword = password;
    this.loggedIn = true;

    this.loginEvent.next(true);
    return new Observable(observer => observer.next(true));
  }

  public LogOut(): Observable<boolean> {
    this.userName = null;
    this.userPassword = null;
    this.loggedIn = false;

    this.logoutEvent.next(true);
    return new Observable(observer => observer.next(true));
  }
}
