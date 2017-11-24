import { Component, OnInit, Input } from '@angular/core';
import { ICourseDetails } from './course-details.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input() course: ICourseDetails;

  constructor() { }

  ngOnInit() {
  }

  edit() {
  }

  delete() {
  }

}
