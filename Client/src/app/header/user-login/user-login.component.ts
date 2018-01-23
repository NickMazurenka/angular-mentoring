import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../shared-services/auth.service';
import { userInfo } from 'os';
import { IUserInfo } from '../../shared-models/user-info.model';
import { IUserTokenDto } from './user-token-dto.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit, OnDestroy {

  public loggedIn: boolean = false;

  public userInfo: IUserInfo;

  private _loginSubscription: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn();
    if (this.loggedIn) {
      this.getUserInfo();
    }
    this._loginSubscription = this.auth.loginEvent.subscribe(value => {
      this.loggedIn = value;
      if (value === true) {
        this.getUserInfo();
      }
    });
  }

  private getUserInfo() {
    this.auth.getUserInfo().subscribe((info: IUserInfo) => this.userInfo = info);
  }

  loginClicked(name: string, password: string) {
    this.router.navigate(['/login']);
  }

  logoutClicked() {
    this.router.navigate(['']);
    this.userInfo = null;
    this.auth.logOut();
  }

  ngOnDestroy() {
    if (this._loginSubscription) {
      this._loginSubscription.unsubscribe();
    }
  }
}
