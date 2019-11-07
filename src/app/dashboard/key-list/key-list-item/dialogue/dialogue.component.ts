import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ChangeKeyStateService } from 'src/app/services/change-key-state.service';
import { KeyList } from 'src/app/shared/KeyList.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  @Output() toggleYes = new EventEmitter();
  @Input() id;
  @Input() keyItem;
  @Input() buttonState;
  @Output() updatedKeyItem = new EventEmitter<KeyList>();
  
  constructor(private changeKeyState: ChangeKeyStateService,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  onClick() {
    // this.toggleYes.emit();
    this.alertService.displayAlert = true;
    this.alertService.alertMessage = !this.buttonState ? 'Activated' : 'Deactivated';
    this.alertService.alertForKey = this.id;
    this.alertService.setTimeout(3);
    this.changeKeyState.onChangeKeyState(this.keyItem).subscribe((response) => {
      this.updatedKeyItem.emit(response);
      console.log(response);
    });
    console.log(this.keyItem);
  }

}
