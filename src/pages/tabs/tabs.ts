import { Component } from '@angular/core';

import { TabModel } from '../../models/tab-model';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabs: Array<TabModel>;

  constructor() {

    this.tabs = TabModel.buildTabs();

  }
}
