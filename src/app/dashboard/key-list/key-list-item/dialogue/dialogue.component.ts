import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ChangeKeyStateService } from 'src/app/services/change-key-state.service';
import { KeyList } from 'src/app/shared/KeyList.model';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  @Output() toggleYes = new EventEmitter();
  @Input() id;
  @Input() keyItem;
  @Output() updatedKeyItem = new EventEmitter<KeyList>();
  
  constructor(private changeKeyState: ChangeKeyStateService) { }

  ngOnInit() {
  }

  onClick() {
    // this.toggleYes.emit();
    this.changeKeyState.onChangeKeyState(this.keyItem).subscribe((response) => {
      this.updatedKeyItem.emit(response);
    });
    console.log(this.keyItem);
  }

}
