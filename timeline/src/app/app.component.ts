import { Component, OnInit,  } from '@angular/core';

import { EVENTS_LIST } from './events-list';
import { AttachSession } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'timeline';
  eventsList = EVENTS_LIST;
  size: number = 44;
  disp: Map<string, boolean> = new Map<string, boolean>();

  constructor() { }

  ngOnInit() {
    this.eventsList = this.eventsList.sort((a, b) => a.date.getTime() - b.date.getTime())
  }

  displaySide(path) {
    this.disp.set(path, true);
  }

  hideSide(path) {
    this.disp.set(path, false);
  }

  canDisplay(path)
  {
    return this.disp.get(path);
  }

}
