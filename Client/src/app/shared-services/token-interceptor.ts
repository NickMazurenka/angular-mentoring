import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import { AuthorizationState } from '../auth/store/auth.reducer';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private token: string = null;

  constructor(
    private inj: Injector,
    private store: Store<any>
  ) {
    this.store.select(state => state.auth).subscribe((state) => {
      this.token = state.userInfo != null ? state.userInfo.token : null;
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.inj.get(AuthService);
    if (this.token != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.token}`
        }
      });
    }
    return next.handle(request);
  }
}
