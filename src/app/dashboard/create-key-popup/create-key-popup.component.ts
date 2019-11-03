import { Component, OnInit } from '@angular/core';
import { FetchNonCapiClientsService } from '../../services/fetch-non-capi-clients.service';
import { NonCapiClient } from '../../shared/nonCapiClient.model';

@Component({
  selector: 'app-create-key-popup',
  templateUrl: './create-key-popup.component.html',
  styleUrls: ['./create-key-popup.component.css']
})
export class CreateKeyPopupComponent implements OnInit {

  nonCapiClientList:NonCapiClient[];
  constructor(private NonCapiClient:FetchNonCapiClientsService) { }

  ngOnInit() {
    this.NonCapiClient.getAll().subscribe(clients=>{
      this.nonCapiClientList=clients;
    })
  }

}
