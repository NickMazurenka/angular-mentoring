import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursePlateColorDirective } from './course-plate-color.directive';
import { ICourse } from '../models/course.model';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-course-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {

  @Input() course: ICourse;
  @Output() onDelete: EventEmitter<ICourse> = new EventEmitter<ICourse>();

  private dialogService: ConfirmationDialogService;

  constructor(dialogService: ConfirmationDialogService) {
    this.dialogService = dialogService;
  }

  onDeleteClick() {
    const dialogRef = this.dialogService.open();
    dialogRef.onDelete.subscribe(() => this.onDelete.emit(this.course));
  }
}
