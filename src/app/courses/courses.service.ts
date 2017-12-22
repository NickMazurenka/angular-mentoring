import { Injectable } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';

@Injectable()
export class CoursesService {

  private static courses: ICourseDetails[] = [{
    id: 1,
    description: 'Awesome course one',
    date: new Date('24 Dec 17'),
    duration: 87
  }, {
    id: 2,
    description: 'Awesome course two',
    date: new Date('18 Dec 17'),
    duration: 27
  }, {
    id: 3,
    description: 'Awesome course three',
    date: new Date('24 Nov 17'),
    duration: 88,
    starred: true
  }];

  constructor() { }

  public getCourseList(): ICourseDetails[] {
    return CoursesService.courses;
  }

  public createCourse(course: ICourseDetails): void {
    CoursesService.courses.push(course);
  }

  public getCourseById(id: number): ICourseDetails {
    return CoursesService.courses.filter((course: ICourseDetails) => course.id === id)[0];
  }

  public updateCourse(id: number, data: ICourseDetails): void {
    let course = this.getCourseById(id);
    course = data;
  }

  public deleteCouseById(id: number): void {
    CoursesService.courses = CoursesService.courses.filter((course: ICourseDetails) => course.id !== id);
  }

  public deleteCouse(course: ICourseDetails): void {
    const index = CoursesService.courses.indexOf(course);
    CoursesService.courses.splice(index, 1);
  }

}
