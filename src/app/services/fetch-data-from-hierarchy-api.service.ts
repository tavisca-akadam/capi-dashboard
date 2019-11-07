import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ClientResponse} from '../shared/clientResponse.model';
import {ProgramGroupResponse} from '../shared/programGroupResponse.model';
import {ProgramResponse} from '../shared/programResponse.model';

@Injectable({
  providedIn: 'root'
})
export class FetchDataFromHierarchyApiService {

  //urlForClients='http://localhost:4200/assets/mock.clients.json';
  //urlForProgramGroups='http://localhost:4200/assets/mock.cpg.json';
  //urlForPrograms='http://localhost:4200/assets/mock.program.json';

  urlForClients='https://loyalty-config.qa.cnxloyalty.com/api/v1.0/loyaltyConfig/clients';
  urlForProgramGroups='https://loyalty-config.qa.cnxloyalty.com/api/v1.0/loyaltyConfig/programgroups/';  
  urlForPrograms='https://loyalty-config.qa.cnxloyalty.com/api/v1.0/loyaltyConfig/programs/';
  constructor(private Http:HttpClient) { }
   headerDict = {
     'cnx-tenantId': '2o9o3ae99ts'
   }
   requestOptions = {                                                                                                                                                                                 
     headers: new HttpHeaders(this.headerDict), 
   }; 
   
  getClients():Observable<ClientResponse>{
    return this.Http.get<ClientResponse>(this.urlForClients, this.requestOptions);
    //return this.Http.get<Client[]>(this.urlForClients);
  }
  getProgramGroup(clientId:string):Observable<ProgramGroupResponse>{
    return this.Http.get<ProgramGroupResponse>(this.urlForProgramGroups+clientId, this.requestOptions);
    //return this.Http.get<ProgramGroup[]>(this.urlForProgramGroups);
  }
  getPrograms(programGroupId:string):Observable<ProgramResponse>{
    return this.Http.get<ProgramResponse>(this.urlForPrograms+programGroupId, this.requestOptions);
    //return this.Http.get<Program[]>(this.urlForPrograms);
  }
}