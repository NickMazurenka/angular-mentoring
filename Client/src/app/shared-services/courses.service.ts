import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ICourseDto } from '../shared-models/course-dto.model';
import { ICourseDetails } from '../shared-models/course-details.model';
import 'rxjs/add/observable/of';
import { IAuthorDto } from '../shared-models/author-dto.model';
import { IAuthor } from '../shared-models/author.model';

@Injectable()
export class CoursesService {

  private outdatedRange: number = 14;

  private get coursesUrl() {
    return `${environment.apiEndpoint}/courses`;
  }

  private courses: ICourseDetails[] = [];

  constructor(private http: HttpClient) { }

  public test(): Observable<ICourseDetails[]> {
    return this.mapCoursesDto(this.http.get<ICourseDto[]>(this.coursesUrl));
  }

  public getCourseList(start?: number, count?: number, filter?: string): Observable<ICourseDetails[]> {
    const url: string = start == null ? this.coursesUrl :
      filter == null ? `${this.coursesUrl}?start=${start}&count=${count}` :
        `${this.coursesUrl}?start=${start}&count=${count}&filter=${filter}`;
    return this.mapCoursesDto(this.http.get<ICourseDto[]>(url));
  }

  public getCourse(id: number): Observable<ICourseDetails> {
    const url = `${this.coursesUrl}/${id}`;
    return this.mapCourseDto(this.http.get<ICourseDto>(url));
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

  private mapCoursesDto(coursesDtoObs: Observable<ICourseDto[]>): Observable<ICourseDetails[]> {
    return coursesDtoObs.pipe(map((coursesDto: ICourseDto[]) => coursesDto.map((courseDto: ICourseDto) => {
      return {
        id: courseDto.id,
        name: courseDto.name,
        description: courseDto.description,
        date: new Date(courseDto.date),
        duration: courseDto.length,
        authors: this.mapAuthors(courseDto.authors),
        starred: courseDto.isTopRated,
      };
    })));
  }

  private mapCourseDto(courseDtoObs: Observable<ICourseDto>): Observable<ICourseDetails> {
    return courseDtoObs.pipe(map((courseDto: ICourseDto) => {
      return {
        id: courseDto.id,
        name: courseDto.name,
        description: courseDto.description,
        date: new Date(courseDto.date),
        duration: courseDto.length,
        authors: this.mapAuthors(courseDto.authors),
        starred: courseDto.isTopRated
      };
    }));
  }

  private mapAuthors(authorsDto: IAuthorDto[]): IAuthor[] {
    return authorsDto.map((authorDto: IAuthorDto) => {
      return {
        id: authorDto.id,
        firstName: authorDto.firstName,
        lastName: authorDto.lastName
      };
    });
  }

}
