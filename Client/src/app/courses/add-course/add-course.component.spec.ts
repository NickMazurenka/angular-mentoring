import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

import * as AuthorsActions from '../store/authors.actions';
import { AddCourseComponent } from './add-course.component';
import { CourseAuthorsSelectorComponent } from './course-authors-selector/course-authors-selector.component';
import { CourseDateInputComponent } from './course-date-input/course-date-input.component';
import { CourseDurationInputComponent } from './course-duration-input/course-duration-input.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CourseDurationPipe } from '../course-details/course-duration.pipe';
import { CourseReducer } from '../store/course.reducer';
import { AuthorsReducer } from '../store/authors.reducer';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.forRoot({ courses: CourseReducer, authors: AuthorsReducer })
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
    store = fixture.debugElement.injector.get(Store);
    store.dispatch(new AuthorsActions.GetAuthorListRequestSuccess([{
      id: 0,
      firstName: 'Wat',
      lastName: 'Dat'
    }]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have authors list', () => {
    expect(component.authors).toEqual([{
      id: 0,
      firstName: 'Wat',
      lastName: 'Dat'
    }]);
  });
});
