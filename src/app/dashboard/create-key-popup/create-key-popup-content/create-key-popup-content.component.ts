import { Component, OnInit } from '@angular/core';
import {CreateNewKeyService} from '../../../services/create-new-key.service'
import {KeyList} from '../../../shared/keyList.model'
import {NewClient} from '../../../shared/newClient.model'
import { CreateKeyAlertComponent } from '../create-key-alert/create-key-alert.component';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-create-key-popup-content',
  templateUrl: './create-key-popup-content.component.html',
  styleUrls: ['./create-key-popup-content.component.css']
})
export class CreateKeyPopupContentComponent implements OnInit {
  constructor(private NewKey:CreateNewKeyService) { }
  newAccessKey:KeyList;
  bannerType:string;
  ngOnInit() {
  }
  createKey(event){
    var target=event.target
    const client=target.querySelector('#clientName').value
    const cpg=target.querySelector('#cpg').value
    const program=target.querySelector('#program').value
    if((client=="")||(cpg=="")||(program==""))
    this.bannerType="Required";
    else{
      this.NewKey.post(new NewClient(client,cpg,program,"ABCD"))
      .subscribe(
        key => {
          this.newAccessKey=key;
        }
      );
      if(!this.newAccessKey)
        this.bannerType="Error";
      else
        this.bannerType="Success";
    }
  }
}
