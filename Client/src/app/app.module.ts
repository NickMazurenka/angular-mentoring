import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule } from '@angular/router/src/router_module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { combineReducers, compose, ActionReducer, State, ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
import { AuthGuard } from './shared-services/auth.guard';
import { BreadCrumbComponent } from './header/breadcrumb/breadcrumb.component';
import { AuthReducer } from './auth/store/auth.reducer';
import { LocalStorageSyncReducer } from './shared-store/local-storage-sync.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { StoreLoggerReducer } from './shared-store/store-logger.reducer';
import { CourseEffects } from './courses/store/course.effects';
import { CoursesEffects } from './courses/store/courses.effects';
import { CourseReducer } from './courses/store/course.reducer';
import { CoursesReducer } from './courses/store/courses.reducer';
import { CoursesService } from './courses/services/courses.service';
import { AuthorsService } from './courses/services/authors.service';
import { AuthorsReducer } from './courses/store/authors.reducer';
import { AuthorsEffects } from './courses/store/authors.effects';
import { ConfirmationDialogComponent } from './courses/confirmation-dialog/confirmation-dialog.component';
import { UserInfoPopoverComponent } from './header/user-info-popover/user-info-popover.component';
import { LoadingDialogComponent } from './courses/loading-dialog/loading-dialog.component';
import { MewComponent } from './page-not-found/mew/mew.component';

const reducers = { auth: AuthReducer };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    UserLoginComponent,
    PageNotFoundComponent,
    BreadCrumbComponent,
    UserInfoPopoverComponent,
    MewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    OverlayModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
    {
      auth: AuthReducer,
      course: CourseReducer,
      courses: CoursesReducer,
      authors: AuthorsReducer
    },
    {
      metaReducers: [LocalStorageSyncReducer]
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    EffectsModule.forRoot([AuthEffects, CourseEffects, CoursesEffects, AuthorsEffects])
  ],
  providers: [
    AuthService,
    CoursesService,
    AuthorsService,
    AuthGuard,
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmationDialogComponent,
    LoadingDialogComponent
  ]
})
export class AppModule { }
