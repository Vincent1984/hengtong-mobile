import { Component } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';

import { StorageService } from '../../services/basic/storage-service';
import { ResourceService } from '../../services/basic/resource-service';
import { VersionInfoService } from '../../services/business/version-info-service';

import { ColumnInfoModel } from '../../models/column-info-model';
import { VersionInfoModel } from '../../models/version-info-model';
import {CommonService} from "../../services/basic/common-service";

@Component({
  selector: 'version-update-page',
  templateUrl: 'version-update-page.html',
  providers: [ResourceService, VersionInfoService, StorageService]
})
export class VersionUpdatePage{

  versionInfoModel: VersionInfoModel;
  columnInfoModel: ColumnInfoModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private versionInfoService: VersionInfoService, private storageService: StorageService, private alertCtrl: AlertController) {
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
            this.showAlert('最新版本获取成功');
          } else {
            this.showAlert('最新版本获取失败');
          }
        });
      }
    } else {
      this.showAlert('无当前版本信息');
    }
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: '信息提示',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
