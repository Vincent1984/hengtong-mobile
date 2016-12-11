import { Component } from '@angular/core';

import { NavController, NavParams, } from 'ionic-angular';


import { ResourceService } from '../../services/basic/resource-service';

import {RecommandInfoService} from "../../services/business/recommand-info-service";
import {ContentInfoModel} from "../../models/content-info-model";
import {ContentInfoPage} from "../content-info/content-info-page";


@Component({
  selector: 'recommand-list-page',
  templateUrl: 'recommand-list-page.html',
  providers: [ResourceService, RecommandInfoService]
})
export class RecommandListPage {

  userId: string;
  columnId: string;

  //消息列表
  contentInfos: Array<ContentInfoModel>;
  contentInfosMap: Map<string, Array<ContentInfoModel>>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private recommandInfoService: RecommandInfoService) {
    this.columnId = "RECOMMAND";
    this.contentInfosMap = new Map();
    this.loadContents();
  }

  loadContents() {
    return this.recommandInfoService.findPaging().then(pagingModel => {
      if (pagingModel.result && 0 < pagingModel.result.length) {
        // 设置默认选中的栏目数据
        this.contentInfos = pagingModel.result;
        // 缓存数据
        this.contentInfosMap.set(this.columnId, pagingModel.result);
      }
    });
  }

  /**
   * 下滑刷新数据
   */
  doRefresh(refresher) {
    console.log('Async operation has ended');
    if (this.userId) {
      this.recommandInfoService.restoration(this.columnId);
      this.loadContents().then(() => {
        refresher.complete();
      });
    }
  }

  /**
   * 上滑加载数据
   */
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    if (this.userId) {
      this.loadContents().then(() => {
        console.log('Async operation has ended');
        infiniteScroll.complete();
      });
    }
  }

  goContentInfoPage(contentId) {
    this.navCtrl.push(ContentInfoPage, {
      contentId: contentId
    });
  }

}
