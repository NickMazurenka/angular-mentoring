import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoFakeComponent } from './header/logo-fake/logo-fake.component';
import { LogoComponent } from './header/logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoFakeComponent,
    LogoComponent,
    FooterComponent,
    CoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
