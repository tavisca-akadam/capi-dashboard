import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyList } from 'src/app/shared/KeyList.model';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  @Input() keyListData : KeyList[]
  @Output() sortedKeyList = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  sortList(sortParam)
  {
    switch(sortParam)
    {
      case 'a-z':
          console.log('a-z sort');
          this.keyListData.sort((a, b) => (a.clientName.toLowerCase() > b.clientName.toLowerCase()) ? 1 : -1);
          break;
      case 'z-a':
          console.log('z-a sort');
          this.keyListData.sort((a, b) => (a.clientName.toLowerCase() < b.clientName.toLowerCase()) ? 1 : -1);
          break;

    }

    this.sortedKeyList.emit(this.sortedKeyList);
  }

}
