import { Component, OnInit, Input } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { KeyList } from 'src/app/shared/KeyList.model';

@Component({
  selector: 'app-key-list',
  templateUrl: './key-list.component.html',
  styleUrls: ['./key-list.component.css']
})
export class KeyListComponent implements OnInit {

  @Input() keyListData: KeyList;

  ngOnInit() {}
}
