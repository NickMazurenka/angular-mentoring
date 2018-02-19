import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CourseDateInputComponent } from './course-date-input.component';
import { DatePipe } from '@angular/common';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CourseDateInputComponent', () => {
  let component: CourseDateInputComponent;
  let fixture: ComponentFixture<CourseDateInputComponent>;
  let inputElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CourseDateInputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should accept current date', () => {
    const date = new DatePipe(component.locale).transform(new Date(), 'yyyy/MM/dd');
    inputElement = fixture.debugElement.query(By.css('input[type=text]'));
    inputElement.nativeElement.value = date;
    fixture.detectChanges();
    expect(component.value).toEqual(date);
  });
});
