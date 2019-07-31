import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor(private http: HttpClient) { }

  url: string = "https://pokeapi.co/api/v2";

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}