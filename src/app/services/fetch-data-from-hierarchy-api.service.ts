import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Client} from '../shared/client.model';
import {Program} from '../shared/program.model';
import {ProgramGroup} from '../shared/programGroup.model';

@Injectable({
  providedIn: 'root'
})
export class FetchDataFromHierarchyApiService {
  urlForClients='http://localhost:4200/assets/mock.clients.json';
  urlForProgramGroups='http://localhost:4200/assets/mock.cpg.json';
  urlForPrograms='http://localhost:4200/assets/mock.program.json';
  constructor(private Http:HttpClient) { }
  getClients():Observable<Client[]>{
    return this.Http.get<Client[]>(this.urlForClients);
  }
  getProgramGroup(clientId:string):Observable<ProgramGroup[]>{
    return this.Http.get<ProgramGroup[]>(this.urlForProgramGroups);
  }
  getPrograms(programGroupId:string):Observable<Program[]>{
    return this.Http.get<Program[]>(this.urlForPrograms);
  }
}