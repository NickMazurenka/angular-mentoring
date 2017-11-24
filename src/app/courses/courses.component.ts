import { Component, OnInit } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: ICourseDetails[] = [{
    id: 1,
    description: 'Awesome course one',
    date: '24 Nov 17',
    duration: '1h 27 min'
  }, {
    id: 2,
    description: 'Awesome course two',
    date: '24 Nov 17',
    duration: '1h 27 min'
  }, {
    id: 3,
    description: 'Awesome course three',
    date: '24 Nov 17',
    duration: '1h 27 min'
  }];

  constructor() { }

  ngOnInit() {
  }

  find(pattern: string) {
  }

  add() {
  }

}
