import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

import * as AuthorsActions from '../store/authors.actions';
import * as CourseActions from '../store/course.actions';
import { AddCourseComponent } from './add-course.component';
import { CourseAuthorsSelectorComponent } from './course-authors-selector/course-authors-selector.component';
import { CourseDateInputComponent } from './course-date-input/course-date-input.component';
import { CourseDurationInputComponent } from './course-duration-input/course-duration-input.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CourseDurationPipe } from '../course-details/course-duration.pipe';
import { CourseReducer } from '../store/course.reducer';
import { AuthorsReducer } from '../store/authors.reducer';
import { IAuthor } from '../models/author.model';
import { ICourse } from '../models/course.model';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;
  let store: Store<any>;
  let storeDispatchSpy: jasmine.Spy;
  const authors: IAuthor[] = [{
    id: 0,
    firstName: 'Wat',
    lastName: 'Dat'
  }];
  const course: ICourse = {
    name: 'wat',
    description: 'dat',
    date: new Date('2018-02-02'),
    duration: 1,
    authors: [authors[0]]
  };

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
    storeDispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    store.dispatch(new AuthorsActions.GetAuthorListRequestSuccess(authors));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have authors list', () => {
    expect(component.authors).toEqual(authors);
  });

  describe('add mode', () => {

    it('should dispatch ADD_COURSE_ERQUEST on submit if form is valid', () => {
      component.addCourseForm.get('title').setValue(course.name);
      component.addCourseForm.get('description').setValue(course.description);
      component.addCourseForm.get('date').setValue(course.date);
      component.addCourseForm.get('duration').setValue(course.duration);
      component.addCourseForm.get('authors').setValue(course.authors);
      storeDispatchSpy.calls.reset();
      component.onSubmit();
      expect(store.dispatch).toHaveBeenCalledWith(new CourseActions.AddCourseRequest(course));
    });
  });

});
