import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { AuthService } from '../shared-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  public userName: string;
  public userPassword: string;

  private _loginSubscription: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private locationService: Location) {
  }

  onSubmit() {
    this._loginSubscription = this.auth.logIn(this.userName, this.userPassword).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  onCancelClick() {
    this.locationService.back();
  }

  ngOnDestroy() {
    if (this._loginSubscription) {
      this._loginSubscription.unsubscribe();
    }
  }

}
