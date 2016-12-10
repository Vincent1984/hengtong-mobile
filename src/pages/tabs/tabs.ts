import { Component, ViewChild } from '@angular/core';

import { NavController, Tabs } from 'ionic-angular';

import { MyArtTabsPage } from '../myart-tabs/myart-tabs';

import { TabModel } from '../../models/tab-model';
import { ColumnType } from '../../models/column-info-model';
import { StorageService } from '../../services/basic/storage-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  providers: [StorageService]
})
export class TabsPage {

  @ViewChild('myTabs') tabRef: Tabs;

  tabs: Array<TabModel>;

  constructor(public navCtrl: NavController, private storageService: StorageService) {

    this.tabs = TabModel.buildTabs();

  }

  doSelected(tab) {
    if (ColumnType.MY == tab.columnInfoModel.columnType) {
      var hengtongId=this.storageService.read("hengtong-id");
      console.log("hengtong-id is "+hengtongId);
      if (hengtongId && hengtongId!=null && hengtongId!={}) {
        this.navCtrl.push(MyArtTabsPage);
      } else {
        this.navCtrl.push(LoginPage);
      }
    }
  }

  goSelected(tabIndex) {
    this.tabRef.select(tabIndex);
  }

}
