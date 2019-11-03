import { Injectable } from '@angular/core';
import { KeyList } from '../shared/KeyList.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangeKeyStateService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://localhost:44302/accesskey';
  endPoint = '';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  onChangeKeyState(keyItem: KeyList): Observable<KeyList> {

    this.endPoint = keyItem.iskeyActive ? 'deactivate' : 'activate';
    let putUrl = `${this.baseUrl}/${this.endPoint}/${keyItem.accessKey}`;
   

    return this.http.put<KeyList>(putUrl, keyItem,this.httpOptions);
  }

}
