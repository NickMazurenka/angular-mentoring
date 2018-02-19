import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CourseDurationInputComponent } from './course-duration-input.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CourseDurationPipe } from '../../course-details/course-duration.pipe';

describe('CourseDurationInputComponent', () => {
  let component: CourseDurationInputComponent;
  let fixture: ComponentFixture<CourseDurationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AngularFontAwesomeModule
      ],
      declarations: [
        CourseDurationInputComponent,
        CourseDurationPipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDurationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
