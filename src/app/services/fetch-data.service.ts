import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyList } from '../shared/KeyList.model';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
 // http://localhost:4200/assets/mock.data.json
  url = 'https://localhost:5002/accesskey/getall';
  //url = 'http://localhost:4200/assets/mock.data.json';
  constructor(private http: HttpClient) {
   }
  getAll(): Observable<KeyList[]> {
    return this.http.get<KeyList[]>(this.url);
  }
}
