import { Component, OnInit, Input } from '@angular/core';
import { KeyList } from 'src/app/shared/KeyList.model';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
  @Input() receivedKey: KeyList;
  constructor() {}

  ngOnInit() {}

}
