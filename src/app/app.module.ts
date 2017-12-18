import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router/src/router_module';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DatePipe } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './header/user-login/user-login.component';
import { ConfirmationDialogComponent } from './courses/course-details/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './courses/course-details/confirmation-dialog.service';
import { CoursesService } from './courses/courses.service';
import { LoginService } from './shared-services/login.service';
import { CoursePlateColorDirective } from './courses/course-details/course-plate-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    CoursesComponent,
    CourseDetailsComponent,
    LoginComponent,
    UserLoginComponent,
    ConfirmationDialogComponent,
    CoursePlateColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    OverlayModule
  ],
  providers: [
    ConfirmationDialogService,
    CoursesService,
    LoginService,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
