import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared-services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public loggedIn: boolean = false;

  private loginService: LoginService;
  private router: Router;

  constructor(loginService: LoginService, router: Router) {
    this.loginService = loginService;
    this.router = router;
  }

  ngOnInit() {
    this.loginService.loginEvent.subscribe(() => this.loggedIn = true);
    this.loginService.logoutEvent.subscribe(() => this.loggedIn = false);
  }

  loginClicked(name: string, password: string) {
    this.router.navigate(['/login']);
  }

  logoutClicked() {
    this.router.navigate(['']);
    this.loginService.LogOut();
  }
}
