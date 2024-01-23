import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpParams, HttpResponse} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable , throwError } from 'rxjs';
import { Login } from '../models/login.model';
import { reef } from '../models/reef.model';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  REST_API: string = 'http://145.24.222.136:8080/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient : HttpClient) { }

  ValidateLogin(login: Login): Observable<HttpResponse<any>> {
    const body = JSON.stringify(login);
    return this.httpClient.post(`${this.REST_API}/check_login_attempt`, body, {'headers': this.headers, observe: 'response'})
      .pipe(
        catchError((error) => {
          console.error('An error occurred', error);
          return throwError(error);
        })
      );
  }

  AddReef(reef: reef): Observable<HttpResponse<any>> {
    const body = JSON.stringify(reef);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/create_reef`, body, {'headers': this.headers, observe: 'response'})
    .pipe(
      catchError((error) => {
        console.error('An error occurred', error);
        return throwError(error);
      })
    );
  }

  AddUser(user:user): Observable<HttpResponse<any>> {
    const body = JSON.stringify(user);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/create_user`, body, {'headers': this.headers, observe: 'response'})
    .pipe(
      catchError((error) => {
        console.error('An error occurred', error);
        return throwError(error);
      })
    );
  }

  GetReefById(id: number): Observable<any> {
    const headers = new HttpHeaders({'content-type': 'application/json'});
    const body = JSON.stringify({id: id});
    return this.httpClient.post(`${this.REST_API}/retrieve_reef`, body, {'headers': headers, observe: 'response'})
      .pipe(
        map(data => {
          return data;
        })
      )
  }

  GetReefs(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/retrieve_reefs`, {observe: 'response'})
      .pipe(
        map(data => {
          return data;
        })
      )
  }

  DeleteReefById(id: number): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({'content-type': 'application/json'});
    const body = JSON.stringify({id: id});
    return this.httpClient.post(`${this.REST_API}/remove_reef`, body, {'headers': headers, observe: 'response'})
      .pipe(
        catchError((error) => {
          console.error('An error occurred: ', error)
          return throwError(error);
        })
      )
  }
}
