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
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { UserLoginComponent } from './header/user-login/user-login.component';
import { ConfirmationDialogComponent } from './courses/course-details/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './courses/course-details/confirmation-dialog.service';
import { CoursePlateColorDirective } from './courses/course-details/course-plate-color.directive';
import { CourseDurationPipe } from './courses/course-details/course-duration.pipe';
import { CoursesFilterPipe } from './courses/courses-filter.pipe';
import { CoursesOrderPipe } from './courses/courses-order.pipe';
import { AddCourseComponent } from './add-course/add-course.component';
import { AuthService } from './shared-services/auth.service';
import { LocalStorageService } from './shared-services/local-storage.service';
import { TokenInterceptor } from './shared-services/token-interceptor';
import { PagingComponent } from './courses/paging/paging.component';
import { CourseDateInputComponent } from './add-course/course-date-input/course-date-input.component';
import { CourseDurationInputComponent } from './add-course/course-duration-input/course-duration-input.component';
import { CourseAuthorsSelectorComponent } from './add-course/course-authors-selector/course-authors-selector.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesService } from './shared-services/courses.service';
import { AuthorsService } from './shared-services/authors.service';
import { AuthGuard } from './shared-services/auth.guard';
import { BreadCrumbComponent } from './header/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    CoursesComponent,
    CourseDetailsComponent,
    UserLoginComponent,
    ConfirmationDialogComponent,
    CoursePlateColorDirective,
    CourseDurationPipe,
    CoursesFilterPipe,
    CoursesOrderPipe,
    AddCourseComponent,
    PagingComponent,
    CourseDateInputComponent,
    CourseDurationInputComponent,
    CourseAuthorsSelectorComponent,
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
    ConfirmationDialogService,
    CoursesService,
    DatePipe,
    UpperCasePipe,
    AuthService,
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
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
