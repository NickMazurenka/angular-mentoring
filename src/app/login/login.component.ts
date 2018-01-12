import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../shared-services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  public userName: string;
  public userPassword: string;

  private loginService: LoginService;
  private router: Router;

  private _loginSubscription: Subscription;

  constructor(loginService: LoginService, router: Router) {
    this.loginService = loginService;
    this.router = router;
  }

  onSubmit() {
    this.loginService.LogIn(this.userName, this.userPassword).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  ngOnDestroy() {
    this._loginSubscription.unsubscribe();
  }

}
