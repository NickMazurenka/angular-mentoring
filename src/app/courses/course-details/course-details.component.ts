import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourseDetails } from './course-details.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input() course: ICourseDetails;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  edit() {
  }

  delete() {
    this.change.emit(this.course.id);
  }

}
