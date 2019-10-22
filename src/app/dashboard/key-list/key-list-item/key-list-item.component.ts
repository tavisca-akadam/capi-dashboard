import { Component, OnInit, Input } from '@angular/core';
import { KeyList } from 'src/app/shared/KeyList.model';

@Component({
  selector: 'app-key-list-item',
  templateUrl: './key-list-item.component.html',
  styleUrls: ['./key-list-item.component.css']
})
export class KeyListItemComponent implements OnInit {
  @Input() keyItem: KeyList;
  constructor() { }

  ngOnInit() {}
}
