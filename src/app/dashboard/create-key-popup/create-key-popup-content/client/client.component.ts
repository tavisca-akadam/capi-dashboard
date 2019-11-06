import { Component, OnInit , Input , EventEmitter, Output} from '@angular/core';
import {Client} from "../../../../shared/client.model"
import {FetchDataFromHierarchyApiService} from "../../../../services/fetch-data-from-hierarchy-api.service"
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @Output() onSelect = new EventEmitter();
  @Input() clientList:Client[];
  @Input() displayList:boolean;
  selectedClient : Client;
  constructor(private hierarchyData:FetchDataFromHierarchyApiService) { }
  ngOnInit() {
  }
  getSelectedClient(){
    this.onSelect.next(this.selectedClient);
  }
}
