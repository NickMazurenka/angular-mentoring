import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseDurationPipe } from './course-details/course-duration.pipe';
import { CoursesFilterPipe } from './courses-filter.pipe';
import { CoursesOrderPipe } from './courses-order.pipe';
import { PagingComponent } from './paging/paging.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursePlateColorDirective } from './course-details/course-plate-color.directive';
import { CoursesService } from '../shared-services/courses.service';
import { AuthService } from '../shared-services/auth.service';
import { AuthorsService } from '../shared-services/authors.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog.service';
import { CourseDurationInputComponent } from './add-course/course-duration-input/course-duration-input.component';
import { CourseAuthorsSelectorComponent } from './add-course/course-authors-selector/course-authors-selector.component';
import { CourseDateInputComponent } from './add-course/course-date-input/course-date-input.component';

@NgModule({
  imports: [
    CoursesRoutingModule,
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  declarations: [
    CoursesComponent,
    AddCourseComponent,
    CourseDurationPipe,
    CoursesFilterPipe,
    CoursesOrderPipe,
    PagingComponent,
    CourseDetailsComponent,
    ConfirmationDialogComponent,
    CoursePlateColorDirective,
    CourseDurationInputComponent,
    CourseAuthorsSelectorComponent,
    CourseDateInputComponent,
  ],
  providers: [
    ConfirmationDialogService,
    DatePipe,
    UpperCasePipe,
    AuthService,
    AuthorsService,
    CoursesService
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class CoursesModule { }
