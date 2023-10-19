import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  colorSubject = new Subject<string>();

  constructor() {}

  changeColor(color: string) {
    this.colorSubject.next(color);
  }
}
