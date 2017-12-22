import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourseDetails } from './course-details.model';
import { ConfirmationDialogService } from './confirmation-dialog.service';
import { CoursePlateColorDirective } from './course-plate-color.directive';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input() course: ICourseDetails;
  @Output() onDelete: EventEmitter<ICourseDetails> = new EventEmitter<ICourseDetails>();

  private dialogService: ConfirmationDialogService;

  constructor(dialogService: ConfirmationDialogService) {
    this.dialogService = dialogService;
  }

  ngOnInit() {
  }

  edit() {
  }

  delete() {
    const dialogRef = this.dialogService.open();
    dialogRef.onDelete.subscribe(() => this.onDelete.emit(this.course));
  }

}
