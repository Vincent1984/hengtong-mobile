import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

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

  tabs: Array<TabModel>;

  constructor(public navCtrl: NavController, private storageService: StorageService) {

    this.tabs = TabModel.buildTabs();

  }

  doSelected(tab) {
    if (ColumnType.MY == tab.columnInfoModel.columnType) {
      if (this.storageService.read("hengtong-id")) {
        this.navCtrl.push(MyArtTabsPage);
      } else {
        this.navCtrl.push(LoginPage);
      }
    }
  }

}
