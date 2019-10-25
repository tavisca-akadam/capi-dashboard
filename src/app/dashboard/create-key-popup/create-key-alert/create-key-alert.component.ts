import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-key-alert',
  templateUrl: './create-key-alert.component.html',
  styleUrls: ['./create-key-alert.component.css']
})
export class CreateKeyAlertComponent implements OnInit {
  @Input() bannerType:number;
  constructor() { }

  ngOnInit() {
  }

}
