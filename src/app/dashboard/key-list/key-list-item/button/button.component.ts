import { Component, OnInit, Input } from '@angular/core';
import { ChangeStateService } from 'src/app/services/change-state.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonState: boolean;
  @Input() id: string;
  btnText: string;

  constructor(private ChangeAccessKeyStateService: ChangeStateService) {}

  ngOnInit() {
    console.log(this.buttonState);
    //this.ChangeAccessKeyStateService.changeAccessKeyState(this.buttonState, this.id);
  }
      
  toggleKeyState(event) {
    // console.log(event.target);
    // const buttonEvent = event.target;
    // this.btnText = buttonEvent.innerText;
    // if (this.btnText === 'Activate') {
    //     this.buttonState = false;
    // } else {
    //     this.buttonState = true;
    // }
    this.ChangeAccessKeyStateService.changeAccessKeyState(this.id);
  }

}
