import { Component, OnInit ,Input} from '@angular/core';
import {ProgramGroup} from "../../../../shared/programGroup.model"
import {FetchDataFromHierarchyApiService} from "../../../../services/fetch-data-from-hierarchy-api.service"
@Component({
  selector: 'app-program-group',
  templateUrl: './program-group.component.html',
  styleUrls: ['./program-group.component.css']
})
export class ProgramGroupComponent implements OnInit {
  @Input() programGroupList:ProgramGroup[];
  constructor(private hierarchyData:FetchDataFromHierarchyApiService) { }

  ngOnInit() {
  }

}
