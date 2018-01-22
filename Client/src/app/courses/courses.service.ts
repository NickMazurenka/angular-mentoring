import { Injectable } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { ICourseDto } from './course-details/course-dto.model';
import { AuthHttpService } from '../shared-services/auth-http.service';

@Injectable()
export class CoursesService {

  private outdatedRange: number = 14;

  private coursesUrl = 'http://localhost:3004/courses';

  private courses: ICourseDetails[] = [];

  constructor(private httpService: AuthHttpService) { }

  public getCourseList(start?: number, count?: number): Observable<ICourseDetails[]> {
    const url: string = start == null ? this.coursesUrl : `${this.coursesUrl}?start=${start}&count=${count}`;
    return this.mapCourseDto(this.httpService.get<ICourseDto[]>(url));
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

  private mapCourseDto(coursesDtoObs: Observable<ICourseDto[]>): Observable<ICourseDetails[]> {
    return coursesDtoObs.pipe(map((coursesDto: ICourseDto[]) => coursesDto.map((courseDto: ICourseDto) => {
      return {
        id: courseDto.id,
        name: courseDto.name,
        description: courseDto.description,
        date: new Date(courseDto.date),
        duration: courseDto.length,
        starred: courseDto.isTopRated
      };
    })));
  }

}
