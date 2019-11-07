import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  displayAlert: boolean;
  alertMessage: string;
  alertForKey: string;

  setTimeout(duration: number) {
    setTimeout(() => {
      this.displayAlert = false;
    }, duration*1000);
  }

  constructor() { }
}
