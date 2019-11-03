import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-create-key-alert',
  templateUrl: './create-key-alert.component.html',
  styleUrls: ['./create-key-alert.component.css']
})
export class CreateKeyAlertComponent implements OnInit {
  @Input() bannerType:string;
  constructor() { }

  ngOnInit() {
  }
  
}
