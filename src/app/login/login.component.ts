import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared-services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public userName: string;
  public userPassword: string;

  private loginService: LoginService;
  private router: Router;

  constructor(loginService: LoginService, router: Router) {
    this.loginService = loginService;
    this.router = router;
  }

  onSubmit() {
    this.loginService.LogIn(this.userName, this.userPassword).subscribe(() => {
      this.router.navigate(['']);
    });
  }

}
