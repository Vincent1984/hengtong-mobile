import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

import { ColumnInfoModel } from "../../models/column-info-model";
import { ContentInfoModel } from "../../models/content-info-model";

import { ResourceService } from "../../services/basic/resource-service";
import { ContentInfoService } from '../../services/business/content-info-service';
import { RecommandInfoService } from "../../services/business/recommand-info-service";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ResourceService, ContentInfoService,RecommandInfoService]
})
export class HomePage {

  @ViewChild('mySlider') slider: Slides;

  legacy: string = "puppies";
  record_num : number;

  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    pager: true
  };

  // 非遗动态
  contentInfosFYDT: Array<ContentInfoModel>;
  // 非遗名录
  contentInfosFYML: Array<ContentInfoModel>;
  // 非遗规章
  contentInfosFYGZ: Array<ContentInfoModel>;

  //推荐内容
  contentInfosTJNR: Array<ContentInfoModel>;

  constructor(public navCtrl: NavController, private contentInfoService: ContentInfoService, private recommandInfoService: RecommandInfoService) {
    this.record_num = 3;
    this.loadContents();
  }

  goToSlide() {
    this.slider.slideTo(2, 500);
  }

  loadContents() {
    this.contentInfoService.topList(ColumnInfoModel.FYDT_ID, this.record_num).then(contentInfos => {
      this.contentInfosFYDT = contentInfos;
    });

    this.contentInfoService.topList(ColumnInfoModel.FYML_ID, this.record_num).then(contentInfos => {
      this.contentInfosFYML = contentInfos;
    });

    this.contentInfoService.topList(ColumnInfoModel.FYGZ_ID, this.record_num).then(contentInfos => {
      this.contentInfosFYGZ = contentInfos;
    });

    // this.recommandInfoService.topList(ColumnInfoModel.TJNR_ID, this.record_num).then(contentInfos => {
    //   this.contentInfosTJNR = contentInfos;
    // });
  }

  goToPage(columnId) {
    this.navCtrl.push(TabsPage);
  }

}
