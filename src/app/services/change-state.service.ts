import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeyList } from '../shared/KeyList.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeStateService {
  url = 'http://localhost:4200/assets/mock.data.json';
  mockList: Observable<KeyList[]>;
  constructor(private http: HttpClient) {
   }

  changeAccessKeyState(clientId) {
    console.log(clientId);
    this.mockList = this.http.get<KeyList[]>(this.url);
  }
}
