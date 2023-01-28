import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key:string, value:string) {
    localStorage.setItem(key, value);
  }

  setObject(key:string, value:object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key:string) {
    return localStorage.getItem(key);
  }

  getObject(key:string) {
    return JSON.parse(localStorage.getItem(key)!);
  }

  removeItem(key:string) {
    localStorage.removeItem(key);
  }

  clearStorage() {
    localStorage.clear();
  }
}
