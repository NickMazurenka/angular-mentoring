import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../shared-services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit, OnDestroy {

  public loggedIn: boolean = false;

  private _loginSubscription: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this._loginSubscription = this.auth.loginEvent.subscribe((value) => this.loggedIn = value);
  }

  loginClicked(name: string, password: string) {
    this.router.navigate(['/login']);
  }

  logoutClicked() {
    this.router.navigate(['']);
    this.auth.logOut();
  }

  ngOnDestroy() {
    if (this._loginSubscription) {
      this._loginSubscription.unsubscribe();
    }
  }
}
