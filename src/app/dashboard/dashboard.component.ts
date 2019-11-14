import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';
import { KeyList } from '../shared/KeyList.model';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bannerType: string = 'Success';

  keyListData: KeyList[];
  constructor(private keyList: FetchDataService,
              public alertService: AlertService) {}

  ngOnInit() {
    this.keyList.getAll().subscribe( keys => {
      this.keyListData = keys;
    });
  }

}
