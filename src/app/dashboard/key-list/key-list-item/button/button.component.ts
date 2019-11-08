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
  dataAttribute:string;

  constructor(private ChangeAccessKeyStateService: ChangeStateService) {}

  ngOnInit() {
    console.log(this.buttonState);
    this.dataAttribute = `#${this.id}`;
    //console.log(this.id);
    //this.ChangeAccessKeyStateService.changeAccessKeyState(this.buttonState, this.id);
  }
      
  toggleKeyState(event) {
  
  }

}