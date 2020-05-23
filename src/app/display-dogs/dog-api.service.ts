import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Dogs } from './Dogs';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  apiUrl = 'http://localhost:8089/dogs';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders ({
      'Content-Type' : 'application/json'
    })
  }

  public getDogs():Observable<Dogs[]> {
      return this.http.get<Dogs[]>(this.apiUrl + '/dog-pictures-by-breed')
      .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
