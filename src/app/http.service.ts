import { Injectable } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
