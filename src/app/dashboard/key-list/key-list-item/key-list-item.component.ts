import { Component, OnInit, Input } from '@angular/core';
import { KeyList } from 'src/app/shared/KeyList.model';
import { ButtonStateService } from 'src/app/services/button-state.service';

@Component({
  selector: 'app-key-list-item',
  templateUrl: './key-list-item.component.html',
  styleUrls: ['./key-list-item.component.css'],
  providers: [ButtonStateService]
})
export class KeyListItemComponent implements OnInit {
  @Input() keyItem: KeyList;
  accessKey:string;

  constructor(public buttonStateService: ButtonStateService) { }

  ngOnInit() {
    //Appending 'q' just to add a letter before id according to HTML 5 id specifications
    this.accessKey = `q${this.keyItem.accessKey}`;
  }

  toggleState() {
    this.keyItem.iskeyActive = !this.keyItem.iskeyActive;
  }
}
