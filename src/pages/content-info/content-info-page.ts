import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

// 引入资源服务
import { ResourceService } from '../../services/basic/resource-service';
import { ContentInfoService } from '../../services/business/content-info-service';

import { ContentInfoModel } from "../../models/content-info-model";

@Component({
  selector: 'content-info-page',
  templateUrl: 'content-info-page.html',
  providers: [ResourceService, ContentInfoService]
})
export class ContentInfoPage {

  contentInfoModel: ContentInfoModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contentInfoService: ContentInfoService) {
    this.contentInfoModel = new ContentInfoModel();
    this.loadContent();
  }

  loadContent() {
    this.contentInfoService.getDetail(this.navParams.data.contentId).then(result => {
      if(result){
        this.contentInfoModel = result[0];
      }else{
        // alert("没有获取到数据");
      }

    });
  }

}
