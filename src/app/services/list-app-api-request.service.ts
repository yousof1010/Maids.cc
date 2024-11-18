import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListAppApiRequestService {
  private UrlGetUsers = environment.baseApi + "users?page=";
  private UrlGetUser  = environment.baseApi + "users/";
  constructor(private http: HttpClient) { }

  Request_getUsers(page:number): Observable<any> {
    return this.http.get(this.UrlGetUsers+page)
      .pipe(
        shareReplay(),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  Request_getUser(id:number): Observable<any> {
    return this.http.get(this.UrlGetUser+id)
      .pipe(
        shareReplay(),
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
