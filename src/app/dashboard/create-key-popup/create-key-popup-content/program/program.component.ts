import { Component, OnInit , Input} from '@angular/core';
import {Program} from "../../../../shared/program.model"
import {FetchDataFromHierarchyApiService} from "../../../../services/fetch-data-from-hierarchy-api.service"
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @Input() programList:Program[];
  constructor(private hierarchyData:FetchDataFromHierarchyApiService) { }
  ngOnInit() {
  }

}
