import { Component, OnInit ,Input,EventEmitter, Output} from '@angular/core';
import {ProgramGroup} from "../../../../shared/programGroup.model"
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
  constructor() { }

  ngOnInit() {
  }
  getSelectedProgramGroup(){
    this.onSelect.next(this.selectedProgramGroup);
  }
}
