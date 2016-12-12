import { Component } from '@angular/core';
//import { Validators, FormBuilder } from '@angular/forms';

import {NavController, AlertController} from 'ionic-angular';

import { UserRegistPage } from '../user-regist/user-regist-page';
import { MyartTabsPage } from "../myart-tabs/myart-tabs-page";

import { ResourceService } from '../../services/basic/resource-service';
import { UserInfoService } from '../../services/business/user-info-service';
import { StorageService } from '../../services/basic/storage-service';

import { UserInfoModel } from '../../models/user-info-model';
import {ColumnTabsPage} from "../column-tabs/column-tabs-page";

@Component({
  selector: 'user-login-page',
  templateUrl: 'user-login-page.html',
  providers: [ResourceService, UserInfoService, StorageService]
})
export class UserLoginPage {

  userInfoModel: UserInfoModel;

  constructor(public navCtrl: NavController, private userInfoService: UserInfoService, private storageService: StorageService, private alertCtrl : AlertController) {
    this.checkIfLogined();
    this.userInfoModel = new UserInfoModel();
  }

  login() {
    let promise = this.userInfoService.login(this.userInfoModel);
    if (promise) {
      promise.then(data => {
        if (data && 0 == data.errorCode) {
          this.storageService.write('hengtong-id', data.result[0].userId);
          this.navCtrl.push(MyartTabsPage);
        } else if (data && 0 != data.errorCode) {
          this.showAlert("登陆出现问题了@_@"+data.errorMsg);
        } else {
          this.showAlert("登陆出现问题了@_@");
        }
      });
    }
  }

  openRegist() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(UserRegistPage);
  }

  openHome() {
    this.navCtrl.push(ColumnTabsPage);
  }

  checkIfLogined() {
      let userId = this.userInfoService.getUserId();
      console.log('hengtong-id is ' + userId);
      if (userId) {
        this.navCtrl.push(MyartTabsPage);
      } else {
        //stay here
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
