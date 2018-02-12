import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators, NgControl } from '@angular/forms';

import { AuthService } from '../../shared-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  loginForm: FormGroup;

  private _loginSubscription: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  private submit() {
    this.validateAllFormFields(this.loginForm);
    if (!this.loginForm.valid) {
      return;
    }
    this._loginSubscription = this.auth.logIn(
      this.loginForm.get('username').value,
      this.loginForm.get('password').value).subscribe(() => {
        this.router.navigate(['']);
      });
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
    if (this._loginSubscription) {
      this._loginSubscription.unsubscribe();
    }
  }

}