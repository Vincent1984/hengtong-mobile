import { Component } from '@angular/core';

import { TabModel } from '../../models/tab-model';

@Component({
  selector: 'page-sub-tabs',
  templateUrl: 'sub-tabs.html'
})
export class SubTabsPage {

  tabs: Array<TabModel>;

  constructor() {

    this.tabs = TabModel.buildSubTabs();

  }
}
