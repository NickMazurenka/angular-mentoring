import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { environment } from '../../../environments/environment';
import { ICourse } from '../models/course.model';
import { ICourseDto } from '../models/course-dto.model';
import { IAuthorDto } from '../models/author-dto.model';
import { IAuthor } from '../models/author.model';
import { ICourseListDto } from '../models/course-list-dto.model';
import { ICourseList } from '../models/course-list.model';

@Injectable()
export class CoursesService {

  private outdatedRange: number = 14;

  private get coursesUrl() {
    return `${environment.apiEndpoint}/courses`;
  }

  private courses: ICourse[] = [];

  constructor(private http: HttpClient) { }

  public static mapCourseDto(courseDto: ICourseDto): ICourse {
    return {
      id: courseDto.id,
      name: courseDto.name,
      description: courseDto.description,
      date: new Date(courseDto.date),
      duration: courseDto.length,
      authors: courseDto.authors.map(CoursesService.mapAuthorDto),
      starred: courseDto.isTopRated
    };
  }

  public static mapCourse(course: ICourse): ICourseDto {
    return {
      id: course.id,
      name: course.name,
      description: course.description,
      isTopRated: course.starred != null ? course.starred : false,
      date: course.date.toString(),
      length: course.duration,
      authors: course.authors.map(CoursesService.mapAuthor)
    };
  }

  public static mapAuthorDto(authorDto: IAuthorDto): IAuthor {
    return {
      id: authorDto.id,
      firstName: authorDto.firstName,
      lastName: authorDto.lastName
    };
  }

  public static mapAuthor(author: IAuthor): IAuthorDto {
    return {
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName
    };
  }

  public getCourseList(start: number, count: number, filter?: string): Observable<ICourseList> {

    const url: string = this.coursesUrl;
    let params = new HttpParams()
      .set('start', String(start))
      .set('count', String(count));
    if (filter != null) {
      params = params.set('filter', filter);
    }

    return this.http.get<ICourseListDto>(url, { params })
      .pipe(map((courseListDto: ICourseListDto) => {
        return {
          courses: courseListDto.courses.map(CoursesService.mapCourseDto),
          total: courseListDto.total
        };
      }));
  }

  public getCourse(id: number): Observable<ICourse> {
    const url = `${this.coursesUrl}/${id}`;

    return this.http.get<ICourseDto>(url)
      .pipe(map(CoursesService.mapCourseDto));
  }

  public addCourse(course: ICourse): Observable<ICourse> {
    const url = `${this.coursesUrl}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const courseDto = new JsonPipe().transform(CoursesService.mapCourse(course));

    return this.http.post<ICourseDto>(url, courseDto, { headers })
      .pipe(map(CoursesService.mapCourseDto));
  }

  public editCourse(course: ICourse): Observable<ICourse> {
    const url = `${this.coursesUrl}/${course.id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const courseDto = new JsonPipe().transform(CoursesService.mapCourse(course));

    return this.http.put<ICourseDto>(url, courseDto, { headers })
      .pipe(map(CoursesService.mapCourseDto));
  }

  public deleteCourse(courseId: number, start?: number, count?: number, filter?: string): Observable<Object> {
    const url: string = `${this.coursesUrl}/${courseId}`;
    return this.http.delete(url);
  }

}
