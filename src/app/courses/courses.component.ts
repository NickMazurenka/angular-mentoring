import { Component, OnInit } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';
import { CoursesService } from './courses.service';
import { CoursesFilterPipe } from './courses-filter.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public coursesFiltered: ICourseDetails[];
  public pattern: string;

  private courses: ICourseDetails[];
  private coursesService: CoursesService;

  constructor(coursesService: CoursesService) {
    this.courses = [];
    this.coursesService = coursesService;
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourseList();
    this.coursesFiltered = this.courses;
  }

  search() {
    if (this.pattern) {
      this.coursesFiltered = new CoursesFilterPipe().transform(this.courses, this.pattern);
    } else {
      this.coursesFiltered = this.courses;
    }
  }

  find(pattern: string) {
  }

  add() {
  }

  courseChange(id: number) {
    console.log('Parent detected change in course ' + id);
  }

}
