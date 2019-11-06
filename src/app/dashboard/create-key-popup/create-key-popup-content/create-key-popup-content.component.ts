import { Component, OnInit,Input } from '@angular/core';
import {Client} from "../../../shared/client.model"
import {Program} from "../../../shared/program.model"
import {ProgramGroup} from "../../../shared/programGroup.model"
import {FetchDataFromHierarchyApiService} from "../../../services/fetch-data-from-hierarchy-api.service"
@Component({
  selector: 'app-create-key-popup-content',
  templateUrl: './create-key-popup-content.component.html',
  styleUrls: ['./create-key-popup-content.component.css']
})
export class CreateKeyPopupContentComponent implements OnInit {
  constructor(private hierarchy : FetchDataFromHierarchyApiService) { }
  bannerType:string;
  clientList:Client[];
  displayClientList : boolean;
  programList:Program[];
  displayProgramList : boolean;
  programGroupList:ProgramGroup[];
  displayCPGList : boolean;
  ngOnInit() {
    this.loadClient();
  }
  loadClient(){
    this.hierarchy.getClients().subscribe(
      clients => {
        this.clientList = clients;
        this.displayClientList=true;
      }
    );
  }
  loadProgramGroup(client : Client){
    this.hierarchy.getProgramGroup(client.id).subscribe(
      cpgs => {
        this.programGroupList = cpgs;
        this.displayCPGList=true;
      }
    );
  }
  loadProgram(programGroup : ProgramGroup){
    this.hierarchy.getPrograms(programGroup.id).subscribe(
      programs => {
        this.programList = programs;
        this.displayProgramList=true;
      }
    );
  }
  createKey(event){
  }
}
