import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { CoursesComponent } from './courses.component';
import { CoursesReducer } from './store/courses.reducer';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PagingComponent } from './paging/paging.component';
import { CoursesOrderPipe } from './courses-order.pipe';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursePlateColorDirective } from './course-details/course-plate-color.directive';
import { CourseDurationPipe } from './course-details/course-duration.pipe';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ courses: CoursesReducer }),
        FormsModule,
        AngularFontAwesomeModule,
        RouterTestingModule
      ],
      declarations: [
        CoursesComponent,
        PagingComponent,
        CoursesOrderPipe,
        CourseDetailsComponent,
        CoursePlateColorDirective,
        CourseDurationPipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
