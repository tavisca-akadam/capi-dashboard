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
  sendDetailsForAccessKeyCreation:Observable<KeyList>(client:string,cpg:string,program:string,updatedBy:string){
    let clientDetails=new NewClient(client,cpg,program,updatedBy)
    return this.http.post(this.url,clientDetails).subscribe(data => {console.log(data,"is what we got from server")})
  }
}
