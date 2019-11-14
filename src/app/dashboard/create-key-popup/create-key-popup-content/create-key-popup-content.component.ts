import { Component, OnInit, Input } from '@angular/core';
import { Client } from "../../../shared/client.model"
import { Program } from "../../../shared/program.model"
import { NewClientRequest} from "../../../shared/newClientRequest.model"
import { ProgramGroup } from "../../../shared/programGroup.model"
import { FetchDataFromHierarchyApiService } from "../../../services/fetch-data-from-hierarchy-api.service"
import { CreateNewKeyService } from "../../../services/create-new-key.service"
@Component({
  selector: 'app-create-key-popup-content',
  templateUrl: './create-key-popup-content.component.html',
  styleUrls: ['./create-key-popup-content.component.css']
})
export class CreateKeyPopupContentComponent implements OnInit {
  constructor(private hierarchyService: FetchDataFromHierarchyApiService, private createService: CreateNewKeyService) { }
  bannerType: string;
  bannerData: string;

  clientList: Client[];
  displayClientList: boolean;
  selectedClient: Client;

  programList: Program[];
  displayProgramList: boolean;
  selectedProgram: Program;

  programGroupList: ProgramGroup[];
  displayCPGList: boolean;
  selectedProgramGroup: ProgramGroup;

  user:string = "Cutting Chai";
  ngOnInit() {
    this.loadClient();
  }
  loadClient() {
    this.displayCPGList = false;
    this.displayProgramList = false;
    this.hierarchyService.getClients().subscribe(
      clientsResponse => {
        this.clientList=clientsResponse.clients;
        this.displayClientList = true;
      },
      error => {
        console.log("failed to load clients")
      }
    );
  }
  loadProgramGroup(client: Client) {
    this.displayProgramList = false;
    this.selectedClient = client;
    this.hierarchyService.getProgramGroup(client.id).subscribe(
      cpgResponse => {
        this.programGroupList = cpgResponse.programGroups;
        this.displayCPGList = true;
      },
      error => {
        console.log("failed to load program groups")
      }
    );
  }
  loadProgram(programGroup: ProgramGroup) {
    this.selectedProgramGroup = programGroup;
    this.hierarchyService.getPrograms(programGroup.id).subscribe(
      programResponse => {
        this.programList = programResponse.programs;
        this.displayProgramList = true;
      },
      error => {
        console.log("failed to load programs")
      }
    );
  }
  selectProgram(program: Program) {
    this.selectedProgram = program;
  }
  createKey(event) {
    if (!this.selectedClient || !this.selectedProgramGroup || !this.selectedProgram)
      this.bannerType = "Required";
    else
      this.requestApiToCreateKey();
    this.cleanStoredValues();
    this.loadClient();
  }
  cleanStoredValues() {
    this.clientList = null;
    this.displayClientList = false;
    this.selectedClient = null;
    this.programList = null;
    this.displayProgramList = false;
    this.selectedProgram = null;
    this.programGroupList = null;
    this.displayCPGList = false;
    this.selectedProgramGroup = null;
  }
  requestApiToCreateKey() {
    this.bannerType = "Creating";
    this.createService.post(this.getNewClientRequest())
      .subscribe(
        (accessKey) => {
          this.bannerType = "Success";
          this.bannerData = accessKey.AccessKey;
        },
        (error) => {
          this.bannerType = "Exists";
        }
      );
  }
  getNewClientRequest(): NewClientRequest {
    var client = new NewClientRequest(this.selectedClient.id,this.selectedClient.name,this.selectedProgramGroup.name,this.selectedProgram.name,this.user,this.selectedClient.tenantId,this.selectedProgram.id,this.selectedClient.classicId);
    console.log(client);
    return client;
  }
}
