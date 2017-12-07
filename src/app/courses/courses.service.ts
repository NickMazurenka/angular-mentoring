import { Injectable } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';

@Injectable()
export class CoursesService {

  private static courses: ICourseDetails[] = [{
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

  public getCourseList(): ICourseDetails[] {
    return CoursesService.courses;
  }

  public CreateCourse(course: ICourseDetails): void {
    CoursesService.courses.push(course);
  }

  public GetCourseById(id: number): ICourseDetails {
    return CoursesService.courses.filter((course: ICourseDetails) => course.id === id)[0];
  }

  public UpdateCourse(id: number, data: ICourseDetails): void {
    let course = this.GetCourseById(id);
    course = data;
  }

  public RemoveCourse(id: number): void {
    CoursesService.courses = CoursesService.courses.filter((course: ICourseDetails) => course.id !== id);
  }

}
