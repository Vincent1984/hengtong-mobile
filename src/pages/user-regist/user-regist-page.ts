import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

import { UserLoginPage } from '../user-login/user-login-page';
import { MyartTabsPage } from '../myart-tabs/myart-tabs-page';

import { UserInfoService } from '../../services/business/user-info-service';
import { StorageService } from '../../services/basic/storage-service';
import { ResourceService } from '../../services/basic/resource-service';

import { UserInfoModel } from '../../models/user-info-model';
import {ColumnTabsPage} from "../column-tabs/column-tabs-page";

@Component({
  selector: 'user-regist-page',
  templateUrl: 'user-regist-page.html',
  providers: [ResourceService, UserInfoService, StorageService]
})
export class UserRegistPage {

  userInfoModel: UserInfoModel;

  constructor(public navCtrl: NavController, private userInfoService: UserInfoService, private storageService: StorageService, private alertCtrl: AlertController) {
    this.userInfoModel = new UserInfoModel();
  }

  regist() {
    if (this.userInfoModel&&this.userInfoModel.userName && this.userInfoModel.passWord && this.userInfoModel.confirmPassWord && this.userInfoModel.telNum) {
      if (this.userInfoModel.passWord != this.userInfoModel.confirmPassWord) {
        this.showAlert('密码不一致');
      } else {
        let promise = this.userInfoService.regist(this.userInfoModel);
        if (promise) {
          promise.then(data => {
            if (data && 0 == data.errorCode) {
              this.storageService.write('hengtong-id', data.result[0].userId);
              this.navCtrl.push(MyartTabsPage);
            } else if (data && 0 != data.errorCode) {
              this.showAlert(data.errorMsg);
            } else {
              this.showAlert("注册账户出现问题了@_@");
            }
          });
        }
      }
    } else {
      this.showAlert('请输入必填项');
    }
  }

  openLogin() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(UserLoginPage);
  }

  openHome() {
    this.navCtrl.push(ColumnTabsPage);
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
