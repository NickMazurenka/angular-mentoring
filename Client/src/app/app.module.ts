import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router/src/router_module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { UserLoginComponent } from './header/user-login/user-login.component';
import { AuthService } from './shared-services/auth.service';
import { LocalStorageService } from './shared-services/local-storage.service';
import { TokenInterceptor } from './shared-services/token-interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorsService } from './shared-services/authors.service';
import { AuthGuard } from './shared-services/auth.guard';
import { BreadCrumbComponent } from './header/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    UserLoginComponent,
    PageNotFoundComponent,
    BreadCrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    OverlayModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
