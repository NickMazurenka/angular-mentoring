import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IAuthor } from '../models/author.model';
import { IAuthorDto } from '../models/author-dto.model';

@Injectable()
export class AuthorsService {

  private get authorsUrl() {
    return `${environment.apiEndpoint}/authors`;
  }

  constructor(private http: HttpClient) { }

  public getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthorDto[]>(this.authorsUrl).pipe(map(this.mapAuthorsDto));
  }

  private mapAuthorsDto(authorsDto: IAuthorDto[]): IAuthor[] {
    return authorsDto.map((authorDto: IAuthorDto) => {
      return {
        id: authorDto.id,
        firstName: authorDto.firstName,
        lastName: authorDto.lastName
      };
    });
  }

}
