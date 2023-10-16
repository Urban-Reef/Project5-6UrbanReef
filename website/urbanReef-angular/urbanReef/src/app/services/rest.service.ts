import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable , throwError } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  REST_API: string = 'http://145.24.222.136:8080/api';
  httpHears = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient : HttpClient) { }

  ValidateLogin(login: Login): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(login);
    return this.httpClient.post(`${this.REST_API}/check_login_attempt`, body, {'headers': headers});
  }
}
