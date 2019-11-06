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
  programList:Program[];
  programGroupList:ProgramGroup[];
  ngOnInit() {
    this.loadClient();
  }
  loadClient(){
    this.hierarchy.getClients().subscribe(
      clients =>{
        this.clientList=clients;
      }
    );
  }
  loadProgramGroup(){
    this.hierarchy.getProgramGroup("").subscribe(
      programGroups =>{
        this.programGroupList=programGroups;
      }
    );
  }
  loadProgram(){
    this.hierarchy.getPrograms("").subscribe(
      programs =>{
        this.programList=programs;
      }
    )
  }
  createKey(event){
    var target=event.target;
    const clientName=document.getElementById("client");
    console.log(clientName);
    const cpg=target.querySelector('#cpg').value
    const program=target.querySelector('#program').value
    const updatedBy="CuttingChai";
    // if((clientName=="")||(cpg=="")||(program==""))
    // this.bannerType="Required";
    // else{
    //   this.bannerType="Creating";
    // }
  }
}
