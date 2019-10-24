import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewClient } from '../shared/newClient.model';
import { KeyList } from '../shared/KeyList.model';

@Injectable({
  providedIn: 'root'
})
export class CreateAccesskeyService {
  url='https://localhost:44302/accesskey/create';
  constructor(private http:HttpClient) { }
}
