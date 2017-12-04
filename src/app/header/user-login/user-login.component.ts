import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public loggedIn: boolean;
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  login(name: string, password: string) {
    this.loggedIn = true;
    this.router.navigate(['/login']);
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['']);
  }
}
