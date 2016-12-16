import { Component, ViewChild, Host, forwardRef, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

import { ColumnTabsPage } from "../column-tabs/column-tabs-page";
import { ContentInfoPage } from "../content-info/content-info-page";

import { ColumnInfoModel } from "../../models/column-info-model";
import { ContentInfoModel } from "../../models/content-info-model";

import { ResourceService } from "../../services/basic/resource-service";
import { ContentInfoService } from '../../services/business/content-info-service';
import { RecommandInfoService } from "../../services/business/recommand-info-service";
import {RecommandListPage} from "../recommand-list/recommand-list-page";
import {TrainingListPage} from "../training-list/training-list-page";
import {TrainingInfoService} from "../../services/business/training-info-service";
import {Constants} from "../../services/constants/constants";

@Component({
  selector: 'museum-home-page',
  templateUrl: 'museum-home-page.html',
  providers: [ResourceService, ContentInfoService, RecommandInfoService, TrainingInfoService]
})
export class MuseumHomePage {

  @ViewChild('mySlider') slider: Slides;

  legacy: string = "puppies";

  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    pager: true
  };

  //轮播图
  contentInfosBANNER: Array<ContentInfoModel>;

  //群文资讯
  contentInfosQWZX1: Array<ContentInfoModel>;
  contentInfosQWZX2: Array<ContentInfoModel>;

  // 非遗动态
  contentInfosFYDT: Array<ContentInfoModel>;
  // 非遗名录
  contentInfosFYML: Array<ContentInfoModel>;
  // 非遗规章
  contentInfosFYGZ: Array<ContentInfoModel>;

  //推荐内容
  contentInfosTJNR: Array<ContentInfoModel>;

  contentInfosPXTZ: Array<ContentInfoModel>;

  hasTraining: number;

  tabs: ColumnTabsPage;

  constructor( @Host() @Inject(forwardRef(() => ColumnTabsPage)) tabs: ColumnTabsPage, public navCtrl: NavController, private contentInfoService: ContentInfoService, private recommandInfoService: RecommandInfoService, private trainingInfoService: TrainingInfoService) {
    this.loadContents();
    this.tabs = tabs;
  }

  goToSlide() {
    this.slider.slideTo(2, 500);
  }

  loadContents() {

    this.contentInfoService.findTops(ColumnInfoModel.QWZX_ID, 3).then(contentInfos => {
      this.contentInfosBANNER = this.dealWithImgPath(contentInfos);
    });

    this.contentInfoService.findTops(ColumnInfoModel.QWZX_ID, 2, 4).then(contentInfos => {
      this.contentInfosQWZX1 = this.dealWithImgPath(contentInfos);
    });
    this.contentInfoService.findTops(ColumnInfoModel.QWZX_ID, 2, 6).then(contentInfos => {
      this.contentInfosQWZX2 = this.dealWithImgPath(contentInfos);
    });

    this.contentInfoService.findTops(ColumnInfoModel.FYDT_ID, 3).then(contentInfos => {
      this.contentInfosFYDT = this.dealWithImgPath(contentInfos);
    });

    this.contentInfoService.findTops(ColumnInfoModel.FYML_ID, 3).then(contentInfos => {
      this.contentInfosFYML = this.dealWithImgPath(contentInfos);
    });

    this.contentInfoService.findTops(ColumnInfoModel.FYGZ_ID, 3).then(contentInfos => {
      this.contentInfosFYGZ = this.dealWithImgPath(contentInfos);
    });

    this.recommandInfoService.topList(3).then(contentInfos => {
      this.contentInfosTJNR = this.dealWithImgPath(contentInfos);
    });

    this.trainingInfoService.topList(3).then(contentInfos => {
      if(contentInfos && contentInfos.length > 0) {
        this.hasTraining = 1;
      } else {
        this.hasTraining = 0;
      }
      this.contentInfosPXTZ = this.dealWithImgPath(contentInfos);
    });



  }

  goToPage(columnId) {
    this.navCtrl.push(ColumnTabsPage);
  }
  goToRecommandPage() {
    this.navCtrl.push(RecommandListPage);
  }

  goToTrainingPage(){
    this.navCtrl.push(TrainingListPage);
  }

  dealWithImgPath(contentInfos) {
    for (var i = 0; i < contentInfos.length; i++) {
      contentInfos[i].imgName = Constants.IMG_URL + contentInfos[i].imgName;
    }
    return contentInfos;
  }

  itemTapped(event, item) {
    this.navCtrl.push(ContentInfoPage, {
      item: item
    });
  }

  goContentPage(contentId) {
    this.navCtrl.push(ContentInfoPage, {
      contentId: contentId
    });
  }

  doRefresh(refresher){
    this.loadContents();
    refresher.complete();
  }

}
