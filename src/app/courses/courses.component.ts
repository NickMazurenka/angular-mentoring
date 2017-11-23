import { Component, OnInit } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  private courses: ICourseDetails[] = [{
    id: 0,
    description: 'Awesome course one',
    date: new Date(2017, 11, 23),
    duration: 27
  }, {
    id: 1,
    description: 'Awesome course two',
    date: new Date(2017, 11, 23),
    duration: 72
  }, {
    id: 2,
    description: 'Awesome course three',
    date: new Date(2017, 11, 23),
    duration: 27
  }];

  constructor() { }

  ngOnInit() {
  }

  find(pattern: string) {
  }

  add() {
  }

}
