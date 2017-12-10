import { Component, OnInit } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  private courses: ICourseDetails[];
  private pattern: string;
  private coursesService: CoursesService;

  constructor(coursesService: CoursesService) {
    this.courses = [];
    this.coursesService = coursesService;
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourseList();
  }

  search() {
    console.log(this.pattern);
  }

  find(pattern: string) {
  }

  add() {
  }

  courseChange(id: number) {
    console.log('Parent detected change in course ' + id);
  }

}
