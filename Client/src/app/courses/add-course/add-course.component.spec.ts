import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AddCourseComponent } from './add-course.component';
import { CourseAuthorsSelectorComponent } from './course-authors-selector/course-authors-selector.component';
import { CourseDateInputComponent } from './course-date-input/course-date-input.component';
import { CourseDurationInputComponent } from './course-duration-input/course-duration-input.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CourseDurationPipe } from '../course-details/course-duration.pipe';
import { CourseReducer } from '../store/course.reducer';
import { AuthorsReducer } from '../store/authors.reducer';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.forRoot({ courses: CourseReducer, AuthorsReducer })
      ],
      declarations: [
        AddCourseComponent,
        CourseAuthorsSelectorComponent,
        CourseDateInputComponent,
        CourseDurationInputComponent,
        CourseDurationPipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
