import { Component, OnInit ,EventEmitter , Input,Output} from '@angular/core';
import {Program} from "../../../../shared/program.model"
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @Output() onSelect = new EventEmitter();
  @Input() programList:Program[];
  @Input() displayList:boolean;
  selectedProgram : Program;
  constructor() { }
  ngOnInit() {
  }
  getSelectedProgram(){
    this.onSelect.next(this.selectedProgram);
  }
}
