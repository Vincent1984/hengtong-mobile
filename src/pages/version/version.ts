import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { StorageService } from '../../services/basic/storage-service';
import {ResourceService} from "../../services/basic/resource-service";
import {ColumnInfoModel} from "../../models/column-info-model";
import {MessageModel} from "../../models/message-model";
import {MessageService} from "../../services/business/message-service";
import {VersionModel} from "../../models/version-model";
import {VersionService} from "../../services/business/version-service";

@Component({
  selector: 'page-version',
  templateUrl: 'version.html',
  providers: [ResourceService, MessageService,StorageService]
})
export class VersionPage {
  versionModel: VersionModel;
  columnInfoModel: ColumnInfoModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private versionService: VersionService, private storageService: StorageService) {
    this.columnInfoModel = navParams.data;
    this.versionModel = new VersionModel();
    this.loadVersion();
  }

  loadVersion() {
    if (this.versionModel.currentVersion && this.versionModel.osStr) {
      let promise = this.versionService.getVersion(this.versionModel);
      if (promise) {
        promise.then(data => {
          if (0 == data.errorCode) {
            alert("最新版本获取成功");
          }else{
            alert("最新版本获取失败");
          }
        });
      }
    }else {
      alert("无当前版本信息");
    }
  }
}
