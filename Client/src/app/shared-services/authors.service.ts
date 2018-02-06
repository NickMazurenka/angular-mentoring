import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { IAuthor } from '../shared-models/author.model';
import { IAuthorDto } from '../shared-models/author-dto.model';
import { map } from 'rxjs/operators';

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
