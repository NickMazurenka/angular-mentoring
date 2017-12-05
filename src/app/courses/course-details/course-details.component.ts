import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourseDetails } from './course-details.model';
import { ConfirmationDialogService } from './confirmation-dialog.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input() course: ICourseDetails;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  private dialogService: ConfirmationDialogService;

  constructor(dialogService: ConfirmationDialogService) {
    this.dialogService = dialogService;
  }

  ngOnInit() {
  }

  edit() {
  }

  delete() {
    this.dialogService.open();
    this.change.emit(this.course.id);
  }

}
