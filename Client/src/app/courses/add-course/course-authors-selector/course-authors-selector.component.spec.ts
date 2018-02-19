import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAuthorsSelectorComponent } from './course-authors-selector.component';

describe('CourseAuthorsSelectorComponent', () => {
  let component: CourseAuthorsSelectorComponent;
  let fixture: ComponentFixture<CourseAuthorsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAuthorsSelectorComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAuthorsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
