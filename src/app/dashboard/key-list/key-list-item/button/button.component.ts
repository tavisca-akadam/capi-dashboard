import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ChangeStateService } from 'src/app/services/change-state.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonState: boolean;
  @Input() id: string;

  @ViewChild('checkbox', { static: false }) checkbox: ElementRef;

  constructor(private ChangeAccessKeyStateService: ChangeStateService) {}

  ngOnInit() {
    console.log(this.buttonState);
  }

  ngAfterViewInit() {
    console.log(this.checkbox);
    this.checkbox.nativeElement.checked = this.buttonState;
  }

  toggleKeyState(event) {
    console.log(event.target.checked);
    this.ChangeAccessKeyStateService.changeAccessKeyState(this.id);
 }

}
