import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {observable, Observable} from 'rxjs'
import {AccessKeyResponse} from '../shared/accessKeyResponse.model'
import { NewClientRequest } from '../shared/newClientRequest.model';

@Injectable({
  providedIn: 'root'
})
export class CreateNewKeyService {
  url='https://localhost:44302/accesskey/generatenew';
  constructor(private http:HttpClient) { }
  post(newClientRequest:NewClientRequest):Observable<AccessKeyResponse>{
    return this.http.post<AccessKeyResponse>(this.url,newClientRequest);
  }
}
