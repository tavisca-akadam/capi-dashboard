import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  @Output() toggleYes = new EventEmitter();
  @Input() id;
  @Input() keyItem;
  
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // this.toggleYes.emit();
    console.log(this.keyItem);
  }

}
