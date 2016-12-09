import { Component } from '@angular/core';

import { TabModel } from '../../models/tab-model';

@Component({
  selector: 'page-myart-tabs',
  templateUrl: 'myart-tabs.html'
})
export class MyArtTabsPage {

  tabs: Array<TabModel>;

  constructor() {

    this.tabs = TabModel.buildMyArtTabs();

  }
}
