import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  load(key: string) {
    var val = localStorage.getItem(key);
    return val ? JSON.parse(val) : null;
  }

  store(key: string, val: Object) {
    localStorage[key] = JSON.stringify(val);
  }
}
