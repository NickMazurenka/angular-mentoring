import { FormGroup, FormBuilder, Validators, NgControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

import * as AuthActions from '../store/auth.actions';
import { AuthorizationState } from '../store/auth.reducer';
import { IUserInfo } from '../../shared-models/user-info.model';

interface IAuthState {
  auth: {
    Auth: AuthorizationState
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  loginForm: FormGroup;

  private _authState: Observable<AuthorizationState>;
  private _loginSubscription: Subscription;

  constructor(
    private store: Store<any>,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this._authState = this.store.select(state => state.auth);
    this._authState.subscribe((state) => {
      if (state.userInfo != null) {
        this.router.navigate(['courses']);
      }
    });
  }

  private submit() {
    this.validateAllFormFields(this.loginForm);
    if (!this.loginForm.valid) {
      return;
    }
    this.store.dispatch(new AuthActions.LogInRequest({
      name: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }));
  }

  onSubmit() {
    this.submit();
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.submit();
    }
  }

  onCancelClick() {
    this.router.navigate(['']);
  }

  showControlError(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return control.invalid && control.touched;
  }

  getControlError(controlName: string): string {
    const control = this.loginForm.get(controlName);
    if (control.errors.required) {
      return `Please specify ${controlName}`;
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    this.loginForm.get('username').markAsTouched({ onlySelf: true });
    this.loginForm.get('password').markAsTouched({ onlySelf: true });
  }

  ngOnDestroy() {
  }

}
