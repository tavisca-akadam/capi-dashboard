import { Component, OnInit ,Input,EventEmitter, Output} from '@angular/core';
import {ProgramGroup} from "../../../../shared/programGroup.model"
import {FetchDataFromHierarchyApiService} from "../../../../services/fetch-data-from-hierarchy-api.service"
@Component({
  selector: 'app-program-group',
  templateUrl: './program-group.component.html',
  styleUrls: ['./program-group.component.css']
})
export class ProgramGroupComponent implements OnInit {
  @Output() onSelect = new EventEmitter();
  @Input() programGroupList:ProgramGroup[];
  @Input() displayList:boolean;
  selectedProgramGroup : ProgramGroup;
  constructor(private hierarchyData:FetchDataFromHierarchyApiService) { }

  ngOnInit() {
  }
  getSelectedProgramGroup(){
    this.onSelect.next(this.selectedProgramGroup);
  }
}
