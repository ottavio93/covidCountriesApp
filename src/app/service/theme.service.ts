import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export enum Theme {
  light = 'ligth',
  dark = 'dark',
}
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private node: BehaviorSubject<Theme> = new BehaviorSubject(Theme.dark);
  mode$: any;

  constructor() {}
  get Node$() {
    return this.node.asObservable();
  }
  toggleMode() {
    if (this.node.value === Theme.dark) {
      this.node.next(Theme.light);
    }
  }
}
