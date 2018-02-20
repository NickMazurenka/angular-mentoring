import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CourseAuthorsSelectorComponent } from './course-authors-selector.component';
import { IAuthor } from '../../models/author.model';

describe('CourseAuthorsSelectorComponent', () => {
  let fixture: ComponentFixture<TestSelectorComponent>;
  let testComponent: ComponentFixture<CourseAuthorsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseAuthorsSelectorComponent,
        TestSelectorComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSelectorComponent);
    fixture.detectChanges();
    testComponent = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(testComponent).toBeTruthy();
  });
});

@Component({
  template: `
  <app-course-authors-selector [options]="authors"></app-course-authors-selector>
  `
})
class TestSelectorComponent {
  options: IAuthor[];
}

