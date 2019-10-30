import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {NonCapiClient} from '../shared/nonCapiClient.model';

@Injectable({
  providedIn: 'root'
})
export class FetchNonCapiClientsService {
  url = 'http://localhost:4200/assets/mock.nonCapiClients.json';
  constructor(private http: HttpClient) { }
  getAll(): Observable<NonCapiClient[]> {
    return this.http.get<NonCapiClient[]>(this.url);
  }
}
