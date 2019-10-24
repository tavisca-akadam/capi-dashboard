import { Component, OnInit } from '@angular/core';
import { CreateKeyAlertComponent } from '../create-key-alert/create-key-alert.component';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-create-key-popup-content',
  templateUrl: './create-key-popup-content.component.html',
  styleUrls: ['./create-key-popup-content.component.css']
})
export class CreateKeyPopupContentComponent implements OnInit {
  constructor() { }
  showBanner:boolean = false;
  bannerType:number;
  ngOnInit() {
  }
  createKey(event){
    var target=event.target
    const client=target.querySelector('#clientName').value
    const cpg=target.querySelector('#cpg').value
    const program=target.querySelector('#program').value
    if((client=="")||(cpg=="")||(program==""))
    this.bannerType=4;
    else{
      this.bannerType=3;
    }
    this.showBanner=true;
  }
}
