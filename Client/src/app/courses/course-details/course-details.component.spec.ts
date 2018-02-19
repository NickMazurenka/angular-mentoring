import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OVERLAY_PROVIDERS, OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { CourseDetailsComponent } from './course-details.component';
import { CoursePlateColorDirective } from './course-plate-color.directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CourseDurationPipe } from './course-duration.pipe';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { SCROLL_DISPATCHER_PROVIDER, ScrollDispatcher } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ConfirmationDialogRef } from '../confirmation-dialog/confirmation-dialog-ref';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFontAwesomeModule,
        // OverlayTestModule,
        // OVERLAY_PROVIDERS,
        // OverlayModule,
        // PortalModule,
      ],
      declarations: [
        CourseDetailsComponent,
        CoursePlateColorDirective,
        CourseDurationPipe
      ],
      providers: [
        ConfirmationDialogService,
        // OVERLAY_PROVIDERS,
        // { provide: ConfirmationDialogRef, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

@NgModule({
  imports: [OverlayModule, PortalModule],
  declarations: [ConfirmationDialogComponent],
  entryComponents: [ConfirmationDialogComponent],
})
class OverlayTestModule { }
