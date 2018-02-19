import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { BreadCrumbComponent } from './header/breadcrumb/breadcrumb.component';
import { UserLoginComponent } from './header/user-login/user-login.component';
import { AuthReducer } from './auth/store/auth.reducer';
import { LocalStorageSyncReducer } from './shared-store/local-storage-sync.reducer';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFontAwesomeModule,
        RouterTestingModule,
        StoreModule.forRoot({ auth: AuthReducer })
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        BreadCrumbComponent,
        UserLoginComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
