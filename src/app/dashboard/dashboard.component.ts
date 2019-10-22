import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';
import { KeyList } from '../shared/KeyList.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  keyListData: KeyList[];
  constructor(private keyList: FetchDataService) {}

  ngOnInit() {
    this.keyList.getAll().subscribe( keys => {
      this.keyListData = keys;
    });
  }

}
