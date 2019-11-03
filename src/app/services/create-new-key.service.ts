import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {observable, Observable} from 'rxjs'
import { KeyList } from '../shared/KeyList.model';
import { NewClient } from '../shared/newClient.model';

@Injectable({
  providedIn: 'root'
})
export class CreateNewKeyService {
  url='https://localhost:44302/accesskey/create';
  constructor(private http:HttpClient) { }
  post(newClient:NewClient):Observable<KeyList>{
    return this.http.post<KeyList>(this.url,newClient);
  }
}
