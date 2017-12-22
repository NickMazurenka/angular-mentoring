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
  public pattern: string;
  public courses: ICourseDetails[];

  private coursesService: CoursesService;

  constructor(coursesService: CoursesService) {
    this.courses = [];
    this.coursesService = coursesService;
  }

  ngOnInit() {
    this.coursesService.getCourseList().subscribe((courses: ICourseDetails[]) => this.courses = courses);
  }

  search() {
    this.coursesService.getCourseList().subscribe((courses: ICourseDetails[]) => {
      if (this.pattern) {
        this.courses = new CoursesFilterPipe().transform(courses, this.pattern);
      } else {
        this.courses = courses;
      }
    });
  }

  deleteCourse(course: ICourseDetails) {
    this.coursesService.deleteCouse(course).subscribe((courses: ICourseDetails[]) => this.courses = courses);
  }

}
