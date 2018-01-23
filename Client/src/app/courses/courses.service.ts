import { Injectable } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { ICourseDto } from './course-details/course-dto.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CoursesService {

  private outdatedRange: number = 14;

  private get coursesUrl() {
    return `${environment.apiEndpoint}/courses`;
  }

  private courses: ICourseDetails[] = [];

  constructor(private http: HttpClient) { }

  public getCourseList(start?: number, count?: number, filter?: string): Observable<ICourseDetails[]> {
    const url: string = start == null ? this.coursesUrl :
      filter == null ? `${this.coursesUrl}?start=${start}&count=${count}` :
        `${this.coursesUrl}?start=${start}&count=${count}&filter=${filter}`;
    return this.mapCourseDto(this.http.get<ICourseDto[]>(url));
  }

  public deleteCouse(courseId: number, start?: number, count?: number, filter?: string): Observable<Object> {
    const url: string = `${this.coursesUrl}/${courseId}`;
    return this.http.delete(url);
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
