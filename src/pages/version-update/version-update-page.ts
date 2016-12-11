import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StorageService } from '../../services/basic/storage-service';
import { ResourceService } from '../../services/basic/resource-service';
import { VersionInfoService } from '../../services/business/version-info-service';

import { ColumnInfoModel } from '../../models/column-info-model';
import { VersionInfoModel } from '../../models/version-info-model';

@Component({
  selector: 'version-update-page',
  templateUrl: 'version-update-page.html',
  providers: [ResourceService, VersionInfoService, StorageService]
})
export class VersionUpdatePage {

  versionInfoModel: VersionInfoModel;
  columnInfoModel: ColumnInfoModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private versionInfoService: VersionInfoService, private storageService: StorageService) {
    this.columnInfoModel = navParams.data;
    this.versionInfoModel = new VersionInfoModel();
    this.loadVersion();
  }

  loadVersion() {
    if (this.versionInfoModel.currentVersion && this.versionInfoModel.osStr) {
      let promise = this.versionInfoService.getVersion(this.versionInfoModel);
      if (promise) {
        promise.then(data => {
          if (0 == data.errorCode) {
            alert('最新版本获取成功');
          } else {
            alert('最新版本获取失败');
          }
        });
      }
    } else {
      alert('无当前版本信息');
    }
  }

}
