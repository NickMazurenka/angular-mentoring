import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourseDetails } from './course-details.model';
import { ConfirmationDialogService } from './confirmation-dialog.service';
import { CoursePlateColorDirective } from './course-plate-color.directive';

@Component({
  selector: 'app-course-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {

  @Input() course: ICourseDetails;
  @Output() onDelete: EventEmitter<ICourseDetails> = new EventEmitter<ICourseDetails>();

  private dialogService: ConfirmationDialogService;

  constructor(dialogService: ConfirmationDialogService) {
    this.dialogService = dialogService;
  }

  edit() {
  }

  delete() {
    const dialogRef = this.dialogService.open();
    dialogRef.onDelete.subscribe(() => this.onDelete.emit(this.course));
  }

}
