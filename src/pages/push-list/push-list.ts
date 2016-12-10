import { Component } from '@angular/core';

import { NavController, NavParams, } from 'ionic-angular';

import {ColumnInfoModel} from '../../models/column-info-model';
import {PushInfoService} from "../../services/business/push-info-service";
import {StorageService} from "../../services/basic/storage-service";
import {ResourceService} from "../../services/basic/resource-service";
import {PushInfoModel} from "../../models/push-info-model";
import {PushDetailPage} from "./push-detail";

@Component({
  selector: 'page-push-list',
  templateUrl: 'push-list.html',
  providers: [StorageService,PushInfoService,ResourceService]
})
export class PushListPage {

  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  columnInfoModel: ColumnInfoModel;

  //内容列表
  pushInfos: Array<PushInfoModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pushInfoService: PushInfoService, private storageService: StorageService) {
    this.columnInfoModel = navParams.data;
    this.loadContents();
  }

  doRefresh(refresher) {
    refresher.complete();
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      for (var i = 0; i < 30; i++) {
        this.items.push(this.items[i]);
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  itemTapped(event, item) {
    this.navCtrl.push(PushDetailPage, {
      item: item
    });
  }


  loadContents(){
    this.pushInfoService.list(this.storageService.read("hengtong-id")).then(pushInfos => {
      this.pushInfos =  pushInfos;
    });
  }

}
