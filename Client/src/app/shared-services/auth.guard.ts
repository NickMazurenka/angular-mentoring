import { CanActivate, Router, CanLoad, Route } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    return this.canAccess();
  }

  canLoad(route: Route) {
    return this.canAccess();
  }

  private canAccess(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
