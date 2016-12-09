import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabModel } from '../../models/tab-model';
import { StorageService } from '../../services/basic/storage-service';
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-myart-tabs',
  templateUrl: 'myart-tabs.html',
  providers: [StorageService]
})
export class MyArtTabsPage {

  tabs: Array<TabModel>;

  constructor(public navCtrl: NavController, private storageService: StorageService) {

    this.tabs = TabModel.buildMyArtTabs();

  }

  quit() {
    this.storageService.remove("hengtong-id");
    this.navCtrl.push(TabsPage);
  }
}
