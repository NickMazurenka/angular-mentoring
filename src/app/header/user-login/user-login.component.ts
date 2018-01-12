import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared-services/login.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit, OnDestroy {

  public loggedIn: boolean = false;

  private loginService: LoginService;
  private router: Router;

  private _loginSubscription: Subscription;

  constructor(loginService: LoginService, router: Router) {
    this.loginService = loginService;
    this.router = router;
  }

  ngOnInit() {
    this._loginSubscription = this.loginService.loginEvent.subscribe((value) => this.loggedIn = value);
  }

  loginClicked(name: string, password: string) {
    this.router.navigate(['/login']);
  }

  logoutClicked() {
    this.router.navigate(['']);
    this.loginService.LogOut();
  }

  ngOnDestroy() {
    this._loginSubscription.unsubscribe();
  }
}
