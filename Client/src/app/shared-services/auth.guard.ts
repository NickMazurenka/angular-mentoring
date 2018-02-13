import { CanActivate, Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  private loggedIn: boolean = false;

  constructor(
    private router: Router,
    private store: Store<any>
  ) {
    this.store.select(state => state.auth).subscribe((state) => {
      this.loggedIn = state.userInfo != null;
    });
  }

  canActivate() {
    return this.canAccess();
  }

  canLoad(route: Route) {
    return this.canAccess();
  }

  private canAccess(): boolean {
    if (this.loggedIn) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
