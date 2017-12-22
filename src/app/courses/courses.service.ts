import { Injectable } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class CoursesService {

  private courses: ICourseDetails[] = [{
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
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
    return Observable.of(this.courses);
  }

}
