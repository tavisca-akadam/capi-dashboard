import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert-banner',
  templateUrl: './alert-banner.component.html',
  styleUrls: ['./alert-banner.component.css']
})
export class AlertBannerComponent implements OnInit {
  @Input() bannerType:string;

  constructor(public alertService: AlertService) { }

  ngOnInit() {
  }

}
