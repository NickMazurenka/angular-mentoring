import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MewComponent } from './mew.component';

describe('MewComponent', () => {
  let component: MewComponent;
  let fixture: ComponentFixture<MewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
