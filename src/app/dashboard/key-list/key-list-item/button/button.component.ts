import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ChangeStateService } from 'src/app/services/change-state.service';
import { ButtonStateService } from 'src/app/services/button-state.service';

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

  @ViewChild('stateToggle', { static: false }) stateToggle: ElementRef;

  constructor(private ChangeAccessKeyStateService: ChangeStateService,
              private buttonStateService: ButtonStateService) {}

  ngOnInit() {
    console.log(this.buttonState);
    this.dataAttribute = `#${this.id}`;

    //this.ChangeAccessKeyStateService.changeAccessKeyState(this.buttonState, this.id);
  }

  ngAfterViewInit() {
    this.onStateChange();

    this.buttonStateService.buttonState.subscribe((checked: boolean) => {
      (this.stateToggle.nativeElement as HTMLInputElement).checked = checked;    
    });
  }

  onStateChange() {
    (this.stateToggle.nativeElement as HTMLInputElement).checked = this.buttonState;
  }
      
  toggleKeyState(event) {
  
  }

}