import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  get(serviceContext): Observable<any> {
    return this.http.get(serviceContext).pipe(
      map(response => {
        return response;
      })
    );
  }
}
