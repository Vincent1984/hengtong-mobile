import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SubTabsPage } from './sub-tabs';

import { TabModel } from '../../models/tab-model';
import { ColumnType } from '../../models/column-info-model';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabs: Array<TabModel>;

  constructor(public navCtrl: NavController) {

    this.tabs = TabModel.buildTabs();

  }

  doSelected(tab) {
    if (ColumnType.MY == tab.columnInfoModel.columnType) {
      this.navCtrl.push(SubTabsPage);
    }
  }

}
