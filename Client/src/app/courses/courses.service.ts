import { Injectable } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ICourseDto } from './course-details/course-dto.model';

@Injectable()
export class CoursesService {

  private static outdatedRange: number = 14;

  private _courses: ICourseDto[] = [{
    courseId: 1,
    courseDescription: 'Awesome course one',
    courseDate: new Date('4 Jan 18'),
    courseDuration: 87
  }, {
    courseId: 2,
    courseDescription: 'Awesome course two',
    courseDate: new Date('8 Jan 18'),
    courseDuration: 27
  }, {
    courseId: 3,
    courseDescription: 'Awesome course three',
    courseDate: new Date('24 Nov 18'),
    courseDuration: 88,
    courseStarred: true
  }];

  private get courses(): ICourseDetails[] {
    const dateLimit: Date = new Date();
    dateLimit.setDate(dateLimit.getDate() - CoursesService.outdatedRange);
    return this._courses.filter(course => course.courseDate >= dateLimit).map((courseDto: ICourseDto) => {
      return {
        id: courseDto.courseId,
        description: courseDto.courseDescription,
        date: courseDto.courseDate,
        duration: courseDto.courseDuration,
        starred: courseDto.courseStarred
      };
    });
  }
  private set courses(value: ICourseDetails[]) {
    this._courses = value.map((course: ICourseDetails) => {
      return {
        courseId: course.id,
        courseDescription: course.description,
        courseDate: course.date,
        courseDuration: course.duration,
        courseStarred: course.starred
      };
    });
  }

  constructor() { }

  public getCourseList(): Observable<ICourseDetails[]> {
    return Observable.of(this.courses);
  }

  public createCourse(course: ICourseDetails): Observable<ICourseDetails> {
    this.courses.push(course);
    return Observable.of(course);
  }

  public updateCourse(data: ICourseDetails): Observable<ICourseDetails> {
    let course = this.courses.filter((c: ICourseDetails) => c.id === data.id)[0];

    return new Observable(observer => {
      if (course == null) {
        observer.error();
      } else {
        course = data;
        observer.next(course);
      }
    });
  }

  public deleteCouse(course: ICourseDetails): Observable<ICourseDetails[]> {
    this.courses = this.courses.filter(c => c.id !== course.id);
    return Observable.of(this.courses);
  }

}
