import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ColumnTabsPage } from "../column-tabs/column-tabs-page";

import { TabModel } from '../../models/tab-model';
import { StorageService } from '../../services/basic/storage-service';

@Component({
  selector: 'myart-tabs-page',
  templateUrl: 'myart-tabs-page.html',
  providers: [StorageService]
})
export class MyartTabsPage {

  tabs: Array<TabModel>;

  constructor(public navCtrl: NavController, private storageService: StorageService) {

    this.tabs = TabModel.buildMyArtTabs();

  }

  quit() {
    this.storageService.remove('hengtong-id');
    this.navCtrl.push(ColumnTabsPage);
  }

}
