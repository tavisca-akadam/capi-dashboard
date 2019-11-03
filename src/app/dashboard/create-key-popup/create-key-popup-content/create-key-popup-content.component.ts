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
  requestApiToCreateKey(clientName,cpg,program,updatedBy,id){
    this.NewKey.post(new NewClient(clientName,id,cpg,program,updatedBy))
      .subscribe(
        (key) => {
          this.newAccessKey=key;
          this.validateIfCreated(clientName,cpg,program,updatedBy,id);
        },
        (error) => {
          this.bannerType="Error";
        }
      );
  }
  validateIfCreated(clientName,cpg,program,updatedBy,id){
    if(this.newAccessKey)    
      if((this.newAccessKey.clientName==clientName)&&(this.newAccessKey.updatedBy==updatedBy)&&(this.newAccessKey.iskeyActive==false)&&this.newAccessKey.accessKey)
        this.bannerType="Success";
      else
        this.bannerType="Error";
  }
  createKey(event){
    var target=event.target
    const clientName=target.querySelector('#clientName').value
    const cpg=target.querySelector('#cpg').value
    const program=target.querySelector('#program').value
    const updatedBy="CuttingChai";
    const id=this.getIdOfClinet(clientName);
    if((clientName=="")||(cpg=="")||(program==""))
    this.bannerType="Required";
    else{
      this.bannerType="Creating";
      this.requestApiToCreateKey(clientName,cpg,program,updatedBy,id);
    }
  }
  getIdOfClinet(clientName):String{
    var id="";
    this.nonCapiClientList.forEach(nonCapiClient => {
      if(nonCapiClient.clientName==clientName){
        id=nonCapiClient.ClientId;
      }
    });
    return id;
  }
}
