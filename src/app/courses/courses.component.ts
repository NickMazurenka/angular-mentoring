import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';
import { CoursesService } from './courses.service';
import { CoursesFilterPipe } from './courses-filter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  public pattern: string;
  public courses: ICourseDetails[];

  private coursesService: CoursesService;
  private router: Router;

  constructor(router: Router, coursesService: CoursesService) {
    this.router = router;
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

  onAddCourseClicked() {
    this.router.navigate(['addCourse']);
  }

  deleteCourse(course: ICourseDetails) {
    this.coursesService.deleteCouse(course).subscribe((courses: ICourseDetails[]) => this.courses = courses);
  }

  ngOnDestroy() {
  }

}
