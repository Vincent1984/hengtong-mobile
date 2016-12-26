import { Component } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';

import { StorageService } from '../../services/basic/storage-service';
import { ResourceService } from '../../services/basic/resource-service';
import { VersionInfoService } from '../../services/business/version-info-service';

import { ColumnInfoModel } from '../../models/column-info-model';
import { VersionInfoModel } from '../../models/version-info-model';
import {Transfer} from "ionic-native";

declare var cordova: any;

@Component({
  selector: 'version-update-page',
  templateUrl: 'version-update-page.html',
  providers: [ResourceService, VersionInfoService, StorageService]
})
export class VersionUpdatePage{

  versionInfoModel: VersionInfoModel;
  columnInfoModel: ColumnInfoModel;
  newUrl: string;
  canUpdate : number;




  constructor(public navCtrl: NavController, public navParams: NavParams, private versionInfoService: VersionInfoService, private storageService: StorageService, private alertCtrl: AlertController) {
    this.columnInfoModel = navParams.data;
    this.canUpdate = 0;
    this.versionInfoModel = new VersionInfoModel();
    this.versionInfoModel.initVersion();
    this.loadVersion();
  }

  loadVersion() {
    if (this.versionInfoModel.currentVersion && this.versionInfoModel.osStr) {
      let promise = this.versionInfoService.getVersion(this.versionInfoModel);
      if (promise) {
        promise.then(data => {
          if (data && 0 == data.errorCode) {
            if (data.result.length>0) {
              this.newUrl = data.result[0];
              this.canUpdate = 1;
              this.showAlert('最新版本获取成功');
            }else {
              this.canUpdate = 0;
              this.showAlert('无最新版本');
            }
          } else if(data){
            this.canUpdate = 0;
            this.showAlert('无最新版本');
          } else {
            this.canUpdate = 0;
            this.showAlert('最新版本获取失败');
          }
        });
        console.log(this.newUrl);
      }
    } else {
      this.canUpdate = 0;
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

  doUpgrade() {
    const fileTransfer = new Transfer();
    if(this.newUrl.endsWith('apk')) {
      fileTransfer.download(this.newUrl, cordova.file.dataDirectory + 'dalianqunyi.apk').then((entry) => {
        console.log('download complete: ' + entry.toURL());
      }, (error) => {
        // handle error
      });
    }else {
      fileTransfer.download(this.newUrl, cordova.file.documentsDirectory + 'dalianqunyi.apk').then((entry) => {
        console.log('download complete: ' + entry.toURL());
      }, (error) => {
        // handle error
      });
    }
  }

}
