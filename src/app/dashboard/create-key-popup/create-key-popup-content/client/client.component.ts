import { Component, OnInit , Input } from '@angular/core';
import {Client} from "../../../../shared/client.model"
import {FetchDataFromHierarchyApiService} from "../../../../services/fetch-data-from-hierarchy-api.service"
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @Input() clientList:Client[];
  constructor(private hierarchyData:FetchDataFromHierarchyApiService) { }
  ngOnInit() {
  }
}
