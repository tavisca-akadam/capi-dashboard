import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyList } from 'src/app/shared/KeyList.model';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() receivedList: KeyList[];
  @Output() filteredList = new EventEmitter<KeyList[]>();
  searchedKey: string;
  masterList: any[];

  constructor(private keyList: FetchDataService) { }

  ngOnInit() {
    this.keyList.getAll().subscribe( keys => {
      this.masterList = keys;
    });
  }

  onKeySearch(event) {
    const key = event.target.value;
    if (key.length > 0) {
      const results = new Array();
      this.receivedList.forEach( (value) => {
        if (!value.clientName.toLowerCase().search(key.toLowerCase())) {
          results.push(value);
        }
      });
      if (results) {
        this.filteredList.emit(results);
      }
    } else {
      this.filteredList.emit(this.masterList);
    }
  }

}
