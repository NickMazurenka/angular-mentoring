import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import * as AuthActions from '../../auth/store/auth.actions';
import { AuthService } from '../../shared-services/auth.service';
import { IUserInfo } from '../../shared-models/user-info.model';
import { IUserTokenDto } from './user-token-dto.model';
import { AuthorizationState } from '../../auth/store/auth.reducer';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public userInfo: IUserInfo;

  private authState: Observable<AuthorizationState>;

  constructor(
    private store: Store<any>,
    private router: Router) {
      this.authState = this.store.select(state => state.auth);
  }

  ngOnInit() {
    this.authState.subscribe((state) => {
        this.userInfo = state.userInfo;
    });
  }

  loginClicked(name: string, password: string) {
    this.router.navigate(['/login']);
  }

  logoutClicked() {
    this.store.dispatch(new AuthActions.LogOutRequest());
  }
}
