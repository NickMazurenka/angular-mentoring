import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthHttpService {

  constructor(private httpClient: HttpClient) {
  }

  public get<T>(url: string) {
    return this.httpClient.get<T>(url);
  }

}
