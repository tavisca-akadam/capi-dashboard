import { Component, OnInit,Input } from '@angular/core';
import {CreateNewKeyService} from '../../../services/create-new-key.service'
import {KeyList} from '../../../shared/keyList.model'
import {NewClient} from '../../../shared/newClient.model'
import {NonCapiClient} from '../../../shared/nonCapiClient.model'
import { CreateKeyAlertComponent } from '../create-key-alert/create-key-alert.component';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-create-key-popup-content',
  templateUrl: './create-key-popup-content.component.html',
  styleUrls: ['./create-key-popup-content.component.css']
})
export class CreateKeyPopupContentComponent implements OnInit {
  @Input() nonCapiClientList:NonCapiClient[];
  constructor(private NewKey:CreateNewKeyService) { }
  newAccessKey:KeyList;
  bannerType:string;
  ngOnInit() {
  }
  requestApiToCreateKey(client,cpg,program,updatedBy){
    this.NewKey.post(new NewClient(client,cpg,program,updatedBy))
      .subscribe(
        key => {
          this.newAccessKey=key;
        }
      );
  }
  validateIfCreated(client,cpg,program,updatedBy){
    console.log(this.newAccessKey);
    this.bannerType="Creating";
    if(this.newAccessKey)    
      if((this.newAccessKey.clientName==client)&&(this.newAccessKey.updatedBy==updatedBy)&&(this.newAccessKey.iskeyActive==false)&&this.newAccessKey.accessKey)
        this.bannerType="Success";
      else
        this.bannerType="Error";
  }
  createKey(event){
    var target=event.target
    const client=target.querySelector('#clientName').value
    const cpg=target.querySelector('#cpg').value
    const program=target.querySelector('#program').value
    const updatedBy="CuttingChai";
    if((client=="")||(cpg=="")||(program==""))
    this.bannerType="Required";
    else{
      this.requestApiToCreateKey(client,cpg,program,updatedBy);
      this.validateIfCreated(client,cpg,program,updatedBy);
    }
  }
}
