import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public getItem(key: string): string {
    return localStorage.getItem(key);
  }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

}
