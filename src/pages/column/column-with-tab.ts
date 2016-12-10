import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {ColumnInfoModel} from '../../models/column-info-model';
import { ContentInfoService } from '../../services/business/content-info-service';
import { ResourceService } from "../../services/basic/resource-service";
import { ContentInfoModel } from "../../models/content-info-model";
import {ItemDetailsPage} from "../item-details/item-details";

@Component({
  selector: 'column-with-tab',
  templateUrl: 'column-with-tab.html',
  providers: [ResourceService, ContentInfoService]
})
export class ColumnWithTabPage {

  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  columnInfoModel: ColumnInfoModel;
  hasNavTab: any;
  selectedNavTabId: any;
  record_num : number;

  //内容列表
  contentInfos: Array<ContentInfoModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contentInfoService: ContentInfoService ) {
    this.columnInfoModel = navParams.data;
    this.record_num = 20;

    this.items = [];
    // for (var i = 0; i < 30; i++) {
    //   this.items.push({ title: 'test', note: 'test', icon: 'http://d.ifengimg.com/q75/img1.ugc.ifeng.com/newugc/20161124/image/17/201_0gZKL05e08c_watermark0gZK2bN007O.jpg' });
    // }

    if (this.columnInfoModel.navTabs) {
      this.hasNavTab = true;
      this.selectedNavTabId = this.columnInfoModel.navTabs[0].tabId;

      this.loadFirstContents(this.columnInfoModel.navTabs[0].tabId);
    }

    this.selectedItem = navParams.get('item');
  }

  selectedSubTab(navTab) {
    this.selectedNavTabId = navTab.tabId;
    this.contentInfoService.topList(this.selectedNavTabId, this.record_num).then(contentInfos => {
      this.contentInfos = contentInfos;
    });
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

  loadFirstContents(tabId){
      this.contentInfoService.topList(tabId, this.record_num).then(contentInfos => {
        this.contentInfos = this.dealWithImgPath(contentInfos);
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
  dealWithImgPath(contentInfos) {
    for (var i = 0; i < contentInfos.length; i++) {
      contentInfos[i].imgName="http://218.61.0.14:8080/dlqzysgweb/Public/upload/article/"+contentInfos[i].imgName;
    }
    return contentInfos;
  }

}
