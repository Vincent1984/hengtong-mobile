import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

// 引入内容信息页面
import { ContentInfoPage } from '../content-info/content-info-page';

// 引入资源服务
import { ResourceService } from '../../services/basic/resource-service';
import { ContentInfoService } from '../../services/business/content-info-service';

// 引入资源模型
import { ColumnInfoModel } from '../../models/column-info-model';
import { ContentInfoModel } from "../../models/content-info-model";

import { DefaultImgPipe } from "../../pipes/default-img-pipe";

@Component({
  selector: 'content-list-page',
  templateUrl: 'content-list-page.html',
  providers: [ResourceService, ContentInfoService, DefaultImgPipe]
})
export class ContentListPage {

  columnInfoModel: ColumnInfoModel;
  hasSubColumn: boolean;
  defaultImg: string;

  //内容列表
  contentInfos: Array<ContentInfoModel>;
  contentInfosMap: Map<string, Array<ContentInfoModel>>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contentInfoService: ContentInfoService) {

    this.columnInfoModel = navParams.data;

    if (this.columnInfoModel.subColumns) {
      this.hasSubColumn = true;
      this.loadContentsMap(this.columnInfoModel.subColumns);
    }

  }

  /**
   * 加载栏目内容
   */
  loadContentsMap(subColumns) {
    this.contentInfosMap = new Map();
    if (subColumns) {
      subColumns.forEach(subColumn => {
        this.loadContents(subColumn.columnId);
      });
    }
  }

  loadContents(columnId) {
    return this.contentInfoService.findPaging(columnId).then(pagingModel => {
      if (pagingModel && pagingModel.result && 0 < pagingModel.result.length) {
        // 设置默认选中的栏目数据
        if (this.columnInfoModel.selectedSubId == columnId) {
          this.contentInfos = pagingModel.result;
        }
        // 缓存数据
        this.contentInfosMap.set(columnId, pagingModel.result);
      }
    });
  }

  doSelect(subColumn) {
    this.columnInfoModel.selectedSubId = subColumn.columnId;
    this.contentInfos = this.contentInfosMap.get(subColumn.columnId);
  }

  /**
   * 下滑刷新数据
   */
  doRefresh(refresher) {
    console.log('Async operation has ended');
    this.contentInfoService.restoration(this.columnInfoModel.selectedSubId);
    this.loadContents(this.columnInfoModel.selectedSubId).then(() => {
      refresher.complete();
    });
  }

  /**
   * 上滑加载数据
   */
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.loadContents(this.columnInfoModel.selectedSubId).then(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    });
  }

  goContentPage(contentId) {
    this.navCtrl.push(ContentInfoPage, {
      contentId: contentId
    });
  }

}
